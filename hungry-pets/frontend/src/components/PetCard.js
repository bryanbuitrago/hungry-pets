import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const PetCard = ({ name, species, birthYear, img, favFoods }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Link href={`/pets/${birthYear}`}>
          <Card.Img variant="top" src={img} />
        </Card.Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{favFoods}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Species: {species}</ListGroupItem>
          <ListGroupItem>Birth Year: {birthYear}</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PetCard;
