const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  // ポータブルアプリとして出力するように設定
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: 'src/assets/chatpilot-logo.png',
          target: [
            {
              target: 'portable', // 'zip', 'nsis', 'portable'
              arch: ['x64'], // 'x64', 'ia32'
            },
          ],
        },
      }
    }
  }
});