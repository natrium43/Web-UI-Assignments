var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');

app.use(express.static(__dirname ));
app.set('views',__dirname+'/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());


var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"users"

});

connection.connect(function(error) {
    if(!!error) {
        console.log("error in connecting to DB");
    }
    else {
        console.log("DB connection successful");
    }
});

app.get('/users', function() {
    connection.query("SELECT * FROM users", function(error, rows, fields) {
        if(!!error) {
            console.log("Error in retrieving rows");
        }
        else {
            console.log('Successfully retrieved users');
        }
    });
})

app.post('/register',function(req,res) {
    var user = {
         userName : req.body.userName,
         email :req.body.email,
         password : req.body.password,
         securityQ1 : req.body.securityQ1,
         securityA1 : req.body.securityA1,
         securityQ2 : req.body.securityQ2,
         securityA2 : req.body.securityA2,
         mobile : req.body.mobile,
         address : req.body.address,
         interests : req.body.interests
    }

    connection.query('INSERT INTO users SET ?',user, function(error, response) {
        if(error) {
            throw error;
        }
        console.log("Last inserted ID:", response.insertId);
        res.sendFile(path.join(__dirname+'/views/thankYou.html'));
    });

})

app.listen(PORT, function(){
    console.log("CMPE 280-AJAX-DB listening on port"+ PORT);
})

