const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/characters",
    "/abilities",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7188',
        secure: false
    });

    app.use(appProxy);
};
