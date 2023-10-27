import CONSTANTANS from "$lib/common/constants"

export function isRolleAllowedForRoute(currentRole: any[], route: string): boolean{
     // @ts-ignore
    const allowedRoles = CONSTANTANS.ROLES[route];

    if(allowedRoles && allowedRoles.includes(currentRole)){
        return true;
    }
    return false;
}