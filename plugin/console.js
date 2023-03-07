// https://www.webpackjs.com/api/plugins
// https://www.webpackjs.com/contribute/writing-a-plugin/

class ConsolePlugin {
  constructor() {
    console.log("create Console Plugin.......");
  }
  apply() {
    console.log("ConsolePlugin apply.......");
  }
}

module.exports = { ConsolePlugin };
