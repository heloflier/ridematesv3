import React from 'react';
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';

function RidesListItem(props) { 

  const { rideDescription, rideDifficulty, rideTitle, rideType, id } = props.rideInfo;

  return (
    <div className='container-fluid'>
      <Card className='flex-row m-3'>
        <Col xs="2">
          <CardImg
            alt="Card image"
            // src={ avatar }
            top
            className='w-20 m-4'
            />
        </Col>
        <Col>
          <CardBody>
            <CardTitle tag="h5">
              { rideTitle }
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              { id }
            </CardSubtitle>
            <CardText>
              { rideType }
            </CardText>
            <CardText>
              { rideDifficulty }
            </CardText>
            <CardText>
              { rideDescription }
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
  
  export default RidesListItem;