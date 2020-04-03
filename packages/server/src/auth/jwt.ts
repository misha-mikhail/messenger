
let jwtSecret = '12453tafsf'; // TODO: from config

export function getJwtSecret() {
    return jwtSecret
        ?? (jwtSecret = 'TODO: *place here a function call that gets the jwt secret from some config*');
}