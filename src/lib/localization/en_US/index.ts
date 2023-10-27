const lang = {
    loaded: true,
    appTitle: 'This is a test',

    // Login Page
    loginHeading: 'Login to your account',
    loginSubHeading: 'Enter your email and password below to login in your account',

    // Form
    loginBtnText: 'Login',
    emailInputPlaceHolderText: 'name@example.com',
    emailInputLabel: 'Email',
    passwordInputLabel: 'Password',
    passwordInputPlaceHolderText: 'password',
    
    formAgreedText: 'By clicking continue/login, you agree to our',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    andText: 'and',

    unauthorize: {
        title: 'Unauthorized Access',
        paragraph: `
        <p>Sorry, you do not have the necessary permissions to access this page.</p>
        <p>If you believe this is an error or need assistance, please contact our support team.</p>
        <p>Alternatively, you can <a href="/dashboard">go back</a> to the dashboard.</p>
        `
    },

    menu: {
        dashboard: 'Dashboard',
        customers: 'Customers',
        products: 'Products',
        sales: 'Ventas',
        profile: 'Profile',
        account: 'Account',
        security: 'Securiry',
        logout: 'Log out'
    }
}

export default lang;