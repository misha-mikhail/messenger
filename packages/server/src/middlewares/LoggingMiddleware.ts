import { KoaMiddlewareInterface, Middleware } from 'routing-controllers';
import * as logger from 'koa-logger-middleware';
import * as winston from 'winston';

@Middleware({type: 'before'})
export class LoggingMiddleware implements KoaMiddlewareInterface
{

    use = logger({
        logger: winstonLogger,
    });
}

const winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()

        }),
        new winston.transports.File({
            dirname: './logs',
            filename: 'Server.log',
            format: winston.format.combine(
                winston.format.uncolorize(),
                winston.format.prettyPrint(),   
            ),
            
        }),
    ]
});