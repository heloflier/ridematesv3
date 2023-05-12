import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { FormProvider, useForm } from 'react-hook-form';

import UserForm from './forms/UserForm';

export interface FormFields {
  firstName: string;
  lastName: string;
}

export interface userFormProps {
  readOnly?: boolean
}

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
      lastName: 'Bobbinson'
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
      {/* <input {...register('firstName')} />
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" /> */}
    </FormProvider>
  );
}

            

  
export default UserProfile;