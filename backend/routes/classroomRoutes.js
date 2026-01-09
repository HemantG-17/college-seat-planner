const express = require("express");
const router = express.Router();

const {
  addClassroom,
  getClassrooms,
  allocateExam
} = require("../controllers/classroomController");

// Add Classroom
router.post("/classrooms", addClassroom);

// Get All Classrooms
router.get("/classrooms", getClassrooms);

// Allocate Exams
router.post("/allocate", allocateExam);

module.exports = router;
