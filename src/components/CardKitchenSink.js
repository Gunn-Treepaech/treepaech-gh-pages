import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./CardKitchenSink.css"

export default function CardKitchenSink({ titleName, cardText, cardImg, onButtonClick }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title className="cardHead">{titleName}</Card.Title>
        <Card.Text className="cardText">
          {cardText}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary" className="cardButton" onClick={onButtonClick}>Show More</Button>
      </Card.Body>
    </Card>
  );
}
