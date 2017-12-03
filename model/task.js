'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: String,
    dueDate: String,
    priority: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});



TaskSchema.pre('save', function (next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updatedAt = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

TaskSchema.pre('update', function (next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updatedAt = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

module.exports = mongoose.model('Task', TaskSchema);
