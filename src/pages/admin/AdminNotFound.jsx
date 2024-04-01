import React from 'react'
import { Link } from 'react-router-dom'

const AdminNotFound = () => {
    return (
        <div className='bg-slate-100 w-full h-full p-10'>

            <div className='text-2xl font-bold text-slate-900 mb-10'>
                404 Page Not Found
            </div>

            <Link to='/admin/home' className='bg-black text-white px-5 py-2 rounded-lg'>
                Admin Home
            </Link>

        </div>
    )
}

export default AdminNotFound