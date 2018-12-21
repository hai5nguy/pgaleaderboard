module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "extends": "airbnb",
  "rules": {
    "react/prop-types": "off",
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [".", "ui"]
      }
      "alias": true
    }
  }
};