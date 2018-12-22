module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "extends": "airbnb",
  "rules": {
    "react/prop-types": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [".", "ui"]
      },
      "alias": [
        ["actions", "./ui/actions"],
        ["components", "./ui/components"],
        ["store", "./ui/store/store.js"],
        ["ui", "./ui"]
      ]
    }
  }
};