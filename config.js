module.exports = {
  port: 3001,
  cors: {},
  proxy: {
    '/': {
      target: 'http://server-api:8000',
      changeOrigin: true,
      ws: true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
};
