import * as passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local'
import { UserModel } from '../database/entities/User';

export function passportUseLocalStrategy(existingPassport: passport) {
    existingPassport.use(new LocalStrategy(
        {},
        function (username, password, done) {
            console.log('local triggered');

            UserModel.findOne({ Username: username }, (err, user) => {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
            });
        }
    )
    );
}