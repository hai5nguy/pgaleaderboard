const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        players: [Player]
    }
    type Mutation {
        setBlah (blah: String): String
    }
    type Player {
        _id: String,
        firstName: String,
        lastName: String,
        score: Int
    }
`);
