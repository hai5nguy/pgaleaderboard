const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        getPlayers: [Player]
    }
    type Mutation {
        addPlayer (
            firstName: String,
            lastName: String,
        ): String
    }
    type Player {
        _id: String,
        firstName: String,
        lastName: String,
        score: Int
    }
`);
