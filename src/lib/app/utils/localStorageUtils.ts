import { browser } from "$app/environment";

interface Storage {
    value: any;
    expiration: number
}

export function localStorageUtil(){
    function setParsedStorage(key:string, value:any, expiration:any){
        if(browser){
            const currentTime = new Date().getTime();
            const data: Storage = {
                value,
                expiration: currentTime + expiration * 1000,
            }

            localStorage.setItem(key, serialize(data));
        }
    }

    function setStorage(key:string, value:any){
        if(browser){
            localStorage.setItem(key, value);
        }
    }

    function getParsedStorage(key:string){
        if(browser){
            const data = localStorage.getItem(key);
            if(!data) return null;

            const parsedData = unserialize<Storage>(data);
            if(parsedData.expiration > new Date().getTime()){
                return parsedData.value;
            } else {
                localStorage.removeItem(key);
                return null;
            }
        }
    }

    function getStorage(key:string){
        if(browser){
            const data = localStorage.getItem(key);
            if(!data) return null;

            return data;
        }
    }

    function deleteItemFromStorage(key:string){
        if(browser){
            localStorage.removeItem(key);
            return true;
        }
    }

    function serialize(value: any): string{
        return JSON.stringify(value);
    }

    function unserialize<T>(value: string): T{
        return JSON.parse(value);
    }

    return {
        deleteItemFromStorage,
        setStorage,
        setParsedStorage,
        getStorage,
        getParsedStorage,
        serialize,
        unserialize
    }
}