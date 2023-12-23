export function createCookieObject(cookie: 
    {
    expires: Date, domain: string
    }
){
    return {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'none',
        expires: new Date(cookie.expires),
        domain:  cookie.domain
    }
}