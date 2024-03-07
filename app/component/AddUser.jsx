'use client'
import React, { useState } from 'react'

const AddUser = ({ name }) => {
    const [data, setData] = useState('');
    const [lastData, setLastData] = useState('');
    const [show, setShow] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLastData(data)
        // setData('');
        setShow(false)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setData(lastData);
        setShow(false)

    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <span>{name}</span>
                    <br />
                    <input onFocus={() => setShow(true)} className='input' value={data} onChange={(e) => {
                        setData(e.target.value);
                    }} />
                </div>
                <div>
                </div>
                {!show ?
                    '' :
                    <div className="btn-section">
                        <button typeof='submit' className='btn submit'> Submit </button>
                        <button className='btn cancel' onClick={(e) => handleCancel(e)}> cancel </button>
                    </div>
                }


            </form>

        </div>
    )
}

export default AddUser

// 