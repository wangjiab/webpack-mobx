const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	hot: true,
	historyApiFallback: true,
	inline: true,
	stats: {
		colors: true,
		hash: false,
		timings: true,
		chunks: false,
		chunkModules: false,
		modules: false
	}
});
server.listen(3000, 'localhost', function (err, result) {
	if (err) {
		return console.log(err);
	}
	console.log('Listening at http://localhost:3000/');
});