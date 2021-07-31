import React from "react";
import { Row, Col } from "react-bootstrap";
import PetCard from "./PetCard";

import pets from "../pets";

const PetList = () => {
  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        <Row>
          {pets.map((pet) => (
            <Col>
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
