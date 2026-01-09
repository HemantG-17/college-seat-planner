import { useEffect, useState } from "react";
import { API } from "../api";

export default function ClassroomList({ refresh }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`${API}/classrooms`)
      .then((res) => res.json())
      .then(setRooms);
  }, [refresh]); 

  return (
    <div className="card">
      <h2>All Classrooms</h2>

      {rooms.length === 0 && <p>No rooms added yet.</p>}

      {rooms.map((room) => (
        <div className="list-item" key={room.roomId}>
          {room.roomId} | Capacity: {room.capacity} | Floor: {room.floorNo}
        </div>
      ))}
    </div>
  );
}
