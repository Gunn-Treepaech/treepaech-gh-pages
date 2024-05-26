import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function CardKitchenSink({titleName, cardText, cardImg}) {
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
