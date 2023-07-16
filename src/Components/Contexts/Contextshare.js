import React, { createContext, useState } from 'react';

export const addData = createContext()
export const updateData = createContext()
export const deleteData = createContext()

// function to share th data
// children for update the var in this compt based on the recent change
// children is a react method to update the value

function Contextshare({ children }) {
    // register data
    const [userAdd, setUserAdd] = useState("")
    // update data
    const [editdata, setEditData] = useState("")
    // deletedata
    const [deletedata, setDeleteData] = useState("")

    return (
        <>
            <addData.Provider value={{ userAdd, setUserAdd }}>
                <updateData.Provider value={{ editdata, setEditData }}>
                    <deleteData.Provider value={{ deletedata, setDeleteData }}>
                        {children}
                    </deleteData.Provider>
                </updateData.Provider>
            </addData.Provider>
        </>
    )
}


export default Contextshare