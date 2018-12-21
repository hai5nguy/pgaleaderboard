module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "extends": "airbnb",
  "rules": {
    "react/prop-types": "off",
    "no-underscore-dangle": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [".", "ui"]
      },
      "alias": [
        ["actions", "./ui/actions"],
        ["components", "./ui/components"],
        ["store", "./store/store.js"]
      ]
    }
  }
};