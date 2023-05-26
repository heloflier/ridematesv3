import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { FormProvider, useForm } from 'react-hook-form';

import UserForm from './forms/UserForm';

export interface FormFields {
  firstName: string;
  lastName: string;
  address: string,
  address2: string,
  city: string,
  state: string,
  zipcode: number,
  email: string,
  phonenum: number,
  notify: boolean,
  radius: number,
  rideType: {
    road: boolean,
    mountain: boolean,
    other: boolean
  },
  difficulty: {
    easy: boolean,
    medium: boolean, 
    hard: boolean 
  }
}

export interface userFormProps {
  readOnly?: boolean
}

function UserProfile() { 
  const [user, setUser] = useState([]);
  const [readOnly, setReadOnly] = useState(true);

  // TODO: the following is just an experiment to test the db. modify when done.
  useEffect(() => {
    const userId = "64275075798a59db3b803cba";
    axios
      .get(`/api/user/${userId}`)
      .then(res => {
        setUser(res.data);
      }
    );
  }, []);

  const onFormSubmit = async (data: any) => {
    await data;
    console.log('**************** in create user', data);
    // axios
    //   .post('/api/user/create')
    //   .then(res => {
    //     setUser(res.data);
    //     console.log(res.data);
    //   }
    // );
  }


  const useFormReturn = useForm<FormFields>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: 'Bob',
      lastName: 'Bobbinson',
      address: '123 Disneyland Lane',
      address2: 'second floor',
      city: 'Redlands',
      state: 'California',
      zipcode: 10123,
      email: 'bob@bob.com',
      phonenum: 7022223333,
      notify: true,
      radius: 10,
      rideType: {
        road: false, 
        mountain: false, 
        other: false
      },
      difficulty: {
        hard: false, 
        medium: false, 
        easy: false
      }
    }
  });

  const {
    handleSubmit,
    formState: { errors },
  } = useFormReturn;
  
  return (
    <FormProvider {...useFormReturn}>
      <div className='container'>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <UserForm readOnly={readOnly} />
          {readOnly ?
            <Button color='primary' onClick={() => setReadOnly(!readOnly)}>
              Edit
            </Button>
          :
            <Button color='primary' type='submit'>
              Submit
            </Button>
          }
          
        </Form>
      </div>
    </FormProvider>
  );
}

            

  
export default UserProfile;