var express = require('express');
var router = express.Router();
const request = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.status(200).end("OK");


});

//Use InferMedica NLP
router.post('/parseSymptoms', function(req, res, next){
  var message = req.body.msg;
  request({
    method: 'POST',
    url: 'https://api.infermedica.com/v2/parse',
    headers: 
    { 'App-Key': '66137844af379d9a58c2cf97d614308e',
      'App-Id': '3fd128c7',
      'Content-Type': 'application/json' },
    body: { text: message },
    json: true 
}).then(function(result) {
    console.log("sendMessage: ", result);
    res.status(200).send(result).end();
}).catch(function(err) {
    console.log("sendMessage: ", err);
    res.status(500).end();
}).finally(function() {

});
});

//Use InferMedica diagnosis
router.post('/diagnose', function(req, res, next){
    var sex = req.body.sex;
    var age = req.body.age;
    var evidence = req.body.evidence;
    request({
      method: 'POST',
      url: 'https://api.infermedica.com/v2/diagnosis',
      headers: 
      { 'App-Key': '66137844af379d9a58c2cf97d614308e',
        'App-Id': '3fd128c7',
        'Content-Type': 'application/json' },
      body: { 
          sex: sex,
          age: age,
          evidence: evidence
         },
      json: true 
  }).then(function(result) {
      console.log("sendMessage: ", result);
      res.status(200).send(result).end();
  }).catch(function(err) {
      console.log("sendMessage: ", err);
      res.status(500).end();
  }).finally(function() {
  
  });
  });

//Use InferMedica Triage
router.post('/triage', function(req, res, next){
    var sex = req.body.sex;
    var age = req.body.age;
    var evidence = req.body.evidence;
    request({
      method: 'POST',
      url: 'https://api.infermedica.com/v2/triage',
      headers: 
      { 'App-Key': '66137844af379d9a58c2cf97d614308e',
        'App-Id': '3fd128c7',
        'Content-Type': 'application/json' },
      body: { 
          sex: sex,
          age: age,
          evidence: evidence
         },
      json: true 
  }).then(function(result) {
      console.log("sendMessage: ", result);
      res.status(200).send(result).end();
  }).catch(function(err) {
      console.log("sendMessage: ", err);
      res.status(500).end();
  }).finally(function() {
  
  });
  });


module.exports = router;
