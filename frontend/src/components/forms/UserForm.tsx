import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Card, CardBody, CardHeader, CardTitle, Col, FormGroup, FormFeedback, Input, Label, Row } from 'reactstrap';
import { FormFields, userFormProps } from '../UserProfile';

export default function UserForm({ readOnly }: userFormProps) {
  const { control, formState: { errors } } = useFormContext<FormFields>();

  return (
    <Card className='mb-3'>

      <CardHeader>
        <CardTitle>
          <h1>User Profile</h1>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: 'first name is required',
              maxLength: {value: 45, message: 'First name must be less than 45 characters'},
              pattern: {value: /^[A-Za-z\s]+$/i, message: 'First name must contain letters only'}
            }}
            render={({
              field: { onChange, onBlur, value }
            }) => (
              readOnly? 
                <p>
                  <span className='pe-3 col-2'>First Name : </span>
                  {value}
                </p> 
              :
                <Col md={6}>
                  <FormGroup required>
                    <Label for="firstName">
                      First Name
                    </Label>
                    <Input 
                      id="js-profile-form-firstName"
                      name="firstName"
                      type="text"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.firstName?.message ? true : false}
                    />
                    <FormFeedback>
                      {errors.firstName?.message}
                    </FormFeedback>
                  </FormGroup>
                </Col>
            )}
          />
          
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: 'last name is required',
              pattern: /^[A-Za-z\s]+$/i
            }}
            render={({
              field: { onChange, onBlur, value }
            }) => (
              readOnly? 
                <p>
                  <span className='pe-3 col-2'>Last Name : </span>
                  {value}
                </p> 
              :
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName">
                      Last Name
                    </Label>
                    <Input
                      id="js-profile-form-lastName"
                      name="lastName"
                      type="text"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.firstName?.message ? true : false}
                    />
                  </FormGroup>
                </Col>
              )}
            />
{/* <Row>
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
      <Input type="checkbox" className='mb-5' />
      <Label check>
        Hard
      </Label>
    </FormGroup>
  </Form>
</Row>
      

//           </Form>
//         </CardBody>

//       </Card>

//     </div>
//   );
// }
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   }; */}


          </Row>
        </CardBody>

      </Card>
  );
};
