const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 email: {
  type: String,
  required: true
 },
 age: {
  type: Number
 },
 course: {
  type: String
 }
});

module.exports = mongoose.model("Student", StudentSchema);