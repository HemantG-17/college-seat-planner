const express = require("express");
const cors = require("cors");
const classroomRoutes = require("./routes/classroomRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Use routes
app.use("/", classroomRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
