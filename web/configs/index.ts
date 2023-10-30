

interface IConfigs {
    DOMAIN_URL: string;
    API_BASE_URL: string;
    GOOGLE_CLIENTID: string;
}

export const getConfigs = (): IConfigs => {
    const environmentType = process.env.NODE_ENV;

    switch (environmentType) {
        case 'development':
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST && process.env.NEXT_PUBLIC_PORT ? process.env.NEXT_PUBLIC_HOST + process.env.NEXT_PUBLIC_PORT : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
            }
        case 'production':
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
            }
        case 'test':
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
            }
        default:
            return {
                DOMAIN_URL: process.env.NEXT_PUBLIC_HOST ? process.env.NEXT_PUBLIC_HOST : "",
                API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : "",
                GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENTID : "",
            }
    }
}

const APP_CONFIG = getConfigs();

export default APP_CONFIG