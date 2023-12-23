import { config } from "../config";

export function createAppwriteSession(isLegacy: boolean = false): string{
    let session = `a_session_${config.appwrite.projectId}`;
    if(isLegacy) session = `${session}_legacy`;
    return session;
}