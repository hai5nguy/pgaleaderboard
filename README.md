# PGA Leaderboard by Hai Nguyen

This is the PGA Leaderboard App.  This app was built with a React + Redux + GraphQL + Material UI frontend.  The backend comprise of Node, Express, GraphQL, and Mongo.  Features include the ability to add players, inline edit player's name and score, and delete players.  The app is also a progressive web app, best observed on Android devices with the "Add to Home Screen" feature.  And finally for deployment ease, it has been containerize with docker.

## Requirements

    Node v10.12.0
    NPM 6.4.1
    Mongo v3.6.3

## Installation

    npm install
    
## Development

### For API development:

    npm run api

Browse to http://localhost:5001/graphql

### For UI development:

    npm start

Browse to http://localhost:5000

### For test-driven development:

    npm run test