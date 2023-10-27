type CookieParamType = {
    cookieString: string;
    domain?: string;
    secure?: boolean;
    samesite?: string;
    projectId?: string;
};

export function parseCookie(params: CookieParamType) {
    const { cookieString, domain, secure, samesite, projectId } = params;

    const cookies: any = {};
    const regularCookies: any = {};
    const legacyCookies: any = {};

    const cookiePairs = cookieString.split(';');

    for (const pair of cookiePairs) {
        const parts = pair.trim().split('=');
        let key = parts[0];
        const value = decodeURIComponent(parts[1] || '');
        cookies[key] = value;

        // Handle special properties
        if (key.toLowerCase() === 'expires') {
            cookies.expires = value;
        } else if (key.toLowerCase() === 'path') {
            cookies.path = value;
        } else if (key.toLowerCase() === 'samesite') {
            cookies.samesite = value;
        } else if (key.toLowerCase() === 'httponly') {
            cookies.httponly = true;
        } else if (
            key.toLowerCase() === `a_session_${projectId}` ||
            key.toLowerCase() === `a_session_${projectId}_legacy`
        ) {
            cookies.name = value;
            if (key.toLowerCase().endsWith('_legacy')) {
                legacyCookies[key] = value;
            } else {
                regularCookies[key] = value;
            }
        }

        if (domain) {
            cookies.domain = domain;
        }
        if (secure) {
            cookies.secure = secure;
        }
        if (samesite) {
            cookies.sameSite = samesite;
        }
    }

    cookies.regularCookies = regularCookies;
    cookies.legacyCookies = legacyCookies;

    return cookies;
}


