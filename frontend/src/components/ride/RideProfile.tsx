// TODO: recreate the userform and modify for ride.
// Make sure to look into the context and see if it is needed.

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'reactstrap';
import { FormProvider, useForm } from 'react-hook-form';

import RideForm from '../forms/RideForm';

type RideType = { road: boolean; mountain: boolean; other: boolean };
type rideDifficulty = { hard: boolean; medium: boolean; easy: boolean };

export interface FormFields {
  rideTitle: string;
  rideDescription: string;
  rideType: RideType;
  rideDifficulty: rideDifficulty;
}

export interface RideFormProps {
  readOnly?: boolean;
}

function RideProfile(props: { location: string; createRide: boolean }) {
  const [ride, setRide] = useState({});
  const [isValidating, setisValidating] = useState([]);
  const [readOnly, setReadOnly] = useState(!props.createRide);

  const navigate = useNavigate();

  // TODO: the following is just an experiment to test the db. modify when done.
  useEffect(() => {
    const rideId = '6504c7fc0afe1183e4538209';
    axios.get(`/api/rides/${rideId}`).then((res) => {
      console.log('ride: ', res.data);
      setRide(res.data);
    });
  }, []);

  const useFormReturn = useForm<FormFields>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      rideTitle: 'Short ride',
      rideDescription: 'This is a somewhat longer description of the ride',
      rideType: { road: true, mountain: false, other: false },
      rideDifficulty: { hard: false, medium: true, easy: false },
    },
  });

  const onFormSubmit = (data: any) => {
    // TODO: don't submit on page load/refresh
    // e.preventDefault();
    // await data;
    console.log('**************** data: ', data);
    // console.log('**************** in create ride', data);
    // axios
    //   .post('/api/ride/create')
    //   .then(res => {
    //     setRide(res.data);
    //     console.log(res.data);
    //   }
    // );
    reset(data);
    setReadOnly(true);
    // navigate('/');
    // TODO: validate radio buttons on submit: at least one per type
    // needs to be checked.
  };

  const {
    handleSubmit,
    reset,
    formState: { errors, defaultValues, isValid },
  } = useFormReturn;

  const onCancel = () => {
    reset(defaultValues);
    setReadOnly(true);
    navigate('/');
  };

  return (
    <FormProvider {...useFormReturn}>
      <div className='container'>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <RideForm readOnly={readOnly} />
          {readOnly ? (
            <Button color='primary' onClick={() => setReadOnly(!readOnly)}>
              Edit
            </Button>
          ) : (
            <div>
              <Button color='primary' type='submit' disabled={!isValid}>
                Submit
              </Button>
              <Button
                color='transparent'
                className='ms-3 border border-secondary'
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          )}
        </Form>
      </div>
    </FormProvider>
  );
}

export default RideProfile;
