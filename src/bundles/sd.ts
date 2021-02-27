import { Bundle } from "./types";

const defaultVersion = "v0.7.5"
const baseUrl = "https://github.com/chmln/sd/releases/download/v0.7.5/sd.0.7.5-.x86_64-apple-darwin.zip";
export const sd: Bundle = {
    name: "sd",
    zipped: true,
    mappings: [
        {
            platform: "darwin",
            arch: "x64",
            url: `${baseUrl}${defaultVersion}/sd.${defaultVersion}-.x86_64-apple-darwin.zip`,
        },
        {
            platform: "win32",
            arch: "x64",
            url: `${baseUrl}${defaultVersion}/sd.${defaultVersion}-.x86_64-pc-windows-msvc.zip`,
        },
        {
            platform: "linux",
            arch: "x64",
            url: `${baseUrl}${defaultVersion}/sd.${defaultVersion}-.x86_64-unknown-linux-gnu.zip`,
        },
    ]
}
