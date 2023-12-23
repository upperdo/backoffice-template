export interface QueryOptions {
    limit: number;
    filter: any
    sort: { key: string, order: string },
    search: string;
}