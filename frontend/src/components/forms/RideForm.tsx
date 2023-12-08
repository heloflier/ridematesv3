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
import { FormFields, RideFormProps } from '../ride/RideProfile';

// const extractvalue = (object: { key: string; value: string }) => {
//   for (const key in object) {
//     console.log(`${key}: ${object[key]}`);
//     if (object[key] === true) return key;
//   }
// };

export default function RideForm({ readOnly }: RideFormProps) {
  const {
    control,
    formState: { errors, isValid },
  } = useFormContext<FormFields>();

  return (
    <Card className='mb-3'>
      <CardHeader>
        <CardTitle>
          <h1>Ride Description</h1>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Controller
            control={control}
            name='rideTitle'
            rules={{
              required: 'ride title is required',
              maxLength: {
                value: 45,
                message: 'ride title must be less than 45 characters',
              },
              pattern: {
                value: /^[A-Za-z0-9\s]+$/i,
                message: 'ride title must contain only letters and numbers',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Ride Title : </span>
                  {value}
                </p>
              ) : (
                <Col md={4}>
                  <FormGroup>
                    <Label for='rideTitle'>Ride Title</Label>
                    <Input
                      id='js-ride-form-rideTitle'
                      name='rideTitle'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.rideTitle?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>{errors.rideTitle?.message}</FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <Controller
            control={control}
            name='rideDescription'
            rules={{
              required: 'ride description is required',
              minLength: {
                value: 10,
                message: 'ride description must be at least 10 characters',
              },
              pattern: {
                value: /^[A-Za-z0-9\s]+$/i,
                message:
                  'ride description must contain only letters and numbers',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <p>
                  <span className='pe-3 col-2'>Desription : </span>
                  {value}
                </p>
              ) : (
                <Col md={8}>
                  <FormGroup>
                    <Label for='ride-description'>Description</Label>
                    <Input
                      id='js-ride-form-rideDescription'
                      name='ride-description'
                      type='textarea'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      invalid={errors.rideDescription?.message ? true : false}
                      data-lpignore='true'
                    />
                    <FormFeedback>
                      {errors.rideDescription?.message}
                    </FormFeedback>
                  </FormGroup>
                </Col>
              )
            }
          />

          <hr className='my-5' />

          <h5 className='my-3'>Ride type</h5>

          <Controller
            control={control}
            name='rideType'
            rules={{ required: 'ride type is required' }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <>
                  {console.log('--------- ride type value: ', typeof value)}
                  {value && (
                    <span className='pe-3 col-2 fw-bold fst-italic'>
                      {value}
                    </span>
                  )}
                </>
              ) : (
                <Col md={4}>
                  <FormGroup check inline>
                    <Label check className='me-3' for='rideType'>
                      Road
                    </Label>
                    <Input
                      id='js-profile-form-ride-type-road'
                      name='rideType'
                      type='radio'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value.road}
                      invalid={errors.rideType?.road?.message ? true : false}
                      value='Road'
                      data-lpignore='true'
                    />
                    {() => console.log('-------value: ', value)}
                  </FormGroup>
                  <FormGroup check inline>
                    <Label className='me-3' for='rideType'>
                      Mountain
                    </Label>
                    <Input
                      id='js-profile-form-ride-type-mountain'
                      name='rideType'
                      type='radio'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value.mountain}
                      invalid={
                        errors.rideType?.mountain?.message ? true : false
                      }
                      value='Mountain'
                      data-lpignore='true'
                    />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label className='me-3' for='rideType'>
                      Other
                    </Label>
                    <Input
                      id='js-profile-form-ride-type-other'
                      name='rideType'
                      type='radio'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value.other}
                      invalid={errors.rideType?.other?.message ? true : false}
                      value='Other'
                      data-lpignore='true'
                    />
                  </FormGroup>
                </Col>
              )
            }
          />

          <h5 className='mt-5 mb-3'>Ride Difficulty</h5>

          <Controller
            control={control}
            name='rideDifficulty'
            rules={{ required: 'ride difficulty is required' }}
            render={({ field: { onChange, onBlur, value } }) =>
              readOnly ? (
                <>
                  {console.log('--------- ride difficulty value: ', value)}
                  {value && (
                    <span className='pe-3 col-2 fw-bold fst-italic'>
                      {/* {(value: object) => extractvalue} */}
                      {value}
                    </span>
                  )}
                </>
              ) : (
                <Col md={4}>
                  <FormGroup check inline>
                    <Label className='me-3' for='rideDifficulty'>
                      Easy
                    </Label>
                    <Input
                      id='js-profile-form-ride-difficulty-easy'
                      name='rideDifficulty'
                      type='radio'
                      onChange={onChange}
                      onBlur={onBlur}
                      // TODO: fix this below. This is the last change made.
                      checked={value.easy}
                      invalid={
                        errors.rideDifficulty?.easy?.message ? true : false
                      }
                      value='Easy'
                      data-lpignore='true'
                    />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label className='me-3' for='rideDifficulty'>
                      Medium
                    </Label>
                    <Input
                      id='js-profile-form-ride-difficulty-medium'
                      name='rideDifficulty'
                      type='radio'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value.medium}
                      invalid={
                        errors.rideDifficulty?.medium?.message ? true : false
                      }
                      value='Medium'
                      data-lpignore='true'
                    />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label className='me-3' for='rideDifficulty'>
                      Hard
                    </Label>
                    <Input
                      id='js-profile-form-ride-difficulty-hard'
                      name='rideDifficulty'
                      type='radio'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value.hard}
                      invalid={
                        errors.rideDifficulty?.hard?.message ? true : false
                      }
                      value='Hard'
                      data-lpignore='true'
                    />
                  </FormGroup>
                </Col>
              )
            }
          />
        </Row>
      </CardBody>
    </Card>
  );
}
