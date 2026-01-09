import { useState } from "react";
import AddClassroom from "./components/AddClassroom";
import ClassroomList from "./components/ClassroomList";
import AllocateExam from "./components/AllocateExam";
import "./style.css";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container">
      <h1>College Exam Seat Planner</h1>

      <div className="grid">
        <AddClassroom setRefresh={setRefresh} />
        <ClassroomList refresh={refresh} />
        <AllocateExam />
      </div>
    </div>
  );
}
