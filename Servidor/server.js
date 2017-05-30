var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// Default mongoose connection
var mongoDB = 'mongodb://localhost:27017/DbMiComida';
mongoose.connect(mongoDB);

// connection with database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//db.on('error', ()=> {console.log( "MongoDB connection error")})
db.once('open', () => {console.log( "Connected to MongoDB")
});

// models
//var User = require('mongoose/models/user');

app.post('/saveuser',(req,res)=>{
 // Insert into usuario Collection
 	//var User = mongoose.model('User');
	var userreg = new User({
		nickname: 'migda',
		password: 'hello'
	})

	userreg.save((err,result)=> {
		if (err) {console.log("User save failed " + err)}
	  	console.log("User saved successfully "+userreg.item)

	res.redirect('/')
	})
});

// start the server
app.listen(3000,()=> {console.log("Server is Running")})
app.get('/',(req,res)=>{
 res.sendFile(__dirname + '/index.html')
});