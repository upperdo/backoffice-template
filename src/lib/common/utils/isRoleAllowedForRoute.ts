import CONSTANTS from "$lib/common/constants"

export function isRoleAllowedForRoute(currentRole: string[], route: string): boolean {
    // Ensure that the route exists in CONSTANTS.ROLES
    if (route in CONSTANTS.ROLES) {
        // @ts-ignore
        const allowedRoles = CONSTANTS.ROLES[route];

        // @ts-ignore
        if (allowedRoles.some(role => currentRole.includes(role))) {
            return true;
        }
    }

    return false;
}