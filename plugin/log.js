// https://www.webpackjs.com/api/plugins
// https://www.webpackjs.com/contribute/writing-a-plugin/
class LogPlugin {
  apply(compiler) {
    // 每次修改，都会执行一次compile、多次compilation；编译结束时，执行emit的done回调
    compiler.hooks.compile.tap("LogWebpackPlugin", () => {
      console.log("Log: The compiler is starting to compile... \n");
    });
    compiler.hooks.compilation.tap("LogWebpackPlugin", () => {
      console.log("Log: The compiler is starting a new compilation... \n");
    });
    compiler.hooks.emit.tap("LogPlugin", compilation => {
      console.log("Log: emit.\n");
    });
    compiler.hooks.done.tap("LogPlugin", stats => {
      console.log("Log: done.\n");
    });
  }
}

module.exports = { LogPlugin };
