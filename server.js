const express = require('express'),
    ejs = require('ejs');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    res.render('home.ejs',{
        pageTitle: 'HomePage',
        welcomeMessage: 'Bienvenue  sur mon website!',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about',(req,res) => {
    res.render('about.ejs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});


app.get('/bad',(req,res) => {
    res.send({
        code: 69,
        status: 'error message',
        description: 'bah, juste ughjghjgjgjfgn test'
    });
});




app.listen(3000, () => {
    console.log('server is up on port 3000');
});