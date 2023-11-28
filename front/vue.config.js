const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
transpileDependencies: true,
devServer: {
historyApiFallback: true,
allowedHosts: "all",
host: 'localhost',
port: 8080,
},
});