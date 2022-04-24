// entry? -> output?
/*
  Webpack tool: dùng để tích hợp các file js thành 1 file js duy nhất thay vì phải render nhiều file js và phải quan tâm đến trình
  tự render của chúng
*/
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(path.join(__dirname, "public", "dist"));
module.exports = (env) => {
  const isProduction = env === "production";

  return {
    entry: "/src/app.js", // tìm app.js để chạy webpack tool
    output: {
      path: path.join(__dirname, "public", "dist"), // __dirname/public ~ output file
      filename: "bundle.js",
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    module: {
      rules: [
        {
          // rule chạy babel, setup babel cho webpack và tạo .babelrc chứa các plugin/feature của babel
          loader: "babel-loader", // sử dụng babel-loader, cho phép webpack load babel
          test: /\.js$/, // tìm file .js để load và chạy babel cho app.js, convert sang ES5
          exclude: /node_modules/, // không muốn babel chạy thông qua file trong node_modules mà chỉ chạy babel
        },
        {
          // rule chạy .scss file
          test: /\.s?css$/, // test .scss hoặc .css
          // style-loader: chèn CSS vào DOM
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader", // load .css file
              options: {
                sourceMap: true, // giúp dev có thể tìm được code css từ từng file gốc css
              },
            },
            {
              loader: "sass-loader", // load .sass file
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },

    // set up source map của webpack
    devtool: isProduction ? "source-map" : "inline-source-map", // inline-source-map giúp dev tìm được code từ từng file gốc
    // set up webpack-dev-server
    devServer: {
      // tự tạo file bundle.js và serve trong virtual memory chứ không viết vào file system, chạy server
      static: [
        {
          directory: path.join(__dirname, "public"),
        },
      ],
      devMiddleware: {
        publicPath: "https://localhost:3000/dist/",
      },
      historyApiFallback: {
        index: "/",
      },
    },
    mode: isProduction ? "production" : "development",
  };
};
