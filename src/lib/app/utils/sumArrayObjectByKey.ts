export function sumArrayObjectByKey<T>(items: T[], key:any): number {
    if(items.length <=0) return 0;
    //@ts-ignore
    return items.reduce((accumulator, object) => { return accumulator + Math.ceil(object[key]) }, 0);
}