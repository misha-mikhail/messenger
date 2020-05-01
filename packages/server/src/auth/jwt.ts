import { readAppSettings } from '../app-settings';

export async function getJwtSecret() {
    const appSettings = await readAppSettings();
    return appSettings.Jwt.Secret;
}
