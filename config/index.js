'use strict'

const path = require('path')

module.exports = {
	dev: {
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/api': {
				target: 'https://a.91jfk.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		host: '192.168.10.137',
		port: 8888,
		autoOpenBrowser: true,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false,
		devtool: 'cheap-module-eval-source-map',
		cacheBusting: true,
		cssSourceMap: true
	},
	build: {
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',
		productionSourceMap: false,
		devtool: '#source-map',
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		bundleAnalyzerReport: process.env.npm_config_report
	}
}
