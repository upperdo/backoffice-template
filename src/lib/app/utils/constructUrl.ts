import type { QueryOptions } from "$lib/app/types/interfaces/QueryOptionsInterface";


export function constructUrl(options: QueryOptions, path: string): string {
    const { limit, sort, filter, search } = options;
    const filterString = Object.entries(filter || {})
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                return `${key}:${value.join('-')}`;
            } else {
                return `${key}:${value}`;
            }
        })
        .join('|');

        
        
    const sortString = sort ? `key:${sort.key}|order:${sort.order}` : '';

    const url = `/${path}?limit=${limit}&sort=${sortString}&filter=${filterString}&search=${search}`;
    
    return url;
}