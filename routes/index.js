'use strict';

var express = require('express');
var router = express.Router();
var task = require('./task');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/task', task.list);
router.delete('/task/destroy/:id', task.destroy);
router.post('/task/update', task.update);
router.post('/task/create', task.create);


module.exports = router;
