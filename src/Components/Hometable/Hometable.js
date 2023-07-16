import React, { useState, useEffect, useContext } from 'react';
import { Badge, Card, Col, Dropdown, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Services/base_url';
import LoadingSpinner from '../../Components/Loadingspinner/LoadingSpinner';
import { editStatus } from '../../Services/allAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { updateData } from '../../Components/Contexts/Contextshare';


function Hometable({ displayData, deleteUser, onStatusChange }) {

    // state for status
    const [status, setStatus] = useState("")

    // for the spinner
    const [showSpin, setShowSpin] = useState(true)

    // for page navigation
    const navigate = useNavigate()

    // for shoring to home to show toast
    const { editdata, setEditData } = useContext(updateData)

    const statusChange = async (id, currentstatus) => {
        try {
            let newStatus;
            if (currentstatus === "Active") {
                newStatus = "Inactive";
            } else {
                newStatus = "Active";
            }

            setStatus(newStatus);

            // Make the API call to update the status
            const response = await editStatus(id, { status: newStatus }, {});
            console.log(response);
            if (response.status === 200) {
                setEditData(response.data)
                navigate('/')
                onStatusChange(); // Call the callback function to reload the Home component
                // Update the status in the local state (displayData)
                // const updatedDisplayData = displayData.map((item) => {
                //     if (item._id === id) {
                //         return { ...item, status: newStatus };
                //     }
                //     return item;
                // });
            }
            else {
                toast.error("Error!!")
            }

            console.log("inside statusChange");
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        setTimeout(() => {
            setShowSpin(false)
        }, 2000);
    })

    return (
        <>
            <div className="container">
                <Row>
                    <div className="col">
                        <Card className='shadow'>
                            <Table className='align-item-center' responsive='sm'>
                                <thead className='thead-dark'>
                                    <tr className='table-dark'>
                                        <th>ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Profile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        showSpin ?
                                            <tr>
                                                <td colSpan="7" className="text-center">
                                                    <LoadingSpinner />
                                                </td>
                                            </tr>
                                            :
                                            displayData.length > 0 ? displayData.map((item, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.fname} &nbsp; {item.lname} </td>
                                                    <td>{item.email}</td>
                                                    <td className='d-flex align-items-center'>
                                                        {item.gender === 'Female' ?
                                                            <img className='me-1' width={'20px'} height={'20px'} src="https://media.tenor.com/9pdyjhtrA40AAAAi/female-sign-symbols.gif" alt="search" />
                                                            :
                                                            <img className='me-1' width={'20px'} height={'20px'} src="https://media.tenor.com/Nrk8O-kEefQAAAAi/male-sign-symbols.gif" alt="search" />
                                                        }
                                                        {item.gender}
                                                    </td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                // variant={item.status === 'Active' ? 'primary' : 'danger'}
                                                                variant='primary d-flex justify-content-start align-items-center'
                                                                id="dropdown-basic">
                                                                {item.status === 'Active' ?
                                                                    <img className='me-1' width={'10px'} height={'10px'} src="https://media.tenor.com/bajOaNcbeSoAAAAi/green-circle-symbols.gif" alt="search" />
                                                                    :
                                                                    <img className='me-1' width={'10px'} height={'10px'} src="https://media.tenor.com/4t7Ko-D6pYgAAAAi/red-circle-symbols.gif" alt="search" />
                                                                }
                                                                {item.status}
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu
                                                            >
                                                                <Dropdown.Item >
                                                                    <Button type='button'
                                                                        onClick={() => statusChange(item._id, item.status)}
                                                                        variant='primary d-flex justify-content-start align-items-center'>
                                                                        {item.status === "Active" ?
                                                                            <>
                                                                                <img className='me-1' width={'10px'} height={'10px'} src="https://media.tenor.com/4t7Ko-D6pYgAAAAi/red-circle-symbols.gif" alt="search" />
                                                                                Inactive </>
                                                                            :
                                                                            <>
                                                                                <img className='me-1' width={'10px'} height={'10px'} src="https://media.tenor.com/bajOaNcbeSoAAAAi/green-circle-symbols.gif" alt="search" />
                                                                                Active </>}
                                                                    </Button>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>

                                                        </Dropdown>
                                                    </td>
                                                    <td>
                                                        <Link to={`/profile/${item._id}`}>
                                                            <img className='rounded' width={'50px'} height={'50px'} src={`${BASE_URL}/uploads/${item.profile}`} alt='profile pic' />
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant='light' id="dropdown-action">
                                                                <img width={'30px'} height={'30px'} src="https://media.tenor.com/eXPpVjeORscAAAAi/brainpull-brainpull-stories.gif" alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item>
                                                                    <Link className='text-decoration-none d-flex justify-content-start' to={`/profile/${item._id}`}>
                                                                        <img className='me-2' width={'20px'} height={'20px'} src="https://media.tenor.com/mDYMWm8eUjsAAAAi/eyes-looking.gif" alt="" />
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link className='text-decoration-none d-flex justify-content-start' to={`/edit/${item._id}`}>
                                                                        <img className='me-2' width={'20px'} height={'20px'} src="https://media.tenor.com/-qgiV5fFGskAAAAi/dm4uz3-foekoe.gif" alt="" />
                                                                        Edit
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <div onClick={() => deleteUser(item._id)} className='d-flex justify-content-start'>
                                                                        <img className='me-2' width={'20px'} height={'20px'} src="https://media.tenor.com/lfu8Rwjx30UAAAAi/hhhh.gif" alt="" />
                                                                        Delete
                                                                    </div>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            )) :
                                                <tr className='d-flex justify-content-center align-items-center mt-2'>
                                                    <td colSpan="7" className="text-center">
                                                        Sorry! Nothing to display
                                                    </td>
                                                </tr>}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </div>

            {/* toast */}
            <ToastContainer position='top-center' />

        </>
    )
}

export default Hometable