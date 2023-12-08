import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { FormFields, userFormProps } from '../userProfile/UserProfile';

export default function UserForm({ readOnly }: userFormProps) {
  const {
    control,
    formState: { errors, isValid },
  } = useFormContext<FormFields>();

  return (
    <Card className='mb-3'>
      <CardHeader className='mb-3'>
        <CardTitle>
          <h1>User Profile</h1>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Controller
            control={control}
            name='firstName'
            rules={{
              required: 'first name is required',
              maxLength: {
                value: 45,
                message: 'First name must be less than 45 characters',
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: 'First name must contain letters only',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>First Name : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='firstName'>First Name</Label>
                    <Input
                      id='js-profile-form-firstName'
                      name='firstName'
                      type='text'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.firstName?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.firstName?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='lastName'
            rules={{
              required: 'last name is required',
              maxLength: {
                value: 45,
                message: 'First name must be less than 45 characters',
              },
              pattern: /^[A-Za-z\s]+$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Last Name : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='lastName'>Last Name</Label>
                    <Input
                      id='js-profile-form-lastName'
                      name='lastName'
                      type='text'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.firstName?.message ? true : false}
                      autoComplete='off'
                      data-lpignore='true'
                    />
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='email'
            rules={{
              required: 'email is required',
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: 'email is not valid',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Email : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input
                      id='js-profile-form-email'
                      name='email'
                      type='email'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.email?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.email?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />
          <Controller
            control={control}
            name='phonenum'
            rules={{
              required: 'telephone number is required',
              validate: {
                tenDigits: (value) =>
                  value.replace(/[()\-_\s]/g, '').length === 10 ||
                  'Phone number must be 10 digits',
              },
              pattern: {
                value: /^[0-9()\s-]+$/i,
                message: 'numbers only, 10 digits required',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Phone Number: </span>
                  {value
                    .toString()
                    .replace(/^(\d{3})(\d{3})(\d{4})$/g, '($1) $2 - $3')}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='phonenum'>Phone Number</Label>
                    <Input
                      id='js-profile-form-phonenum'
                      name='phonenum'
                      type='tel'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.phonenum?.message ? true : false}
                      data-lpignore='true'
                    />
                    {!isValid && (
                      <FormFeedback>{errors.phonenum?.message}</FormFeedback>
                    )}
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='address'
            rules={{
              required: 'address is required',
              minLength: {
                value: 10,
                message: 'The address has to be at least 10 characters',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Address : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='address'>Address</Label>
                    <Input
                      id='js-profile-form-address'
                      name='address'
                      type='text'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.address?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.address?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='address2'
            rules={{
              required: 'address is required',
              minLength: {
                value: 10,
                message: 'The address has to be at least 10 characters',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Address2 : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='address2'>Address2</Label>
                    <Input
                      id='js-profile-form-address2'
                      name='address2'
                      type='text'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.address2?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.address2?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='city'
            rules={{
              required: 'address is required',
              minLength: {
                value: 1,
                message: 'The city name has to be at least 1 character',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>City : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='city'>City</Label>
                    <Input
                      id='js-profile-form-city'
                      name='city'
                      type='text'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.city?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.city?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='state'
            rules={{
              required: 'state is required',
              minLength: {
                value: 4,
                message: 'The state has to be at least 4 character',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>State : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='state'>State</Label>
                    {/* TODO: add dropdown state menu with autocomplete, or component validation */}
                    <Input
                      id='js-profile-form-state'
                      name='state'
                      type='text'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.state?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.state?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='zipcode'
            rules={{
              required: 'zipcode is required',
              minLength: { value: 5, message: 'Zip Code has to be 5 digits' },
              maxLength: { value: 5, message: 'Zip Code has to be 5 digits' },
              pattern: {
                value: /^[0-9\s]+$/i,
                message: 'Zip Code must contain numbers only',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Zipcode : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label for='zipcode'>Zipcode</Label>
                    <Input
                      id='js-profile-form-zipcode'
                      name='zipcode'
                      type='text'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.zipcode?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.zipcode?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <hr className='my-5' />

          <h3 className='mb-5'>Optional information</h3>

          <Controller
            control={control}
            name='notify'
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>
                    Notify : {value === true ? 'YES' : 'NO'}
                  </span>
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label className='me-3' for='notify'>
                      Would you like to be contacted when a ride in your radius
                      is posted?
                    </Label>
                    <Input
                      id='js-profile-form-notify'
                      name='notify'
                      type='checkbox'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value}
                      data-lpignore='true'
                    />
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='radius'
            rules={{
              maxLength: {
                value: 4,
                message: 'Radius must be less than 10,000 miles',
              },
              pattern: {
                value: /^[0-9\s]+$/i,
                message: 'Radius must contain numbers only',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Radius : </span>
                  {value}
                </p>
              ) : (
                <Col md={6}>
                  <FormGroup>
                    <Label className='me-3' for='radius'>
                      Radius in miles from your home (numbers only)
                    </Label>
                    <Input
                      id='js-profile-form-radius'
                      name='radius'
                      type='number'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      data-lpignore='true'
                    />
                  </FormGroup>
                </Col>
              )
            }
          />

          <h5 className='my-3 mt-5'>Ride type</h5>
          <Row>
            <Controller
              control={control}
              name='rideType.road'
              render={({ field: { onChange, onBlur, value } }) =>
                readOnly ? (
                  <>
                    {value && (
                      <span className='pe-3 col-2 fw-bold fst-italic'>
                        ROAD
                      </span>
                    )}
                  </>
                ) : (
                  <Col md={4}>
                    <FormGroup check inline>
                      <Label className='me-3' for='rideTypeRoad'>
                        Road
                      </Label>
                      <Input
                        id='js-profile-form-ride-type-road'
                        name='rideTypeRoad'
                        type='checkbox'
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        invalid={errors.rideType?.road?.message ? true : false}
                        data-lpignore='true'
                      />
                    </FormGroup>
                  </Col>
                )
              }
            />
            <Controller
              control={control}
              name='rideType.mountain'
              render={({ field: { onChange, onBlur, value } }) =>
                readOnly ? (
                  <>
                    {value && (
                      <span className='pe-3 col-2 fw-bold fst-italic'>
                        MOUNTAIN
                      </span>
                    )}
                  </>
                ) : (
                  <Col md={4}>
                    <FormGroup check inline>
                      <Label className='me-3' for='rideTypeMountain'>
                        Mountain
                      </Label>
                      <Input
                        id='js-profile-form-ride-type-mountain'
                        name='rideTypeMountain'
                        type='checkbox'
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        invalid={errors.rideType?.road?.message ? true : false}
                        data-lpignore='true'
                      />
                    </FormGroup>
                  </Col>
                )
              }
            />
            <Controller
              control={control}
              name='rideType.other'
              render={({ field: { onChange, onBlur, value } }) =>
                readOnly ? (
                  <>
                    {value && (
                      <span className='pe-3 col-2 fw-bold fst-italic'>
                        OTHER
                      </span>
                    )}
                  </>
                ) : (
                  <Col md={4}>
                    <FormGroup check inline>
                      <Label className='me-3' for='rideTypeOther'>
                        Other
                      </Label>
                      <Input
                        id='js-profile-form-ride-type-other'
                        name='rideTypeOther'
                        type='checkbox'
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        invalid={errors.rideType?.road?.message ? true : false}
                        data-lpignore='true'
                      />
                    </FormGroup>
                  </Col>
                )
              }
            />
          </Row>

          <h5 className='my-3 mt-5'>Ride difficulty</h5>

          <Row>
            <Controller
              control={control}
              name='difficulty.easy'
              render={({ field: { onChange, onBlur, value } }) =>
                readOnly ? (
                  <>
                    {value && (
                      <span className='pe-3 col-2 fw-bold fst-italic'>
                        EASY
                      </span>
                    )}
                  </>
                ) : (
                  <Col md={4}>
                    <FormGroup check inline>
                      <Label className='me-3' for='rideDifficultyEasy'>
                        Easy
                      </Label>
                      <Input
                        id='js-profile-form-ride-type-easy'
                        name='rideDifficultyEasy'
                        type='checkbox'
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        invalid={
                          errors.difficulty?.easy?.message ? true : false
                        }
                        data-lpignore='true'
                      />
                    </FormGroup>
                  </Col>
                )
              }
            />

            <Controller
              control={control}
              name='difficulty.medium'
              render={({ field: { onChange, onBlur, value } }) =>
                readOnly ? (
                  <>
                    {value && (
                      <span className='pe-3 col-2 fw-bold fst-italic'>
                        MEDIUM
                      </span>
                    )}
                  </>
                ) : (
                  <Col md={4}>
                    <FormGroup check inline>
                      <Label className='me-3' for='rideDifficultyMedium'>
                        Medium
                      </Label>
                      <Input
                        id='js-profile-form-ride-type-medium'
                        name='rideDifficultyMedium'
                        type='checkbox'
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        invalid={
                          errors.difficulty?.medium?.message ? true : false
                        }
                        data-lpignore='true'
                      />
                    </FormGroup>
                  </Col>
                )
              }
            />

            <Controller
              control={control}
              name='difficulty.hard'
              render={({ field: { onChange, onBlur, value } }) =>
                readOnly ? (
                  <>
                    {value && (
                      <span className='pe-3 col-2 fw-bold fst-italic'>
                        HARD
                      </span>
                    )}
                  </>
                ) : (
                  <Col md={4}>
                    <FormGroup check inline>
                      <Label className='me-3' for='rideDifficultyHard'>
                        Hard
                      </Label>
                      <Input
                        id='js-profile-form-ride-type-hard'
                        name='rideDifficultyHard'
                        type='checkbox'
                        onChange={onChange}
                        onBlur={onBlur}
                        checked={value}
                        invalid={
                          errors.difficulty?.hard?.message ? true : false
                        }
                        data-lpignore='true'
                      />
                    </FormGroup>
                  </Col>
                )
              }
            />
          </Row>

          {/* {fields.map((rideType) => (
            <Controller
              control={control}
              name='rideType'
              rules={{
                required: 'ride type is required',
              }}
              render={({ field: { onChange, onBlur, value } }) =>
                readOnly ? (
                  <p>
                    <span className='pe-3 col-2 fw-bold fst-italic'>
                      {rideType.type}
                    </span>
                  </p>
                ) : (
                  <p></p>
                )
              }
            />
          ))} 
          
          <Controller
            control={control}
            name='rideType'
            rules={{
              required: 'ride type is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <fieldset>
                {rideTypeChoices.map(({ type, checked }, index) =>
                  readOnly ? (
                    <span className='pe-3 col-2 fw-bold fst-italic'>
                      {checked && type}
                    </span>
                  ) : (
                    <Col md={4}>
                      <FormGroup check inline>
                        <Label className='me-3' for={`rideType${index}`}>
                          {type}
                        </Label>
                        <Input
                          id={`js-profile-form-ride-type-${index}`}
                          name={`rideType${index}`}
                          type='checkbox'
                          onChange={onChange}
                          onBlur={onBlur}
                          checked={checked}
                          // invalid={errors.rideType[index]? true : false}
                          data-lpignore='true'
                        />
                      </FormGroup>
                    </Col>
                  )
                )}
              </fieldset>
            )}
          /> */}
        </Row>
      </CardBody>
    </Card>
  );
}
