module.exports = {
  "presets": [ "next/babel" ],
  "plugins": [
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "styles": "./styles",
        "config": "./config",
        "components": "./components",
        "utils": "./utils",
        "api": "./api",
      }
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
}
