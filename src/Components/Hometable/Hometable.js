import React from 'react';
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hometable() {
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
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table@cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    Active
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                    <Dropdown.Item >Inactive</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td>
                                            <Link to={'/profile/1'}>
                                                <img width={'50px'} height={'50px'} src="https://media.tenor.com/6uEzjBAMt0QAAAAi/cute-girl-neko-girl.gif" alt="" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' id="dropdown-action">
                                                    <img width={'30px'} height={'30px'} src="https://media.tenor.com/eXPpVjeORscAAAAi/brainpull-brainpull-stories.gif" alt="" />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <Link className='text-decoration-none d-flex justify-content-start' to={'/profile/1'}>
                                                            <img className='me-2' width={'20px'} height={'20px'} src="https://media.tenor.com/mDYMWm8eUjsAAAAi/eyes-looking.gif" alt="" />
                                                            View
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link className='text-decoration-none d-flex justify-content-start' to={'/edit/1'}>
                                                            <img className='me-2' width={'20px'} height={'20px'} src="https://media.tenor.com/-qgiV5fFGskAAAAi/dm4uz3-foekoe.gif" alt="" />
                                                            Edit
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <div className='d-flex justify-content-start'>
                                                            <img className='me-2' width={'20px'} height={'20px'} src="https://media.tenor.com/lfu8Rwjx30UAAAAi/hhhh.gif" alt="" />
                                                            Delete
                                                        </div>
                                                    </Dropdown.Item>

                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default Hometable