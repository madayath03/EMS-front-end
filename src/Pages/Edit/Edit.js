import React, { useContext, useEffect, useState } from 'react';
import './Edit.css';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import LoadingSpinner from '../../Components/Loadingspinner/LoadingSpinner';
import { editUser, viewuser } from '../../Services/allAPI';
import { BASE_URL } from '../../Services/base_url';
import { useNavigate, useParams } from 'react-router-dom';
import { updateData } from '../../Components/Contexts/Contextshare';


function Edit() {

  const { editdata, setEditData } = useContext(updateData)

  const navigate = useNavigate()
  const [existingImg, setExistImg] = useState("")

  const { id } = useParams()

  // get single user api


  const userDetails = async () => {
    const { data } = await viewuser(id)
    setInputData(data)
    setStatus(data.status)
    setExistImg(data.profile)
  }


  const [showSpin, setShowSpin] = useState(true)

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
  ]

  // state to hold normal inputs
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  })
  // state for status
  const [status, setStatus] = useState("Active")
  // for image state
  const [image, setImage] = useState("")

  // function to set normal inputs
  const setInputValue = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }
  console.log(inputData);

  // to status in state
  const setStatusValue = (e) => {
    setStatus(e.value)
  }

  // for profile in state
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }
  console.log(image);

  const [preview, setPreview] = useState("")

  useEffect(() => {
    userDetails()
  }, [id])

  useEffect(() => {
    if (image) {
      setExistImg("")
      setPreview(URL.createObjectURL(image))
    }
    // we put image as dependency so that it happens based on image state
    setTimeout(() => {
      setShowSpin(false)
    }, 2000);

  }, [image])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { fname, lname, email, mobile, gender, location } = inputData;
    if (fname === "") {
      toast.error("First name required")
    }
    else if (lname === "") {
      toast.error("Last name required")
    }
    else if (email === "") {
      toast.error("EMail required")
    }
    else if (mobile === "") {
      toast.error("Mobile required")
    }
    else if (gender === "") {
      toast.error("Gender required")
    }
    else if (status === "") {
      toast.error("Status required")
    }
    else if (image === "") {
      toast.error("Profile picture required")
    }
    else if (location === "") {
      toast.error("Location required")
    }
    else {
      // toast.success("Update successfull")

      const data = new FormData()
      // check index.js for the name of key
      data.append("user_profile", image || existingImg)
      data.append("fname", fname)
      data.append("lname", lname)

      data.append("email", email)
      data.append("mobile", mobile)
      data.append("gender", gender)
      data.append("location", location)
      data.append("status", status)

      const headerConfig = {
        // since file is there so this header, or else we will hav appl/json
        "Content-Type": "multipart/form-data"
      }

      const response = await editUser(id, data, headerConfig)
      console.log(response);
      if (response.status === 200) {
        setEditData(response.data)
        navigate('/')
      }
      else {
        toast.error("Error!!")
      }

    }
  }


  return (
    <>
      {showSpin ? <div className='text-center mt-5'><LoadingSpinner /></div> :
        <div className='container mt-5'>
          <h2 className='text-center mt-3'>Update Employee Details</h2>
          <Card className='shadow mt-3 p-3'>
            <div className='d-flex justify-content-center'>
              <div className='image-container'>
                <img className='profile-image' src='https://media.tenor.com/ZEX0M35v0Y4AAAAi/frames-frame.gif' alt="" />
                <img className='profile-image1' src={preview ? preview : `${BASE_URL}/uploads/${existingImg}`} alt="" />
              </div>
            </div>
            <Form className='mt-2'>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name='fname' placeholder="First Name" value={inputData.fname} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name='lname' placeholder="Last Name" value={inputData.lname} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Email" value={inputData.email} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="number" name='mobile' placeholder="Mobile" value={inputData.mobile} onChange={setInputValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                  <Form.Label>Select Gender</Form.Label>
                  <div className='d-flex '>
                    <Form.Check className='me-2'
                      type={'radio'}
                      label={`${'Male'}`}
                      name='gender'
                      value={'Male'}
                      checked={inputData.gender == 'Male' ? true : false}
                      onChange={setInputValue}
                    />
                    <img width={'30px'} height={'30px'} src="https://media.tenor.com/T8XeSG0QdisAAAAC/office-worker-joypixels.gif" alt="" />

                  </div>
                  <div className='d-flex '>
                    <Form.Check className='me-2'
                      type={'radio'}
                      label={`${'Female'}`}
                      name='gender'
                      value={'Female'}
                      checked={inputData.gender == 'Female' ? true : false}
                      onChange={setInputValue}
                    />
                    <img width={'30px'} height={'30px'} src="https://media.tenor.com/PBPjqSYaNmEAAAAC/woman-office-worker-people.gif" alt="" />

                  </div>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                  <Form.Label>Select Employee Status</Form.Label>
                  <Select options={options} placeholder={status} onChange={setStatusValue}></Select>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                  <Form.Label>Select Employee Profile Picture</Form.Label>
                  <Form.Control type="file" name='user_profile' onChange={setProfile} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                  <Form.Label>Select Employee Location</Form.Label>
                  <Form.Control type="text" name='location' placeholder="Enter Location" value={inputData.location} onChange={setInputValue} />
                </Form.Group>
                <Button className='mt-2' variant='primary' type='submit' onClick={handleSubmit}>Update</Button>
              </Row>
            </Form>
          </Card>

        </div>}

      {/* toast */}
      <ToastContainer position='top-center' />
    </>


  )

}

export default Edit