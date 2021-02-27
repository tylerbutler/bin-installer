import { Bundle } from "./types";

const ditaaBaseUrl = "https://github.com/akavel/ditaa/releases/download/g1.0.0/";

export const ditaa: Bundle = {
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
