const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000// Change this to your desired port number

//dynamic path
app.set('view engine', 'hbs');
hbs.registerPartials('partials');

// public static path 
const static_Path = path.join(__dirname , 'public')
app.use(express.static(static_Path))
console.log(static_Path)



// Homepage route
app.get('/', (req, res) => {
    res.render('index')
  });
  
  // About page route
  app.get('/about', (req, res) => {
    res.render('about')
  });
  
  // Weather page route
  app.get('/weather', (req, res) => {
    res.render('weather');
  });

  app.get('/test', (req, res) => {
    res.render('test');
  });
  
  app.get('*', (req, res) => {
    const search = req.params[0]; // Accessing the 'name' URL parameter
    res.render('404error', {
        Name: search, // Passing the 'name' parameter to the template
    });
});

  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
