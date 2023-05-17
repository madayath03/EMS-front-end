import React from 'react';
import './Register.css';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';



function Register() {
  // options for select
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
  ]



  return (
    <>
      <div className='container mt-5'>
        <h2 className='text-center mt-3'>Register Employee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className='text-center'>
            <img width={'50px'} height={'50px'} src="https://media.tenor.com/bDfHsCYpofsAAAAi/foodies-apple.gif" alt="" />
          </div>
          <Form className='mt-2'>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='fname' placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lname' placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="number" name='mobile' placeholder="Mobile" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                <Form.Label>Select Gender</Form.Label>
                <div className='d-flex '>
                  <Form.Check className='me-2'
                    type={'radio'}
                    label={`${'Male'}`}
                    name='gender'
                    id={`Male`}
                  />
                  <img width={'30px'} height={'30px'} src="https://media.tenor.com/T8XeSG0QdisAAAAC/office-worker-joypixels.gif" alt="" />

                </div>
                <div className='d-flex '>
                  <Form.Check className='me-2'
                    type={'radio'}
                    label={`${'Female'}`}
                    name='gender'
                    id={`Female`}
                  />
                  <img width={'30px'} height={'30px'} src="https://media.tenor.com/PBPjqSYaNmEAAAAC/woman-office-worker-people.gif" alt="" />

                </div>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>Select Employee Status</Form.Label>
                <Select options={options}></Select>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Select Employee Profile Picture</Form.Label>
                <Form.Control type="file" name='user_profile'  />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Select Employee Location</Form.Label>
                <Form.Control type="text" name='location' placeholder="Enter Location" />
              </Form.Group>
              <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
            </Row>
          </Form>
        </Card>

      </div>
    </>
  )
}

export default Register