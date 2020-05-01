import { AppSettingsJson } from './AppSettingsJson';
import { FileExtensions } from '../extensions/FileExtensions';

export async function readAppSettings() : Promise<AppSettingsJson | null> {
    return await FileExtensions.readJsonFile<AppSettingsJson>('appSettings.json');
}
