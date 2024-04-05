import React, { useState } from 'react'
import ItemsComponent from './../../components/admin/Items';
import { Modal } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CLOUDINARY_URL, CLOUD_NAME, UPLOAD_PRESET } from '../../services/Cloudinary';
import { SERVER_URL } from '../../services/Helpers';

const Items = () => {

    const [imgInput, setImgInput] = useState(null)

    const [imgURL, setImgURL] = useState('')

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

    const handleImgInput = (e) => {
        setImgInput(e.target.files[0])
        setImgURL(URL.createObjectURL(e.target.files[0]))
    }

    const handleAddItem = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('file', imgInput)
        formData.append('upload_preset', UPLOAD_PRESET)
        formData.append('cloud_name', CLOUD_NAME)

        fetch(`${CLOUDINARY_URL}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

                if (data.secure_url) {

                    const itemData = {
                        title: formInput.title,
                        description: formInput.description,
                        imgUrl: data.secure_url
                    }

                    fetch(`${SERVER_URL}item/create`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(itemData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.success) {
                                alert(data.message)
                                setFormInput({})
                                setImgInput(null)
                                setImgURL('')
                                handleClose()
                            } else {
                                alert('Failed to Add Item')
                            }
                        })

                } else {
                    alert('Image Upload Failed')
                }

            })

    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <main className='bg-slate-100 w-full h-full p-10'>

            <div className="flex justify-between mb-10">

                <div className='text-2xl font-bold text-slate-900'>
                    Items
                </div>

                <button onClick={handleOpen} className='bg-black text-white px-5 py-2 rounded-lg'>
                    Add Item
                </button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='flex justify-center items-center'
                >
                    <form method='POST' onSubmit={handleAddItem} className='p-10 bg-white flex flex-col gap-5 rounded-xl shadow-xl w-[30%]'>
                        {

                            imgURL && imgInput ?

                                <div className='p-10 rounded-lg w-full text-slate-500 duration-300 hover:text-slate-800 hover:border-slate-500 border border-slate-300'>
                                    <img src={imgURL} alt="" className='rounded-xl' />
                                    <button type='button' onClick={e => {
                                        setImgInput(null)
                                        setImgURL('')
                                    }} className='bg-red-400 text-white w-full py-2 rounded-xl mt-5'>Remove Image</button>
                                </div>
                                :
                                <label htmlFor="img-input" className='p-10 rounded-lg w-full text-slate-500 duration-300 hover:text-slate-800 hover:border-slate-500 border border-slate-300'>

                                    <input onChange={handleImgInput} id='img-input' type="file" accept='img/*' className='hidden' />
                                    <div className='flex flex-col items-center justify-center gap-3 relative select-none '>
                                        <CloudUploadIcon />  Click to Upload Image
                                    </div>

                                </label>

                        }

                        <input name='title' onChange={onChange} value={formInput.title} type="text" className='w-full outline outline-[1.5px] outline-slate-300 focus:outline-slate-500 duration-300 rounded-lg py-2 px-4' placeholder='Enter Item Title' />

                        <textarea name='description' onChange={onChange} value={formInput.description} rows={4} type="text" className='w-full outline outline-[1.5px] outline-slate-300 focus:outline-slate-500 duration-300 rounded-lg py-2 px-4' placeholder='Enter Item Description' />

                        <div className='flex justify-end gap-3'>

                            <button type='reset' onClick={handleClose} className='bg-red-500 text-white px-5 py-2 rounded-lg'>
                                Cancel
                            </button>

                            <button type='submit' className='bg-black text-white px-5 py-2 rounded-lg'>
                                Add Item
                            </button>

                        </div>

                    </form>
                </Modal>

            </div>

            <div className='grid grid-cols-3 gap-5'>

                {
                    Array(5).fill().map((_, i) => (
                        <ItemsComponent key={i} />
                    ))
                }

            </div>

        </main>
    )
}

export default Items