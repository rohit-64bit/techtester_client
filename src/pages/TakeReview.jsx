import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TakeReview = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [rating, setRating] = useState(0)

    const [formData, setFormData] = useState({
        fullName: '',
        feedback: '',
        rating: rating,
        isFilled: params.agentID?.length === 10 ? "human" : "bot",
        agentID: params.agentID
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()

        if (formData.isFilled === 'bot') {
            return;
        }

        console.log(formData)

        // pass to backend

    }

    useEffect(() => {
        if (!params.agentID || params.agentID === '' || params.agentID === undefined || params.agentID.length !== 10) {
            navigate('/')
        }
    })

    if (false) {
        return (
            <div className='h-screen bg-slate-200 items-center justify-center flex flex-col'>
                <div className='flex flex-col gap-3 bg-white p-5 rounded-lg card-shadow w-[30%]'>
                    <p className='font-medium text-3xl'>Thankyou for your review</p>
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nostrum incidunt illum assumenda perferendis numquam sequi praesentium earum nemo harum explicabo laborum, quod rem quasi eligendi nulla quam aliquid ea.</p>
                </div>
            </div >
        )
    }

    return (
        <>
            <div className='h-screen bg-slate-200 items-center justify-center flex flex-col'>

                <form onSubmit={handleFormSubmit} method='POST' className='flex flex-col gap-3 bg-white p-5 rounded-lg card-shadow  lg:w-[30%]'>

                    <p className='font-medium'>Write what you think about our service.</p>

                    <input className='outline outline-[2px] outline-slate-200 px-5 py-2 rounded-lg border-none' type="text" placeholder='Full Name' name="fullName" value={formData.fullName} onChange={onChange} required />

                    <textarea placeholder='Write your feedback here ...' className='outline outline-[2px] outline-slate-200 px-5 py-2 rounded-lg border-none' name="feedback" value={formData.feedback} onChange={onChange} rows="5" required />

                    <div>
                        <p>Rate us *</p>
                        <Rating
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            sx={{ fontSize: 30 }}
                            aria-required
                        />
                    </div>

                    <input className='hidden' name='isFilled' type="text" value={formData.isFilled} onChange={onChange} required />

                    <input className='hidden' name='agentID' type="text" value={formData.agentID} onChange={onChange} required />

                    <button type="submit" className='bg-black text-[#F9C869] font-medium text-lg py-2 rounded-lg'>Submit</button>

                </form>

            </div>
        </>
    )
}

export default TakeReview