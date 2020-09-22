#TestIbanFirstFrontEnd

---
first, you should install node and npm.

1. create directory  
    `mkdir IbanFirstTestFrontEnd && cd IbanFirstTestFrontEnd`

2. init npm  
    `npm init`

3. install webpack and webpack-dev-server  
    `npm install webpack webpack-dev-server --save`

4. install react and react-dom  
    `npm install react react-dom --save`

5. install babel etc.  
    `npm install babel-core babel-loader babel-preset-react babel-preset-es2015 --save`

6. add start scripts to package.json
```javascript
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "webpack-dev-server --hot"
    }
```

7. touch webpack.config.js
```javascript
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

```

8. touch index.html
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>react helloworld</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="index.js" charset="utf-8"></script>
      </body>
    </html>
```

9. touch index.js of AppAppBar component
10. touch index.js of ListAccounts component


11. touch App.jsx
```javascript
   add two coponents:
    <AppAppBar/>
    <ListAccounts/>
```

12. touch main.js
```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';

    import App from './App.jsx';

    ReactDOM.render(<App />, document.getElementById('app'));
```

11. start server  
    `npm start`

12. open browser: [http://localhost:3000](http://localhost:3000)

---
if you clone this repository to local, just `npm install` and `npm start`.

---
I used react framework : Material-Ui
I used get fetch for retrieving the data to show from provided json file.
I added link Cors https://cors-anywhere.herokuapp.com as prefix for links to fetch data.
All necessary operations(convertEuro,sort,...) are in 'accountOperation.js' file.
I created two components for our project's user interface.



