import { createKoaServer } from 'routing-controllers';

export function startApplication(port: number) {
    const app = createKoaServer({
        controllers: [ __dirname + '/controllers/*.js' ],
    });

    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}