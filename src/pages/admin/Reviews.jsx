import React, { useState } from 'react'
import ReviewComponent from './../../components/admin/Reviews';

const Reviews = () => {

    return (
        <main className='bg-slate-100 w-full h-full p-10'>
            <div className="flex justify-between mb-10">
                <div className='text-2xl font-bold text-slate-900'>
                    Reviews
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    Array(13).fill().map((_, i) => (
                        <ReviewComponent key={i} />
                    ))
                }
            </div>
        </main>
    )
}

export default Reviews