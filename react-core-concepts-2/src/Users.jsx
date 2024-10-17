import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="friends">
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
