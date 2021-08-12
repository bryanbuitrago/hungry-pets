import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import PetCard from "../components/PetCard";
// import pets from "../components/PetList";
import axios from "axios";

const PetPage = ({ match }) => {
  const [pet, setPet] = useState([]);
  console.log(pet);

  useEffect(() => {
    async function fetchPet() {
      const { data } = await axios.get(`/api/pets/${match.params.id}`);
      setPet(data);
    }

    fetchPet();
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn my-3">
        Go Back
      </Link>
    </div>
  );
};

export default PetPage;
