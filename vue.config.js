const { defineConfig } = require("@vue/cli-service");
const { ConsolePlugin } = require("./plugin/console");
const { LogPlugin } = require("./plugin/log");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new ConsolePlugin("Mino"), new LogPlugin()],
  },
  chainWebpack(config) {},
});
