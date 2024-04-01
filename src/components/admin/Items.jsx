import React from 'react'

const Items = () => {
    return (
        <div className='bg-white p-5 rounded-xl duration-300 hover:shadow-md flex flex-col gap-3'>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPoRcLCg_KIQ-1jrWcAA1dEyKS3exOEmEXrArwx9qSH8N3kaErBaNG--orba5iZD2uec&usqp=CAU" alt="" className='rounded-lg' />


            <div>
                <div className='text-xl font-bold text-slate-900'>
                    Item Name
                </div>
                <div className='text-slate-700'>
                    Item Description
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

export default Items