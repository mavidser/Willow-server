// var express = require('express');
var app = require('express.io')()
app.http().io()
// var router = express.Router();
// var http = require('http').Server(express);
// var io = require('socket.io')(http);
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/myapp" , {native_parser:true});

/* GET home page. */
app.get('/', function(req, res, next) {
  res.send('Send Apt query please :(');
});

// io.on('connection', function(socket){
//   socket.on('haha', function(msg){
//     console.log('message: ' + msg);
//   });
// });

app.get('/connect/:id', function(req, res, next) {
  var userid = req.params.id;
  console.log(userid);
  var db = req.db;
  //db.collection('userlist').find({id: {$in: 'test1'}});
  db.collection('userlist').find({id:userid}).toArray(function(err,items){
  res.json(items);	
	});
  
});

// module.exports = router;
