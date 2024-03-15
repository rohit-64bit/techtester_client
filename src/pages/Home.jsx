import React from 'react'
import HeroImg from '../assets/hero_img.svg'
import PcParts from '../assets/subHero/pcparts.png'
import NetEuip from '../assets/subHero/nequip.png'
import Cctv from '../assets/subHero/cctv.png'
import Arrow from '../assets/arrow.svg'
import EastIcon from '@mui/icons-material/East';

const Home = () => {

    const subHeroData = [
        {
            img: PcParts,
            title: 'High Quality PC Parts',
            description: 'We provide high quality PC parts for your desktop and laptop. We also provide repair services for your desktop and laptop.'
        },
        {
            img: NetEuip,
            title: 'Network Equipments',
            description: 'We provide network and router configuration services. We also provide network maintenance services.'
        },
        {
            img: Cctv,
            title: 'High Definition CCTV Cameras',
            description: 'We provide maintenance services for both IP and normal cameras. We also provide installation services for new cameras.'
        }
    ]

    return (
        <>
            <main className=''>

                {/* Heroes Section */}
                <section className='flex items-center justify-center h-screen px-20'>

                    <div className='w-1/2 flex flex-col gap-10'>
                        <h1 className='text-6xl font-medium'>Techtester Infotech</h1>
                        <p>
                            Welcome to <strong>Techtester Infotech</strong>, your IT heroes! We specialize in CCTV maintanece ( IP & normal cameras ),network and router configuration, desktop and laptop repairs, printer servicing, and server maintainance. We are a team of dedicated professionals who are always ready to help you with your IT needs. We are available 24/7, so you can reach out to us anytime. We are here to help you with all your IT needs.
                        </p>
                        <a className='bg-black w-max text-[#F9C869] rounded-xl font-medium px-12 py-2' href='#home'>Contact Us</a>
                    </div>

                    <div className='w-1/2 flex items-baseline justify-end'>

                        <img src={HeroImg} className='w-[80%] mt-32' alt="" />

                    </div>

                </section>

                {/* Sales Section */}
                <section className='h-screen bg-black px-20 py-10 flex flex-col gap-10'>

                    <h2 className='text-2xl text-[#F9C869] font-medium'>What we sell ?</h2>

                    <div className='grid grid-cols-3 h-full w-full gap-10'>

                        {
                            subHeroData.map((data, index) => {
                                return (
                                    <div key={index} className='w-full h-full flex flex-col justify-around p-5 bg-black custom-shadow rounded-xl'>
                                        <img src={data.img} className='w-full object-contain' />
                                        <h2 className='text-2xl text-[#F9C869] font-medium'>{data.title}</h2>
                                        <p className='text-white'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates facilis alias adipisci temporibus laboriosam sed excepturi sunt explicabo animi repudiandae mollitia officiis, facere sit sapiente? Odit, ipsa fuga. Necessitatibus!
                                        </p>
                                        <a href="#contact" className='w-max flex items-center justify-around gap-2 px-10 py-2 rounded-lg outline outline-2 outline-[#F9C869] text-[#F9C869] hover:text-black hover:outline-black hover:bg-[#F9C869] transition-all ease-in-out duration-300'>

                                            <div className='text-xl font-medium w-max'>Contact Us</div>

                                            <EastIcon />

                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>

                </section>

            </main>
        </>
    )
}

export default Home