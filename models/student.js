const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  matric_number: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {timestamps: true})

// studen model
const Student = mongoose.model('student', studentSchema);

module.exports = Student;