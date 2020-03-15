import * as passport from 'koa-passport';
import { StrategyOptions, ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import { UserModel } from '../database/entities/User';

export const jwtSecret = '12453tafsf'; // TODO: from config

const jwtOptions: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret,

};

export function passportUseJwtStrategy(existingPassport: passport) {
    existingPassport.use(new JwtStrategy(jwtOptions, function(jwtPayload, done) {
            console.log('jwt triggered', jwtPayload);

            UserModel.findById(jwtPayload.id, (err, user) => {
                if (err) {
                    return done(err, null);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, null);
                }
            });
        })
    );
}

