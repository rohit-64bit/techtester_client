import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const AdminMainLayout = ({ Page }) => {
    return (
        <div className='flex'>

            <SideBar />

            <div className='w-full flex flex-col'>

                <Header />

                <Page />

            </div>

        </div>
    )
}

export default AdminMainLayout