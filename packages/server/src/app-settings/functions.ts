import { promises } from 'fs';
import { AppSettingsJson } from './AppSettingsJson';

export async function readAppSettings() : Promise<AppSettingsJson | null> {
    const appSettingsFile = await promises.readFile('appSettings.json');

    if (!appSettingsFile.length) return null;

    return JSON.parse(appSettingsFile.toString()) as AppSettingsJson;
}