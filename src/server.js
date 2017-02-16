import Koa from 'koa';
import KoaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import schema from './schema';

const app = new Koa();
const router = new KoaRouter();
const PORT = 3000;

// koaBody is needed just for POST.
app.use(koaBody());

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('Listening on:');
  console.log(`http://localhost:${PORT}/graphiql`);
  console.log(`http://localhost:${PORT}/graphql`);
  /* eslint-enable no-console */
});

