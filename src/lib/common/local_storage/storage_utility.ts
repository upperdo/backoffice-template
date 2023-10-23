import { browser } from "$app/environment";

/**
 * @class
 * @name StorageUtility
 * @description Local Storage utility and avoid errors on server side
 */
export class StorageUtility {
    /**
     * @name getData
     * @param key 
     * @description Get local storage from browser
     * @returns {any}
     */
    static getData(key: string): any{
        if(browser){
            return localStorage.getItem(key);
        }
    }

    /**
     * @name saveData
     * @param key 
     * @param data 
     * @description Save data to browser local storage
     * @returns {void}
     */
    static saveData(key: string, data: any): void{
        if(browser){
            localStorage.setItem(key, data);
        }
    }


    /**
     * @name removeData
     * @param key 
     * @description Remove item from local storage
     * @returns {void}
     */
    static removeData(key: string): void {
        if(browser){
            localStorage.removeItem(key)
        }
    }

    /**
     * @name clearAll
     * @description Clear all data in local storage
     * @returns {void}
     */
    static clearAll(): void {
        if(browser){
            localStorage.clear();
        }
    }

    /**
     * @name serialize
     * @param data 
     * @description Serialize data
     * @returns {string}
     */
    static serialize(data: {[key: string]: any}): string{
        return JSON.stringify(data);
    }

    /**
     * @name deserialize
     * @param data 
     * @description Return deserialize data
     * @returns {JSON}
     */
    static deserialize(data: string): {[key: string]: any} | null{
        if(data){
            return JSON.parse(data)
        }else{
            return {}
        }
    }

    /**
     * @name getSerializedData
     * @description Return deserialized data from browser local storage
     * @returns {JSON}
     */
    static getSerializedData(key: string): {[key: string]: any} | null{
        const storedData = this.getData(key);
        if(storedData){
            return this.deserialize(storedData);
        }else{
            return null;
        }
    }

    /**
     * @name serializeAndSaveData
     * @param data 
     * @description Serialize data and save it to local storage
     * @returns {void}
     */
    static serializeAndSaveData(key: string, data: {[key: string]: any}): void {
        this.saveData(key, this.serialize(data));
    }

}