/// <reference types="node" />
import { StorageFile } from "./storage-file";
import { Storage } from "@google-cloud/storage";
export declare class StorageService {
    storage: Storage;
    private bucket;
    constructor();
    delete(path: string): Promise<void>;
    get(path: string): Promise<StorageFile>;
    getWithMetaData(path: string): Promise<StorageFile>;
    save(path: string, contentType: string, media: Buffer, metadata: {
        [key: string]: string;
    }[]): Promise<void>;
}
