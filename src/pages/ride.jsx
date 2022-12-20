import React, { useContext } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row, NavLink } from 'reactstrap';

import { CREATE_RIDE, DASHBOARD } from '../helper_assets/menu-paths';
import { StoreContext } from '../stores/store-context';

function RidePage() {

  const store = useContext(StoreContext);
  store.setCurrentPage(CREATE_RIDE);

  const [rideDifficultySetting, setRideDifficultySetting] = React.useState('rideDifficulty');
  const [rideTypeSetting, setRideTypeSetting] = React.useState('rideType');

  const handleRideTypeSettingChange = () => {
    setRideTypeSetting(!rideTypeSetting);
  };

  const handleRideDifficultyChange = () => {
    setRideDifficultySetting(!rideDifficultySetting);
  };


  return (
    <div>
      <Card className='mb-3'>

        <CardHeader>
          <CardTitle>
            <h1>Create/Edit ride</h1>
          </CardTitle>
        </CardHeader>

        <CardBody>
          <Form className='m-3'>

          <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="rideTitle">
                    Ride Title
                  </Label>
                  <Input
                    id="js-ride-form-rideTitle"
                    name="rideTitle"
                  />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label for="ride-description">
                    Description
                  </Label>
                  <Input
                    id="js-ride-form-description"
                    name="ride-description"
                    type="textarea"
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <hr className='my-5'/>

            <h5 className='my-3'>Ride type</h5>

            <Row>
              <Form>
                <FormGroup
                  check
                  inline
                >
                  <Input
                    type="radio" 
                    name="rideType" 
                    value={rideTypeSetting === '1'}
                    onChange={handleRideTypeSettingChange}
                  />
                  <Label check>
                    Road
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input 
                    type="radio" 
                    name="rideType" 
                    value={rideTypeSetting === '2'}
                    onChange={handleRideTypeSettingChange}
                  />
                  <Label check>
                    Mountain
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input 
                    type="radio" 
                    name="rideType" 
                    value={rideTypeSetting === '3'}
                    onChange={handleRideTypeSettingChange}
                    onClick={() => console.log('----- clicked: ', rideTypeSetting)}
                  />
                  <Label check>
                    Other
                  </Label>
                </FormGroup>
              </Form>
            </Row>

            <h5 className='my-3'>Ride difficulty</h5>

            <Row>
              <Form>
                <FormGroup
                  check
                  inline
                >
                  <Input 
                    type="radio" 
                    name="rideDifficulty" 
                    value={rideDifficultySetting === '1'}
                    onChange={handleRideDifficultyChange}
                  />
                  <Label check>
                    Easy
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input 
                    type="radio" 
                    name="rideDifficulty" 
                    value={rideDifficultySetting === '2'}
                    onChange={handleRideDifficultyChange}
                  />                  
                  <Label check>
                    Medium
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input 
                    type="radio" 
                    name="rideDifficulty" 
                    value={rideDifficultySetting === '3'}
                    onChange={handleRideDifficultyChange}
                  />
                  <Label check>
                    Hard
                  </Label>
                </FormGroup>
              </Form>
            </Row>

            <Row>
              <NavLink href={`/${DASHBOARD}`} className='text-end'>
                <Button
                  size='lg'
                  color=''
                  className='std-theme'
                  onClick={()=> console.log('clicked save ride')}
                  >
                  Save
                </Button>
              </NavLink>
            </Row>

          </Form>
        </CardBody>

      </Card>

    </div>
  );
}

//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default RidePage;