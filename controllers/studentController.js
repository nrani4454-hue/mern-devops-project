const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
 try {
  const student = new Student(req.body);
  const saved = await student.save();
  res.json(saved);
 } catch (err) {
  res.status(500).json(err);
 }
};

exports.getStudents = async (req, res) => {
 try {
  const students = await Student.find();
  res.json(students);
 } catch (err) {
  res.status(500).json(err);
 }
};