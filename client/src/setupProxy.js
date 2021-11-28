const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/setup-vars/**',
    createProxyMiddleware({
      target: 'http://localhost:9999',
      changeOrigin: true,
    })
  );
};