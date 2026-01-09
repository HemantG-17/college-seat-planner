import { useState } from "react";
import { API } from "../api";

export default function AddClassroom({ setRefresh }) {
  const [form, setForm] = useState({
    roomId: "",
    capacity: "",
    floorNo: "",
    nearWashroom: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API}/classrooms`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setRefresh(prev => !prev);  
    alert("Classroom Added!");
  };

  return (
    <div className="card">
      <h2>Add Classroom</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Room ID"
          onChange={(e) => setForm({ ...form, roomId: e.target.value })}
        />

        <input
          placeholder="Capacity"
          type="number"
          onChange={(e) =>
            setForm({ ...form, capacity: Number(e.target.value) })
          }
        />

        <input
          placeholder="Floor"
          type="number"
          onChange={(e) =>
            setForm({ ...form, floorNo: Number(e.target.value) })
          }
        />

        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              setForm({ ...form, nearWashroom: e.target.checked })
            }
          />
          Near Washroom?
        </label>

        <button>Add Classroom</button>
      </form>
    </div>
  );
}
