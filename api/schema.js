const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        blah: String
    }
    type Mutation {
        setBlah (blah: String): String
    }
`);
