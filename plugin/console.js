// https://www.webpackjs.com/api/plugins
// https://www.webpackjs.com/contribute/writing-a-plugin/
class ConsolePlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("ConsolePlugin", compilation => {
      Object.keys(compilation.assets).forEach(name => {
        // if (name.endsWith(".js")) {
        //   let assets = compilation.assets[name];
        //   console.log(assets);
        //   let source = assets.source();
        //   let size = assets.size();
        //   const reg = /console.log/g;
        //   let content = source.replace(reg, '');
        //   assets.source = content;
        //   assets.size = content.length;
        // }

        /**
         * 或者使用如下修改assets内容：
         *  compilation.assets[name] = {
              source() {
                return content;
              },
              size() {
                return content.length;
              }
            }
         */
      });
    });
  }
}

module.exports = { ConsolePlugin };
