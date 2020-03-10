
module.exports = {
    lintOnSave: false,
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://192.168.8.124:3000/api',
                // 将主机标头的原点更改为目标URL
                changeOrigin: true
            }
        }
    }
}