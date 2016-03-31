var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var mypics = [];
  var myphotographers = [];

  myphotographers = appdata.speakers;
  appdata.speakers.forEach(function(item){
    mypics = mypics.concat(item.artwork);
  }); 
  res.render('index', { 
    title: 'Home', 
    allpics: mypics , 
    allphotographers : myphotographers,
    page:'home'
  });
});

/* GET photographers page. */
router.get('/photographers', function(req, res, next) {
  var mypics = [];
  var myphotographers = [];

  myphotographers = appdata.speakers;
  appdata.speakers.forEach(function(item){
    mypics = mypics.concat(item.artwork); 
  }); 
  res.render('photographers', { 
    title: 'Photographers', 
    allpics: mypics , 
    allphotographers : myphotographers, 
    page : 'photographerList'
  });
});

/* GET specific photographer page. */
router.get('/photographers/:photographerid', function(req, res, next) {
  var mypics = [];
  var myphotographers = [];

  appdata.speakers.forEach(function(item){
    if(item.shortname == req.params.photographerid)
    { 
       myphotographers.push(item); 
       mypics = mypics.concat(item.artwork); 
    }
  }); 
  res.render('photographers', { 
    title: 'Photographers', 
    allpics: mypics,
    allphotographers : myphotographers,
    page: 'photographerDetail'
  });
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  var mycontact = [];
  var mypics = [];
  var myphotographers = [];

  myphotographers = appdata.speakers;
  mycontact = appdata.contact;
  appdata.speakers.forEach(function(item){
    mypics = mypics.concat(item.artwork); 
  }); 


  res.render('contact', { 
    title: 'Contact', 
    allpics: mypics,
    allphotographers : myphotographers,
    page: 'contact',
    contact : mycontact
  });
});



module.exports = router;
