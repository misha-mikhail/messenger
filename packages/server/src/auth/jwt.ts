import { readAppSettings } from '../app-settings';

это строчка, которая точно не даст сбилдиться проекту!
export async function getJwtSecret() {
    const appSettings = await readAppSettings();
    return appSettings.Jwt.Secret;
}