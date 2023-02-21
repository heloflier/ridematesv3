import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';


    // this.setState = {
    //   firstname: '',
    //   lastname: '',
    //   address: '',
    //   city: '',
    //   state: '',
    //   zipcode: '',
    //   email: '',
    //   phonenum: '',
    //   radius: '',
    //   rideType: {},
    //   difficulty: {}
    // };

    // <ul>
    //       <li>first name</li>
    //       <li>last name</li>
    //       <li>address 1</li>
    //       <li>address 2</li>
    //       <li>city</li>
    //       <li>state</li>
    //       <li>zip</li>
    //       <li>email</li>
    //       <li>phonenum</li>
    //       <li>radius</li>
    //       <li>rideType</li>
    //       <li>difficulty</li>
    //     </ul>

function UserProfile() { 
  const [user, setUser] = useState([]);

  useEffect(async () => {
    console.log('in useeffect');
    const user = await axios(
      '/api/user',
    );

    console.log('user.data: ', user.data);
    setUser(user.data);
  }, []);

  return (
    <div className='container'>
      <Card className='mb-3'>

        <CardHeader>
          <CardTitle>
            <h1>User Profile</h1>
          </CardTitle>
        </CardHeader>

        <CardBody>
          <Form className='m-3'>

          <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">
                    First Name
                  </Label>
                  <Input
                    id="js-profile-form-firstName"
                    name="firstName"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">
                    Last Name
                  </Label>
                  <Input
                    id="js-profile-form-lastName"
                    name="lastName"
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input
                    id="js-profile-form-email"
                    name="email"
                    placeholder="ex.: bob@bob.com"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="phone">
                    Mobile Phone
                  </Label>
                  <Input
                    id="js-profile-form-phone"
                    name="phone"
                    type="number"
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="address">
                Address
              </Label>
              <Input
                id="js-profile-form-address"
                name="address"
                placeholder="1234 Main St"
              />
            </FormGroup>
            <FormGroup>
              <Label for="address2">
                Address 2
              </Label>
              <Input
                id="js-profile-form-address2"
                name="address2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">
                    City
                  </Label>
                  <Input
                    id="js-profile-form-city"
                    name="city"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="js-profile-form-state">
                    State
                  </Label>
                  <Input
                    id="state"
                    name="state"
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="js-profile-form-zip">
                    Zip
                  </Label>
                  <Input
                    id="zip"
                    name="zip"
                  />
                </FormGroup>
              </Col>
            </Row>

            <hr className='my-5'/>

            <h3 className='mb-5'>Optional information</h3>
            
            <FormGroup check className='my-3'>
              <Input
                id="js-profile-form-check-notify"
                name="check-notify"
                type="checkbox"
              />
              <Label
                check
                for="exampleCheck"
                className='ms-3'
              >
                Would you like to be contacted when a ride in your radius is posted?
              </Label>
            </FormGroup>
            
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="js-profile-form-radius">
                    Radius in miles from your home
                  </Label>
                  <Input
                    id="radius"
                    name="radius"
                  />
                </FormGroup>
              </Col>
            </Row>

            <h5 className='my-3'>Ride type</h5>

            <Row>
              <Form>
                <FormGroup
                  check
                  inline
                >
                  <Input type="checkbox" />
                  <Label check>
                    Road
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input type="checkbox" />
                  <Label check>
                    Mountain
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input type="checkbox" />
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
                  <Input type="checkbox" />
                  <Label check>
                    Easy
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input type="checkbox" />
                  <Label check>
                    Medium
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline
                >
                  <Input type="checkbox" />
                  <Label check>
                    Hard
                  </Label>
                </FormGroup>
              </Form>
            </Row>

          </Form>
        </CardBody>

      </Card>

      
      <Button color='primary'>
        Sign in
      </Button>
    </div>
  );
}
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
  export default UserProfile;