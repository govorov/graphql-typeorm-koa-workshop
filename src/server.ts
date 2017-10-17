import * as Koa from 'koa';

import { databaseInitializer } from 'initializers/database';
import { routes } from 'routes';


const bootstrap = async () => {
    await databaseInitializer();
    const app = new Koa();
    app
        .use(routes.routes())
        .use(routes.allowedMethods())
        .listen(3000);
};

bootstrap();
