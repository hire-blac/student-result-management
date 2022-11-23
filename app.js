const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const studentroutes = require('./routes/studentroutes');
const courseroutes = require('./routes/courseroutes');
const courseRegisterRoutes = require('./routes/courseRegisterRoutes');
const { checkStudent } = require('./middlewares/checkUser');

const app = express()

// view engine
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

//connect to database
const dbURL  = "mongodb://127.0.0.1/student-result"
mongoose.connect(dbURL)
.then(result => {
  console.log("connected to database");

  //listen for request
  app.listen(3000, () =>{
    console.log('server listening on port3000');
  });
}).catch(err => {
  console.log(err);
})

// create routes
app.get('*', checkStudent)

app.get('/', (req, res) =>{
  res.render("index")
});

app.use(studentroutes);

app.use(courseroutes);

app.use(courseRegisterRoutes);