var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: 		'./website/main.ts',
		vendor: 	'./src/vendor.ts',
		polyfills: 	'./src/polyfills.ts'
	},
	output: {
		path: './dist',
		filename: '[name].js',
		publicPath: 'http://localhost:8080/'
	},
	resolve: {
		extensions: ['', '.js', '.ts']
	},
	module: {
		loaders: [{
			test: /\.ts$/,
			loaders: ['ts-loader'],
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['main', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}