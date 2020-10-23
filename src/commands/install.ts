#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable unicorn/import-style */

import del from "del";
import fs from "fs";
import path from "path";
import { builtInBundles, Bundle, failedBundle } from "../bundle";

import BinWrapper from "bin-wrapper";
import osFilterObject = require("os-filter-obj");
import yargs from "yargs";

const defaultDestination = "bin";

export interface configOptions {
    name: string;
    destination: string;
}

exports.command = "install";
exports.describe = "Download and install a binary file";

exports.builder = (yargs: yargs.Argv<configOptions>) => {
    yargs
        .options({
            name: {
                alias: "n",
                describe: "name of binary to download",
                requiresArg: true,
                type: "string",
                choices: [...builtInBundles.keys()],
                demandOption: true,
            },
            destination: {
                alias: "d",
                describe: "Destination folder",
                // requiresArg: true,
                type: "string",
                default: "bin",
            },
        })
        .version(false);
};

exports.handler = async (argv: configOptions): Promise<void> => {

    const config = argv;
    // console.log(JSON.stringify(argv, undefined, 2));

    // Run
    console.log(`Downloading ${config.name} binary into "${config.destination}" ...`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    const bundle = builtInBundles.get(config.name);

    let toLoad: Bundle;
    if (bundle) {
        toLoad = bundle.destination === undefined ? {
            name: bundle.name,
            mappings: bundle.mappings,
            destination: config.destination,
            zipped: bundle.zipped,
        } : failedBundle;
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        toLoad = failedBundle;
    }
    await installBinary(toLoad, false);
}

async function installBinary(bundle: Bundle | undefined, clearPath = true): Promise<void> {
    if (bundle === undefined) {
        throw new Error("bundle can't be undefined");
    }

    const providedPath = bundle.destination ? bundle.destination : defaultDestination;
    const destinationPath = path.isAbsolute(providedPath) ?
        path.resolve(providedPath) :
        path.resolve(process.cwd(), providedPath);

    // Clear destination folder
    if (clearPath) {
        await del(path.join(destinationPath, "**"));
    }

    // Setup and download - using BinWrapper simplfies this somewhat by making it easier
    // to manage per-platform downloads
    let bin = new BinWrapper();

    if (bundle.mappings) {
        for (const mapping of bundle.mappings) {
            bin = bin.src(mapping.url, mapping.platform, mapping.arch);
        }
    }

    bin = bin.dest(destinationPath);

    const binSource = osFilterObject(bin.src())[0];
    const url = new URL(binSource.url);
    const fileName = path.basename(url.pathname);

    bin = bin.use(fileName);
    const binPath = bin.path();

    // Download
    try {
        await bin.download();
        let targetPath = binPath;
        if (!bundle.zipped) {
            targetPath = path.join(
                path.dirname(binPath),
                process.platform === "win32" ?
                    `${bundle.name}.exe` :
                    bundle.name
            )
            fs.renameSync(binPath, targetPath);
            console.log(`${path.basename(targetPath)} downloaded to ${targetPath}`);
        } else {
            console.log(`${path.basename(targetPath)} downloaded to ${path.dirname(targetPath)}`);
        }
        process.exit();
    } catch (error) {
        console.error("Error!");

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (error.toString().includes("404")) {
            console.error(`  -> It seems like "${bundle.name}" does not exist.`);
        }
        console.log("");
        console.dir(error);
        process.exit(1);
    }
}
