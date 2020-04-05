import { promises } from 'fs';

let jwtSecret = '';

export async function getJwtSecret() {
    if (jwtSecret) return jwtSecret;

    const appSettingsFile = await promises.readFile('appSettings.json');

    if (!appSettingsFile.length) return null;

    const appSettings = JSON.parse(appSettingsFile.toString());

    return (jwtSecret = appSettings.Jwt.Secret);
}