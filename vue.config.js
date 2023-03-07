const { defineConfig } = require("@vue/cli-service");
const { ConsolePlugin } = require("./plugin/console");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new ConsolePlugin()],
  },
  chainWebpack(config) {
    console.log(Object.keys(config));
  },
});
