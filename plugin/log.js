// https://www.webpackjs.com/api/plugins
// https://www.webpackjs.com/contribute/writing-a-plugin/
class LogPlugin {
  apply(compiler) {
    // 异步async
    // run钩子在build时执行
    compiler.hooks.run.tapAsync("LogPlugin", (compiler, callback) => {
      console.log("LOG: run");
      callback();
    });
    compiler.hooks.run.tapPromise("LogPlugin", (compiler) => {
      return new Promise(resolve => setTimeout(resolve, 4000)).then(() => {
        console.log("以异步的方式触发具有延迟操作的钩子。");
      });
    });
    
    // 同步sync
    // 每次修改，都会执行一次compile、多次compilation；编译结束时，执行emit的done回调
    compiler.hooks.compile.tap("LogPlugin", () => {
      console.log("Log: The compiler is starting to compile... \n");
    });
    compiler.hooks.compilation.tap("LogPlugin", compilation => {
      console.log("Log: The compiler is starting a new compilation... \n");
      compilation.hooks.finishModules.tap("LogPlugin", modules => {
        console.log("Log: compilation finish modules.");
      });
      compilation.hooks.seal.tap("LogPlugin", () => {
        console.log("Log: compilation seal.");
      });
      compilation.hooks.unseal.tap("LogPlugin", () => {
        console.log("Log: compilation unseal.");
      });
      compilation.hooks.optimize.tap("LogPlugin", () => {
        console.log("Log: compilation optimize.");
      });
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
