// TODO: recreate the userform and modify for ride.
// Make sure to look into the context and see if it is needed.

import React, { useEffect, useState } from 'react';
// import uselocation when needed
// import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { FormProvider, useForm } from 'react-hook-form';

import RideForm from '../forms/RideForm';

// type RideType = { road: boolean; mountain: boolean; other: boolean };
// type RideDifficulty = { hard: boolean; medium: boolean; easy: boolean };

export interface FormFields {
  id?: string;
  rideTitle: string;
  rideDescription: string;
  rideType: string;
  rideDifficulty: string;
}

export interface RideFormProps {
  readOnly?: boolean;
}

function RideProfile(props: { location: string; createRide: boolean }) {
  const [rideData, setRideData] = useState({});
  const [readOnly, setReadOnly] = useState(!props.createRide);

  const navigate = useNavigate();

  // TODO: the following is just an experiment to test the db. modify when done.
  useEffect(() => {
    const rideId = '6504c7fc0afe1183e4538209';
    const apiUrl = `/api/ride/${rideId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((ride) => setRideData(ride))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const useFormReturn = useForm<FormFields>({
    mode: 'all',
    reValidateMode: 'onChange'
  });

  const onFormSubmit = (data: any) => {
    // TODO: add the userId as createdById to the data when it is available
    data.createdById = '64275075798a59db3b803cba';
    // TODO: don't submit on page load/refresh
    // e.preventDefault();

    const apiUrl = `/api/ride/create`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((newUserData) => {
        // Process the newly created user data
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // reset(data);
    setReadOnly(true);
    navigate('/');
  };

  const {
    handleSubmit,
    reset,
    formState: { errors, defaultValues, isValid }
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
              <Button color='primary' type='submit'>
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
