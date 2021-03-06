import { ditaa } from "./ditaa";
import { hugo } from "./hugo";
import { sd } from "./sd";
import { Bundle } from "./types";

export const failedBundle: Bundle = {
    name: "FAILURE",
    destination: "bin",
    zipped: false,
};

export const builtInBundles = new Map<string, Bundle>();
builtInBundles.set(ditaa.name, ditaa);
builtInBundles.set(hugo.name, hugo);
builtInBundles.set(sd.name, sd);
