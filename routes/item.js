var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://IbmCloud_ch0pundn_knnrnckm_qs175ikm:XCSOSzcjT3Y1IwZxvWDyY8Zwk8qIO2Bk@ds035760.mongolab.com:35760/IbmCloud_ch0pundn_knnrnckm');



/* GET users listing. */
router.get('/', function(req, res, next) {

	var item = mongoose.Schema({
	    name: String
	});	

	var db = mongoose.connection;
	
	db.on('error', console.error.bind(console, 'connection error:'));
	
	var items = [];

	var Item = mongoose.model('item', item);

	db.once('open', function (callback) {
		console.log("Got connection");

		var r1 = new Item({name: 'chicken'});

		r1.save(function(err, r1){
			if(err){
				console.log('error saving data.');
			}else{
				console.log('check in database.');
			}


		});

	});			


	res.send();
});

module.exports = router;