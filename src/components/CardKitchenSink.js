import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function CardKitchenSink({ titleName, cardText, cardImg, onButtonClick }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>{titleName}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary" className="cardButton" onClick={onButtonClick}>Show More</Button>
      </Card.Body>
    </Card>
  );
}
