#!/usr/bin/env node

import yargs from "yargs";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { _: commands, ...rest } = yargs
    // const argv = yargs //(process.argv.slice(2))
    .version(true) // Disable default version flag (we're using our own in the next line)
    .commandDir("./commands")
    .demandCommand()
    .scriptName("binstall")
    .help()
    .alias("h", "help").argv;

// console.log(JSON.stringify(commands));
// console.log(JSON.stringify(rest));
