//npm init-y (no need to answer any questions)
// npm i express (add express)
// node index (this will start server)
//https://www.youtube.com/watch?v=L72fhGm1tfE

const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

//Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create endpoint/route
//app.get(), app.post(), app.put() and app.delete() etc
//we can send JSON, render HTML templates etc

// app.get("/", (req, res) => {
//    res.send("Hello World!!!!");
// });

// app.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

//this set the static path to the public folder
// http://localhost:5000/about.html
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

//req: access to params, query strings, url parts etc
//res: HTTP response. you can do multiple things with this response object

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
