import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './schema';

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('Listening on:');
  console.log(`http://localhost:${PORT}/graphiql`);
  console.log(`http://localhost:${PORT}/graphql`);
  /* eslint-enable no-console */
});
