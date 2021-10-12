const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT; // process.env.PORT là biến mà heroku cung cấp

const publicPath = path.join(__dirname, "..", "public"); // chọn folder public để serve

app.use(express.static(publicPath)); // middleware-function serve static file và express server sẽ sử dụng những file này
// serve router for express server
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html")); // ở tất cả các router của express server thì respone luôn gửi lại index.html
});

app.listen(port, () => {
  console.log("Server express is running in " + port);
});
