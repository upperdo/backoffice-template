import type { QueryOptions } from "$lib/app/types/interfaces/QueryOptionsInterface";
import { Query } from "./appwriteUtils";

export function createFilter(options: QueryOptions): any[]{
    let query: any[] = [];
    
    if(Object.entries(options.filter).length > 0){
        query = [...query, ...Object.entries(options.filter).map(([key, value]) => { return Query.search(key, `${value}`) })]
    }
    if(options.sort.order == 'asc'){
        query = [...query, Query.orderAsc(options.sort.key)]
    }else{
        query = [...query, Query.orderDesc(options.sort.key || '$createdAt')]
    }
    if(options.limit){
        query = [...query, Query.limit(options.limit)]
    }

    if(options.search){
        query = [...query, Query.search('search', options.search)]
    }
    return query;
}