//imports the Express module
const express = require('express');
//import path module
const path = require('path');

//store the Express app object in an app variable.
const app = express();

//set up express port
const port = process.env.PORT || '8888';

//set path for view
app.set('views', path.join(__dirname , 'views'));

//setting up the template engine
app.set('view engine' , 'pug');

//setting up  path to public folder
app.use(express.static(path.join(__dirname, 'public')));
//page routing
app.get('/',(request , response) => {
    response.render('index' , {title : 'Home'});
});

//set up server listener
app.listen(port , () => {
    console.log(`Server is running on post ${port}`);
});
