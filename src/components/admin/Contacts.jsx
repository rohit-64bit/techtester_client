import React from 'react'

const Contacts = () => {
    return (
        <div className='bg-white p-5 rounded-xl duration-300 hover:shadow-md flex flex-col gap-3'>
            <div>
                <div className='text-xl font-bold text-slate-900'>
                    Customer Name
                </div>
                <div className='text-slate-700'>
                    name123@gmail.com
                </div>
                <div className='text-slate-700'>
                    9876543210
                </div>
                <div className='text-slate-700'>
                    Query
                </div>
                <div className='text-slate-700'>
                    Status
                </div>
            </div>
            <div className='flex gap-3'>
                <button className='bg-black text-white px-5 py-2 rounded-lg'>
                    Edit
                </button>
                <button className='bg-red-500 text-white px-5 py-2 rounded-lg'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Contacts