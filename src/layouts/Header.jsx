import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)

    const [scrolling, setScrolling] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)

    const routes = [
        { name: 'Home', path: '#home' },
        { name: 'Sales', path: '#sales' },
        { name: 'Services', path: '#services' },
        { name: 'Contact Us', path: '#contact' }
    ]

    useEffect(() => {

        let timeout;

        const handleScroll = () => {

            const currentPosition = window.scrollY

            if (currentPosition > scrollPosition || currentPosition < scrollPosition || currentPosition < 1) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }

            clearTimeout(timeout)

            timeout = setTimeout(() => {
                setScrolling(false)
            }, 4000);

        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timeout)
        }

    }, [])

    return (
        <>
            <header className={scrolling?'flex justify-between fixed w-screen z-10 top-0 items-center px-5 md:px-10 lg:px-20 py-5 bg-white duration-500':'flex justify-between fixed w-screen z-10 top-0 items-center px-5 md:px-10 lg:px-20 py-5 bg-white -translate-y-32 duration-500'}>

                <div className='flex gap-4 items-center'>
                    <img src={Logo} alt="logo" className='w-14 md:w-16' />
                    <p className='text-sm md:text-xl font-medium'>
                        Techtester<br />
                        Infotech
                    </p>
                </div>

                <menu className='bg-black hidden lg:flex gap-3 rounded-full px-1 py-1'>

                    {
                        routes.map((route, index) => {
                            return (
                                <a className={location.hash === route.path ? 'text-lg bg-[#F9C869] text-black px-8 py-1 rounded-full font-medium transition-all duration-300' : 'text-lg text-[#F9C869] px-8 py-1 font-medium transition-all duration-300'} href={route.path} key={index}>{route.name}</a>
                            )
                        })
                    }

                </menu>

                <menu onClick={() => {
                    setIsOpen(!isOpen)
                }} className='flex flex-col items-center justify-center lg:hidden gap-1 bg-black aspect-square p-4 rounded-full'>

                    <div className={isOpen ? 'border-2 rounded-full border-yellow-400 w-6 translate-y-[4px] rotate-45 duration-500' : 'border-2 rounded-full border-yellow-400 w-6 duration-500'} />
                    <div className={isOpen ? 'hidden' : 'border-2 rounded-full border-yellow-400 w-6'} />
                    <div className={isOpen ? '-translate-y-[4px] -rotate-45 border-2 rounded-full border-yellow-400 w-6 duration-500' : 'border-2 rounded-full border-yellow-400 w-6 duration-500'} />

                </menu>

            </header>

            <nav className={isOpen ? 'bg-black flex flex-col gap-5 overflow-hidden lg:hidden fixed w-screen z-10 top-24 p-5 duration-500' : 'h-0 flex flex-col overflow-hidden duration-500 p-0'}>

                {
                    routes.map((route, index) => {
                        return (
                            <a onClick={() => setIsOpen(!isOpen)} className={location.hash === route.path ? 'text-lg bg-[#F9C869] text-black px-8 py-1 rounded-lg font-medium transition-all duration-300' : 'text-lg text-[#F9C869] px-8 py-1 font-medium transition-all duration-300'} href={route.path} key={index}>{route.name}</a>
                        )
                    })
                }

            </nav>
        </>
    )
}

export default Header