const express = require("express");
const user = require("./controllers/user");
const azure = require("./controllers/azure");
const axios = require("./controllers/axiosTest");
const auth = require('./controllers/authController');
const app = express();

//static file
app.use(express.static(__dirname + './src/components'));
app.use("/azure", azure);
app.use("/axios", axios);
app.use("/auth", auth);
app.use("/user", user)
//fire controllers
// todoController(app);
//user(app);
//auth(userCollection);
// azure(app);

module.exports = app;
//listen to port
// app.listen(3000);
// console.log("You are listening to port 3000");
