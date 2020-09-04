module.exports = {
  entry: './js/app.js',
  // devtool: 'inline-source-map',
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },
  // output: {
  //   filename: 'bundle.js'
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  devServer: {
    inline: false
  }
};
