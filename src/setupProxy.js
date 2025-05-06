const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://wallhaven.cc',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // прибирає /api з початку запиту
      },
    })
  );
};
