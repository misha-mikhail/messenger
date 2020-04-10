export interface AppSettingsJson {
    Jwt?: {
        Secret?: string
    };

    DatabaseConnection?: {
        MongoUrl?: string,
        DatabaseName?: string,
    };
}