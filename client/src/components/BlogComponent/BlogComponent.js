import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./blogComponent.css";
function BasicExample(props) {
  return (
    <Card className="blog-card-component">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.topic}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
