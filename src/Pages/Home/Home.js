import React from 'react';
import './Home.css';
import { Button, Form } from 'react-bootstrap';
import Hometable from '../../Components/Hometable/Hometable';



function Home() {
  return (
    <>
      <div className='container'>
        <div className='first-div mt-3'>
          <div className="search-add d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className='d-flex '>
                <Form.Control type="text" placeholder="Search" className='me-2' />
                <Button variant='primary d-flex justify-content-start'>
                  <img className='me-1' width={'20px'} height={'20px'} src="https://media.tenor.com/S8dOItPNscgAAAAi/loop-loading.gif" alt="search" />
                  Search</Button>
              </Form>
            </div>
            <div className="add">
              <Button variant='primary d-flex justify-content-start'>
                <img className='me-1' width={'20px'} height={'20px'} src="https://media.tenor.com/2gi5ucI5THgAAAAi/usagyuuun-note.gif" alt="register" />
                Register</Button>
            </div>
          </div>
        </div>
        <div className="second-div mt-3">
          <Hometable />
        </div>
      </div>
    </>
  )
}

export default Home