import React from 'react'

const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-slate-100'>

            <form className='bg-white rounded-lg p-10 card-shadow flex flex-col gap-3' action="">

                <p className='text-lg font-medium'>Admin | Login</p>

                <input type="email" className='w-full outline outline-[1.5px] outline-slate-300 focus:outline-slate-500 duration-300 rounded-lg py-2 px-4' placeholder='Enter Admin Email' />

                <input type="password" className='w-full outline outline-[1.5px] outline-slate-300 focus:outline-slate-500 duration-300 rounded-lg py-2 px-4' placeholder='Enter Admin Password' />

                <button type='submit' className='bg-black text-white w-full text-center py-2 rounded-lg'>
                    Login
                </button>

            </form>

        </div>
    )
}

export default Login