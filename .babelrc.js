module.exports = {
  "presets": [ "next/babel" ],
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "style": "css"
    }],
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "styles": "./styles",
        "config": "./config"
      }
    }],
  ]
}
