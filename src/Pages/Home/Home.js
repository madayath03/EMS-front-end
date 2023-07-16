import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { Alert, Button, Form } from 'react-bootstrap';
import Hometable from '../../Components/Hometable/Hometable';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/Loadingspinner/LoadingSpinner';
import { addData, deleteData, updateData } from '../../Components/Contexts/Contextshare';
import { deleteuser, getallusers } from '../../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';

function Home() {

  // for search
  const [search, setSearch] = useState("")

  // delete data context
  const { deletedata, setDeleteData } = useContext(deleteData)

  const { editdata, setEditData } = useContext(updateData)

  // to hold all users state
  const [userData, setUserData] = useState([])

  const { userAdd, setUserAdd } = useContext(addData)
  // console.log(userAdd);

  const navigate = useNavigate()

  const [showSpin, setShowSpin] = useState(true)

  const adduser = () => {
    navigate('/register')
  }

  const handleStatusChange = () => {
    getalluserdata();
  };

  // api call to get all users

  const getalluserdata = async () => {
    const response = await getallusers(search)
    if (response.status === 200) {
      setUserData(response.data);
    }
    else {
      console.log("cannot fetch data");
    }
  }

  // delete user
  const deleteUser = async (id) => {
    const response = await deleteuser(id)
    if (response.status === 200) {
      getalluserdata()
      setDeleteData(response.data)
    }
    else {
      console.log("error");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getalluserdata()
      setShowSpin(false)
    }, 2000);
  }, [search])

  useEffect(() => {
    if (editdata) {
      toast.success(`${editdata.fname.toUpperCase()} successfully updated...`);
      setEditData('');
    }
  }, [editdata, setEditData]);

  useEffect(() => {
    if (deletedata) {
      toast.error(`${deletedata.fname.toUpperCase()} successfully deleted...`);
      setDeleteData('');
    }
  }, [deletedata, setDeleteData]);

  useEffect(() => {
    if (userAdd) {
      toast.success(`${userAdd.fname.toUpperCase()} successfully registered...`);
      setUserAdd('');
    }
  }, [userAdd, setUserAdd]);

  return (
    <>
      {/* {
        userAdd ? <Alert variant="success" onClose={() => setUserAdd("")} dismissible>
          {userAdd.fname.toUpperCase()} successfully registered...
        </Alert> : ""
      }

      {
        editdata ? <Alert variant="success" onClose={() => setEditData("")} dismissible>
          {editdata.fname.toUpperCase()} successfully updated...
        </Alert> : ""
      }
      {
        deletedata ? <Alert variant="danger" onClose={() => setDeleteData("")} dismissible>
          {deletedata.fname.toUpperCase()} successfully deleted...
        </Alert> : ""
      } */}


      <div className='container'>
        <div className='first-div mt-3'>
          <div className="search-add d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className='d-flex '>
                <Form.Control onChange={e => { setSearch(e.target.value) }} type="text" placeholder="Search" className='me-2' />
                <Button variant='primary d-flex justify-content-start'>
                  <img className='me-1' width={'20px'} height={'20px'} src="https://media.tenor.com/S8dOItPNscgAAAAi/loop-loading.gif" alt="search" />
                  Search</Button>
              </Form>
            </div>
            <div className="add">
              {/* <Link to={'/register'}> */}
              <Button variant='primary d-flex justify-content-start' onClick={adduser}>
                <img className='me-1' width={'20px'} height={'20px'} src="https://media.tenor.com/2gi5ucI5THgAAAAi/usagyuuun-note.gif" alt="register" />
                Register</Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="second-div mt-3">
          {
            showSpin ? <div className='text-center mt-5'><LoadingSpinner /></div> :
              <Hometable displayData={userData} deleteUser={deleteUser} onStatusChange={handleStatusChange} />
          }
        </div>
      </div>

      {/* toast */}
      <ToastContainer position='top-center' />

    </>
  )
}

export default Home