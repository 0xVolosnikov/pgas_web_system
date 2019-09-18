const mongoose = require('mongoose');
const connection = require('../config/db');

const facultySchema = mongoose.Schema({
  Name: String,
    OfficialName: String,
    DirName: String,
    AdditionStopped: Boolean,
    CritsId: String,
    AnnotationsToCritsId: String,
    LearningProfile: String
});

const Faculty = connection.model('Faculty', facultySchema);

module.exports = Faculty;
