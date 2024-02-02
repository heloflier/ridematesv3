import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'reactstrap';
import { FormProvider, useForm } from 'react-hook-form';

import UserForm from '../forms/UserForm';

type RideType = { road: boolean; mountain: boolean; other: boolean };
type Difficulty = { hard: boolean; medium: boolean; easy: boolean };

export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  phonenum: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  notify: boolean;
  radius: number;
  rideType: RideType;
  difficulty: Difficulty;
}

export interface userFormProps {
  readOnly?: boolean;
}

function UserProfile() {
  const [user, setUser] = useState({});
  const [isValidating, setisValidating] = useState([]);
  const [readOnly, setReadOnly] = useState(true);

  const navigate = useNavigate();

  const useFormReturn = useForm<FormFields>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: 'Bob',
      lastName: 'Bobbinson',
      email: 'bob@bob.com',
      phonenum: '7022223333',
      address: '123 Disneyland Lane',
      address2: 'second floor',
      city: 'Redlands',
      state: 'California',
      zipcode: '10123',
      notify: false,
      radius: 0,
      rideType: { road: true, mountain: false, other: false },
      difficulty: { hard: true, medium: true, easy: false }
    }
  });

  // TODO: the following is just an experiment to test the db. modify when done.
  useEffect(() => {
    const userId = '64275075798a59db3b803cba';
    axios.get(`/api/user/${userId}`).then((res) => {
      console.log('user: ', res.data);
      setUser(res.data);
    });
  }, []);

  const {
    handleSubmit,
    reset,
    formState: { errors, defaultValues, isValid }
  } = useFormReturn;

  const onFormSubmit = async (data: any) => {
    // TODO: don't submit on page load/refresh
    // e.preventDefault();
    await data;
    console.log('**************** in create user', data);
    // axios
    //   .post('/api/user/create')
    //   .then(res => {
    //     setUser(res.data);
    //     console.log(res.data);
    //   }
    // );
    reset(data);
    setReadOnly(true);
    // navigate('/');
  };

  const onCancel = () => {
    reset(defaultValues);
    setReadOnly(true);
    navigate('/');
  };

  return (
    <FormProvider {...useFormReturn}>
      <div className='container'>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <UserForm readOnly={readOnly} />
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

export default UserProfile;
