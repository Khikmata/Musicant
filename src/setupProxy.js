const { createProxyMiddleware } = require("http-proxy-middleware");
const { Config } = require("./config/env");


module.exports = function (app) {
  app
    .use(
      '/api',
      createProxyMiddleware({
        target: Config.TARGET_APP_URL,
        changeOrigin: true,
        secure: false,
      })
    )
    .use(
      '/auth',
      createProxyMiddleware({
        target: Config.TARGET_AUTH_URL,
        changeOrigin: true,
        secure: false,
      })
    );
};
