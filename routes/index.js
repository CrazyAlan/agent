var express = require('express');
var router = express.Router();
var i18nCH = require('./i18n');
var i18nEN = require('./i18n_en')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , i18n: i18nEN});
});

module.exports = router;
