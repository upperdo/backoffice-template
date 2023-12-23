import { config } from "../config";

export function getFileFromStorage(fileId: string): string{
    return `${config.appwrite.endpoint}/storage/buckets/${config.storage}/files/${fileId}/view?project=${config.appwrite.projectId}&mode=admin`;
}