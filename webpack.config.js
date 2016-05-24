const webpack = require('webpack');

var path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: '/build'
	},
	devServer: {
		port: 8081
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
}