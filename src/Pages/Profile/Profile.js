import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import LoadingSpinner from '../../Components/Loadingspinner/LoadingSpinner';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteuser, viewuser } from '../../Services/allAPI';
import { BASE_URL } from '../../Services/base_url';
import { deleteData } from '../../Components/Contexts/Contextshare';


function Profile() {
  // to send the del username
  const { deletedata, setDeleteData } = useContext(deleteData)


  const navigate = useNavigate()

  const { id } = useParams()

  const [userDetail, setUserDetail] = useState({})

  const userDetails = async () => {
    const { data } = await viewuser(id)
    setUserDetail(data)
  }

  console.log(userDetail);
  const [showSpin, setShowSpin] = useState(true)

  const editt = () => {
    navigate(`/edit/${userDetail._id}`)
  }

  const deleteUser = async(id) => {
    const response = await deleteuser(userDetail._id)
    if (response.status === 200) {
      setDeleteData(response.data)
      navigate('/')
    }
    else {
      console.log("error");
    }
  }


  useEffect(() => {
    userDetails()
    setTimeout(() => {
      setShowSpin(false)
    }, 2000);
  }, [])


  return (
    <>
      {showSpin ? <div className='text-center mt-5'><LoadingSpinner /></div> :
        <Card className='shadow mt-3 py-1 col-lg-6 mx-auto mb-2'>
          <Card.Body>
            <Row>
              <div className="col">
                <div className="profile_img d-flex justify-content-center">
                  <img width={'200px'} height={'200px'} src={`${BASE_URL}/uploads/${userDetail.profile}`} alt="" />
                </div>
              </div>
            </Row>
            <div className="text-center mt-3">
              <h3>{`${userDetail.fname} ${userDetail.lname}`}</h3>
              <h5 className='col-lg-4 d-flex gap-2 mx-auto'>
                <i class="fa-solid fa-face-smile text-warning"></i>
                <span>{`${userDetail.status}`} </span>
              </h5>
              <h5 className='col-lg-4 d-flex gap-2 mx-auto'>
                <i class="fa-solid fa-envelope text-info"></i>
                <span>{`${userDetail.email}`} </span>
              </h5>
              <h5 className='col-lg-4 d-flex gap-3 mx-auto'>
                <i class="fa-solid fa-mobile-retro text-success"></i>
                <span>{`${userDetail.mobile}`} </span>
              </h5>
              <h5 className='col-lg-4 d-flex gap-2 mx-auto'>
                <i class="fa-solid fa-venus-mars text-danger"></i>
                <span>{`${userDetail.gender}`} </span>
              </h5>
              <h5 className='col-lg-4 d-flex gap-3 mx-auto'>
                <i class="fa-solid fa-location-dot text-primary"></i>
                <span>{`${userDetail.location}`} </span>
              </h5>
            </div>
            <div className='d-flex gap-2'>
              <div className='col-lg-6 d-grid'>
                <Button variant="success" onClick={editt}>Edit</Button>{' '}
              </div>
              <div className='col-lg-6 d-grid'>
                <Button variant="danger" onClick={() => deleteUser(userDetail._id)} >Delete</Button>{' '}
              </div>

            </div>

          </Card.Body>
        </Card>}
    </>
  )
}

export default Profile