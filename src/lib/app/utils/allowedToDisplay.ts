export function allowedToDisplay<TStatus, TAllowed>(status: TStatus, allowed: TAllowed[]): boolean {
    // @ts-ignore
    return allowed.includes(status);
}