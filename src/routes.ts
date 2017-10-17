import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';

import {
    graphqlKoa,
    graphiqlKoa,
} from 'apollo-server-koa';

import { schema } from 'graphql/schema';


export const routes = new Router();

// API entrypoint
const apiEntrypointPath = '/graphql';
const graphQlOpts = graphqlKoa({
    schema,
});

routes.get(apiEntrypointPath, graphQlOpts);
routes.post(apiEntrypointPath, koaBody(), graphQlOpts);

// GraphiQL entrypoint
routes.get('/graphiql', graphiqlKoa({ endpointURL: apiEntrypointPath }));
