var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, '/public')))

app.use('/', indexRouter)

app.listen(3000, () =>{
    console.log('Server is running on port 3000')
})