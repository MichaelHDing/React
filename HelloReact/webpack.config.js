module.exports = {
    entry:'./public/app.jsx',
    output:{
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias: {
            Greeter: 'public/components/Greeter.jsx',
            GreeterMessage: 'public/components/GreeterMessage.jsx',
            GreeterForm: 'public/components/GreeterForm.jsx',
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }

};