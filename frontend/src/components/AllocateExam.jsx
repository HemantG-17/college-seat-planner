import { useState } from "react";
import { API } from "../api";

export default function AllocateExam() {
  const [students, setStudents] = useState("");
  const [result, setResult] = useState(null);

  const allocate = async () => {
    const res = await fetch(`${API}/allocate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalStudents: Number(students) })
    });
    setResult(await res.json());
  };

  return (
    <div className="card">
      <h2>Allocate Exam Seats</h2>

      <input type="number" placeholder="Total Students"
        onChange={(e) => setStudents(e.target.value)} />

      <button onClick={allocate}>Allocate</button>

      {result?.error && <p className="error">{result.error}</p>}

      {result?.allocated && (
        <>
          <h3>Allocated Rooms:</h3>
          {result.allocated.map(r => (
            <p key={r.roomId}>
              {r.roomId} | Floor: {r.floorNo} | Capacity: {r.capacity}
            </p>
          ))}
        </>
      )}
    </div>
  );
}
