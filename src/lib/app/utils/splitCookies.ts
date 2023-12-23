export function splitCookie(cookies: string): any[]{
    const firstHttpOnlyIndex = cookies.indexOf('httponly');
    if(firstHttpOnlyIndex === -1){
        return [cookies];
    }

    const firstCookie = cookies.slice(0, firstHttpOnlyIndex + 7);
    const secondCookie = cookies.slice(firstHttpOnlyIndex + 7);

    return [firstCookie, secondCookie]
}