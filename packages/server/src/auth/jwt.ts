import { readAppSettings } from '../app-settings';

let jwtSecret = '';

export async function getJwtSecret() {
    if (jwtSecret) return jwtSecret;

    const appSettings = await readAppSettings();

    return (jwtSecret = appSettings.Jwt.Secret);
}