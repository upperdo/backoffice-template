import type { BackendServiceContext } from "$lib/infraestructure/BackendServiceInterface";
import { config } from "$lib/app/config";

export class AppwriteContextFactory {
    static createContext(databaseId: string, collectionId: string): BackendServiceContext {
        return {
            databaseId: databaseId,
            collectionId: collectionId
        };
    }

    static addressContext(): BackendServiceContext {
        return this.createContext(config.datbases.core.id, config.datbases.core.collections.users)
    }
}