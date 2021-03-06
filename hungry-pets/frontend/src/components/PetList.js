import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import PetCard from "./PetCard";
import axios from "axios";

// import pets from "../pets";

const PetList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      const { data } = await axios.get("/api/pets/");
      setPets(data);
    }
    fetchPets();
  }, []);
  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        <Row>
          <div className="select">
            <Row>
              <select name="" id="" aria-label="Filter Animals By Species">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </Row>
          </div>
          {pets.map((pet) => (
            <Col key={pet.birthYear} sm={12} md={6} lg={4} xl={3}>
              <PetCard
                name={pet.name}
                species={pet.species}
                birthYear={pet.birthYear}
                img={pet.photo}
                favFoods={pet.favFoods}
              />
            </Col>
          ))}
        </Row>
      </ul>
    </div>
  );
};

export default PetList;
