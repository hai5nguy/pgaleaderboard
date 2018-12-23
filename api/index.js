const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

// Setting port 5001 for development
const PORT = process.env.PORT || 5001;

// GraphQL Modules
const db = require('./db.js');
const schema = require('./schema.js');
const resolvers = require('./resolvers.js');

// Go go Express!
const app = express();

// Using cors
// Probably should be disabled in production depending on security needs and infrastructure setup
app.use(cors());

// Hooking graphql to express server
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

// Serve out our frontend app
app.use(express.static(`${__dirname}/../build`));
app.use('*', express.static(`${__dirname}/../build/index.html`));

// Start mongo then express
async function start() {
  await db.start();
  app.listen(PORT, () => {
    console.log(`API Server running on localhost:${PORT}/graphql`);
    console.log('Press CTRL+C to quit');
  });
}
start();

// Gracefully exit when CTRL+C
process.on('SIGINT', () => {
  process.exit(0);
});
