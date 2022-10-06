import React from 'react';
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';

function Ride(props) { 

  const { avatar, uid, username } = props.rideInfo;

  return (
    <div className='container-fluid'>
      <Card className='flex-row m-3'>
        <Col xs="2">
          <CardImg
            alt="Card image"
            src={ avatar }
            top
            className='w-20 m-4'
            />
        </Col>
        <Col>
          <CardBody>
            <CardTitle tag="h5">
              { username }
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              { uid }
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Col>
      </Card>
    </div>
  );
}
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
  export default Ride;