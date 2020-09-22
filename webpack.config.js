var config = {
  entry: './main.js',

  output: {
    path: __dirname + "/dist/js",
    filename: 'index.js'
  },

  devServer: {
    inline: false,
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders : ["style", "css"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 25000
            }
        }
    }
    ]
  }
}

module.exports = config;
