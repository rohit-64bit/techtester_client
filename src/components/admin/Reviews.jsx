import React from 'react'
import { Rating } from '@mui/material'

const Reviews = () => {
    return (
        <div className='bg-white p-5 rounded-xl duration-300 hover:shadow-md flex flex-col gap-3'>
            <div>
                <div className='text-xl font-bold text-slate-900'>
                    Customer Name
                </div>
                <div className='text-slate-700'>
                   Customer ID
                </div>
                <div className='text-slate-700'>
                   Feedback
                </div>
                <Rating name="read-only" value={3} readOnly className='mt-3' />
            </div>
            <div className='flex gap-3'>
                <button className='bg-red-500 text-white px-5 py-2 rounded-lg'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Reviews