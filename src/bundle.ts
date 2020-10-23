import { BinSource } from "bin-wrapper";

export interface Bundle {
    name: string;
    zipped: boolean,
    mappings?: BinSource[];
    destination?: string;
    outputFile?: string;
}

const ditaaBaseUrl = "https://github.com/akavel/ditaa/releases/download/g1.0.0/";

const ditaa: Bundle = {
    name: "ditaa",
    zipped: false,
    mappings: [
        { url: `${ditaaBaseUrl}ditaa-windows-amd64.exe`, platform: "win32", arch: "x64" },
        { url: `${ditaaBaseUrl}ditaa-windows-386.exe`, platform: "win32", arch: "x86" },
        { url: `${ditaaBaseUrl}ditaa-darwin-amd64`, platform: "darwin", arch: "x64" },
        { url: `${ditaaBaseUrl}ditaa-darwin-386`, platform: "darwin", arch: "x86" },
        { url: `${ditaaBaseUrl}ditaa-linux-amd64`, platform: "linux", arch: "x64" },
        { url: `${ditaaBaseUrl}ditaa-linux-386`, platform: "linux", arch: "x86" },
    ]
}

const hugoBaseUrl = "https://github.com/gohugoio/hugo/releases/download/v";
const hugoVersion = "0.76.5";

const hugo: Bundle = {
    name: "hugo",
    zipped: true,
    mappings: [
        {
            url: `${hugoBaseUrl}${hugoVersion}/hugo_extended_${hugoVersion}_Windows-64bit.zip`,
            platform: "win32",
            arch: "x64"
        },
        {
            url: `${hugoBaseUrl}${hugoVersion}/hugo_extended_${hugoVersion}_Linux-64bit.tar.gz`,
            platform: "linux",
            arch: "x64"
        },
        {
            url: `${hugoBaseUrl}${hugoVersion}/hugo_extended_${hugoVersion}_macOS-64bit.tar.gz`,
            platform: "darwin",
            arch: "x64"
        },
    ]
}

export const failedBundle: Bundle = {
    name: "FAILURE",
    destination: "bin",
    zipped: false,
};

export const builtInBundles = new Map<string, Bundle>();
builtInBundles.set(ditaa.name, ditaa);
builtInBundles.set(hugo.name, hugo);
