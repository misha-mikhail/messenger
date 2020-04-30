import { promises } from 'fs';

export class FileExtensions {
    static async readJsonFile<TJson>(filePath: string) {
        const json = await promises.readFile(filePath);

        if (!json.length) return null;

        return JSON.parse(json.toString()) as TJson;
    }
}
