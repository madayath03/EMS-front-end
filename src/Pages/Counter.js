import React from 'react'
import { useState } from 'react';


function Counter() {
    const [counter, setcounter] = useState(0)

    const incrementcounter = () => {
        setcounter(counter+1)
    }


    const decrementcounter = () => {
        if (counter == 0) {
            alert('Invalid Operation')
        }
        else {
            setcounter(counter-1)
        }
    }

    const resetcounter = ()=>{
        setcounter(0)
    }


    return (
        <div className='container'>
            <h1 className='text-center text-primary fw-bolder'>Counter</h1>
            <div className='d-flex justify-content-center'>
                <button onClick={incrementcounter} className='btn btn-success me-3 fw-bolder'>+</button>
                <h3 className='text-center text-danger fw-bold'>{counter} </h3>
                <button onClick={decrementcounter} className='btn btn-warning ms-3 fw-bolder'>-</button>
            </div>
            <div className='text-center mt-2'>
                <button onClick={resetcounter} className='btn btn-danger'>Reset</button></div>
        </div>
    )
}

export default Counter