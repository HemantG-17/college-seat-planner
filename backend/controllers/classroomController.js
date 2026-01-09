let classrooms = [];

exports.addClassroom = (req, res) => {
  const { roomId, capacity, floorNo, nearWashroom } = req.body;

  const exists = classrooms.find(r => r.roomId === roomId);
  if (exists) {
    return res.status(400).json({ error: "Room ID already exists" });
  }

  classrooms.push({ roomId, capacity, floorNo, nearWashroom });
  return res.json({ message: "Classroom added", classrooms });
};

exports.getClassrooms = (req, res) => {
  return res.json(classrooms);
};

exports.allocateExam = (req, res) => {
  const { totalStudents } = req.body;
  let remaining = totalStudents;

  if (classrooms.length === 0) {
    return res.json({ error: "No classrooms available" });
  }

  const sorted = [...classrooms].sort((a, b) => {
    if (a.floorNo !== b.floorNo) return a.floorNo - b.floorNo;
    return b.capacity - a.capacity;
  });

  let allocated = [];

  for (const room of sorted) {
    if (remaining <= 0) break;
    allocated.push(room);
    remaining -= room.capacity;
  }

  if (remaining > 0) {
    return res.json({ error: "Not enough seats available" });
  }

  return res.json({ allocated });
};
