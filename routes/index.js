var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeTravian' });
});

/* GET Userlist page. */
router.get('/main', function(req, res) {
    var db = req.db;
    var collection = db.get('resources');
    var collection1 = db.get('production')


    collection.find({},{},function(e,docs){
    collection1.find({},{},function(e,prod){

      console.log(docs, prod);
        res.render('main', {
            "resourcelist" : docs,
            "productionlist" : prod
        });
       });
    });
    var woodproduction = {wood:800};
    var newValue = {wood: 800 + 20};
   function Production(err, db) {
   	if(err) throw err;
   	collection.update(woodproduction,newValue,function(e, newprod) {
   		console.log("production started");
   	});
}
});

router.post('/', function (req, res) {
  var db = req.db;
    var collection = db.get('resources');
    var collection1 = db.get('production')
})

module.exports = router;
