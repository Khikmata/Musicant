const { createProxyMiddleware } = require("http-proxy-middleware");
const {
  API_BASE_URL,
  API_AUTH_BASE_URL,
  TARGET_AUTH_URL,
  TARGET_APP_URL,
} = require("./api/constants");

module.exports = function (app) {
  app.use(
    API_BASE_URL,
    createProxyMiddleware({
      target: `${TARGET_APP_URL}`,
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    API_AUTH_BASE_URL,
    createProxyMiddleware({
      target: `${TARGET_AUTH_URL}`,
      changeOrigin: true,
      secure: false,
    })
  );
};
