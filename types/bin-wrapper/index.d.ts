// Type definitions for bin-wrapper
// Project: bin-wrapper
// Definitions by: Tyler Butler <https://tylerbutler.com>

export = bin_wrapper;

declare namespace bin_wrapper {
    type Architecture = "x86" | "x64";
    type Platform = "linux" | "darwin" | "win32";
    export interface Options {
        skipCheck?: boolean;
        strip?: number;
    }

    interface BinSource {
        url: string;
        platform?: Platform;
        arch?: Architecture;
    }
}
declare class bin_wrapper {
    constructor(options?: bin_wrapper.Options);
    dest(destination: string): bin_wrapper;
    dest(): string;
    download(): Promise<void>;
    path(): string;
    run(...cmd: string[]): void;
    src(url: string, platform?: bin_wrapper.Platform, arch?: bin_wrapper.Architecture): bin_wrapper;
    src(): bin_wrapper.BinSource;
    use(binary: string): bin_wrapper;
    use(): string;
    version(range: string): bin_wrapper;
    version(): string;
}
