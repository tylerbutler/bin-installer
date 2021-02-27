import { BinSource } from "bin-wrapper";

export interface Bundle {
    name: string;
    zipped: boolean;
    mappings?: BinSource[];
    destination?: string;
    outputFile?: string;
}
