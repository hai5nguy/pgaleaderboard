module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
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
    }
  }
};