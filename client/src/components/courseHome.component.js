import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardDeck, Image } from "react-bootstrap";

function HookCourseHome() {
  return (
    
    <CardDeck>
      <Card style={{ width: "18rem", height: "300px"}}>
        <Card.Img
          variant="top"
          src={require('./constructionCat.png')}
          alt="Under Construction"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", height: "300px"}}>
        <Card.Img
          variant="top"
          src={require('./constructionCat.png')}
          alt="Under Construction"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", height: "300px"}}>
        <Card.Img
          variant="top"
          src={require('./constructionCat.png')}
          alt="Under Construction"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", height: "300px"}}>
        <Card.Img
          variant="top"
          src={require('./constructionCat.png')}
          alt="Under Construction"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", height: "300px"}}>
        <Card.Img
          variant="top"
          src={require('./constructionCat.png')}
          alt="Under Construction"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default HookCourseHome;
