import { Bundle } from "./types";

const hugoBaseUrl = "https://github.com/gohugoio/hugo/releases/download/v";
const hugoVersion = "0.76.5";

export const hugo: Bundle = {
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
