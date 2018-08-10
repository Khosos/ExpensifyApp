//Entry -> Output
const path = require("path"); 

console.log(path.join(__dirname, "public")); 
module.exports = {
    entry: "./src//app.js", 
    output: {
        path: path.join(__dirname, "public"), 
        filename: "bundle.js"
    }, 
    mode: "development", 
    module: {
        rules: [{
            loader: 'babel-loader', 
            test: /\.js$/, 
            exclude: /node_modules/,
            options: {
                presets: ['babel-preset-env', 'babel-preset-react'],
                plugins: [
                    'babel-plugin-transform-class-properties', 
                    'babel-plugin-transform-object-rest-spread'
                ]
              }
        }, {
            test: /\.s?css$/, 
            use: [
                'style-loader', 
                'css-loader', 
                'sass-loader'
            ]
        }]
    }, 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
}

// loader
