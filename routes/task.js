'use strict';

var Model = require('../model/task');

var task = {};

task.create = function (req, res, next) {
    var query = req.query;
    if (!query) {
        return next(new Error('No data sent to create'));
    }

    ['name', 'dueDate', 'priority'].forEach(function (x) {
        if (!query[x]) {
            return next(new Error('Madnatory parameter missing: ' + x));
        }
    });

    var dataToCreate = {
        name: query.name,
        dueDate: query.dueDate,
        priority: query.priority
    };
    Model.create(dataToCreate, function (err, resp) {
        if (err || !resp) {
            return next(new Error("Error in creation of data"));
        }

        return res.json(resp);
    });
}
task.list = function (req, res, next) {

}
task.destroy = function (req, res, next) {

}
task.update = function (req, res, next) {

}


module.exports = task;
