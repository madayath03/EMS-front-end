import React from 'react';
import './Profile.css';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';


function Profile() {
  return (
    <>
      <Card className='shadow mt-5 py-3 col-lg-6 mx-auto mb-2'>
        <Card.Body>
          <Row>
            <div className="col">
              <div className="profile_img d-flex justify-content-center">
                <img width={'200px'} height={'200px'} src="https://media.tenor.com/6uEzjBAMt0QAAAAi/cute-girl-neko-girl.gif" alt="" />
              </div>
            </div>
          </Row>
          <div className="text-center mt-3">
            <h3>Max</h3>
            <h5 className='col-lg-4 d-flex gap-2 mx-auto'>
              <i class="fa-solid fa-face-smile text-warning"></i>
              <span>Active</span>
            </h5>
            <h5 className='col-lg-4 d-flex gap-2 mx-auto'>
              <i class="fa-solid fa-envelope text-info"></i>
              <span>max@gmail.com</span>
            </h5>
            <h5 className='col-lg-4 d-flex gap-3 mx-auto'>
              <i class="fa-solid fa-mobile-retro text-success"></i>
              <span>9898987676</span>
            </h5>
            <h5 className='col-lg-4 d-flex gap-2 mx-auto'>
              <i class="fa-solid fa-venus-mars text-danger"></i>
              <span>Male</span>
            </h5>
            <h5 className='col-lg-4 d-flex gap-3 mx-auto'>
              <i class="fa-solid fa-location-dot text-primary"></i>
              <span>Celta</span>
            </h5>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Profile