import React from 'react'

const Home = () => {
    return (
        <main className='bg-slate-100 w-full h-full p-10'>

            <div className='text-2xl font-bold text-slate-900'>
                Welcome to Techtester Admin Panel
            </div>

            <div className='grid grid-cols-4 mt-10'>

                <div className='bg-white w-full p-5 card-shadow rounded-lg flex flex-col gap-5'>

                    <div className='text-lg'>
                        Total visits
                    </div>

                    <div className='text-3xl font-bold'>
                        9999
                    </div>

                </div>

            </div>

            <div className='flex flex-col gap-5 p-5 bg-white mt-10 card-shadow rounded-lg'>

                <p className='text-xl font-bold'>Recent Query</p>

                <div className="flex flex-col gap-5">

                    {
                        Array(5).fill().map((_, i) => (
                            <div key={i} className='flex gap-5'>

                                <p className='text-sm font-bold'>{i + 1}</p>

                                <div className='w-[15%]'>
                                    <p className='text-sm font-bold'>Name</p>
                                    <p className='text-lg'>John Doe</p>
                                </div>

                                <div className='w-[15%]'>
                                    <p className='text-sm font-bold'>Email</p>
                                    <p className='text-lg'>test@mail.com </p>
                                </div>

                                <div className='w-[15%]'>
                                    <p className='text-sm font-bold'>Contact</p>
                                    <p className='text-lg'>+91 9999999999</p>
                                </div>

                                <div className='w-full'>
                                    <p className='text-sm font-bold'>Query</p>
                                    <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat dolore debitis eos suscipit sunt tenetur id laudantium repellat minus molestias, autem quae facere ullam similique sequi exercitationem ad voluptatem.</p>
                                </div>

                            </div>
                        ))
                    }



                </div>

            </div>

        </main>
    )
}

export default Home