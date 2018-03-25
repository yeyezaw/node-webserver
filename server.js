const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

//hbs template engine
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

//Middleware
app.use((req,res,next) => {
  var now = new Date().toString();
  console.log(`${now}:`);
  next();
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});


app.get('/', (req,res) => {
  res.render('home.hbs', {
    pageTitle : 'About Page',
    welcomeMessage : 'Hello, This is Home Page'
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle : 'About Page'
  });
});


app.listen(3000, () => {
  console.log('server is running on port : 3000');
});
