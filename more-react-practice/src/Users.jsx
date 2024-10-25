import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

const Users = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => setPets(data.pets));
  }, []);

  return (
    <div className="pet-container">
      {pets.map((pet) => (
        <User key={pet.petId} pet={pet}></User>
      ))}
    </div>
  );
};

export default Users;
