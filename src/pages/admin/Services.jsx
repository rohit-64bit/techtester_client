import React, { useState } from 'react'
import ServiceComponent from './../../components/admin/Services';
import { Modal } from '@mui/material';

const Services = () => {
    const [formInput, setFormInput] = useState({
        title: '',
        description: ''
    })

    const onChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <main className='bg-slate-100 w-full h-full p-10'>
            <div className="flex justify-between mb-10">
                <div className='text-2xl font-bold text-slate-900'>
                    Services
                </div>
                <button onClick={handleOpen} className='bg-black text-white px-5 py-2 rounded-lg'>
                    Add Service
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='flex justify-center items-center'
                >
                    <form className='p-10 bg-white flex flex-col gap-5 rounded-xl shadow-xl w-[30%]'>
                        <input name='title' onChange={onChange} value={formInput.title} type="text" className='w-full outline outline-[1.5px] outline-slate-300 focus:outline-slate-500 duration-300 rounded-lg py-2 px-4' placeholder='Enter Item Title' />
                        <textarea name='description' onChange={onChange} value={formInput.description} rows={4} type="text" className='w-full outline outline-[1.5px] outline-slate-300 focus:outline-slate-500 duration-300 rounded-lg py-2 px-4' placeholder='Enter Item Description' />
                        <div className='flex justify-end gap-3'>
                            <button type='reset' onClick={handleClose} className='bg-red-500 text-white px-5 py-2 rounded-lg'>
                                Cancel
                            </button>
                            <button type='submit' className='bg-black text-white px-5 py-2 rounded-lg'>
                                Add Service
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    Array(13).fill().map((_, i) => (
                        <ServiceComponent key={i} />
                    ))
                }
            </div>
        </main>
    )
}

export default Services