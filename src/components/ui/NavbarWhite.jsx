'use client'
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export const NavbarWhite = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isOpen, setIsOpen] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const containerMenu = useRef(null)

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)

    }
    const closeOpenMenus = (e) => {
        if (containerMenu.current && isMenuOpen && !containerMenu.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
    }

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', closeOpenMenus)

        return () => {
            document.removeEventListener('mousedown', closeOpenMenus)
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav className="max-w-[1920px] fixed z-50 top-0 flex flex-col w-full">
            <div className={`relative flex bg-slate-100 w-full ${isOpen ? 'py-1 lg:py-2' : 'py-0'} transition-all ease-in duration-300`} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.05) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -3px 12px inset' }}>
                <div className="flex grow items-center text-blue-900 pl-8 sm:pl-36 justify-between">
                    <div className={`bg-blue-950 w-full sm:w-96 lg:w-[480px] h-full absolute top-0 rounded-r-md left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all ease-in duration-300`} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.05) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -3px 2px inset' }} />
                    {
                        isOpen ? <h1 className="font-bold tracking-[0.1em] text-[10px] sm:text-sm xl:text-base ml-0 sm:-ml-16 lg:ml-0 drop-shadow-sm text-slate-300 transition-all duration-1000">UNIVERSIDAD ARTURO MICHELENA</h1> : <h1 className="font-extrabold text-sm sm:text-lg tracking-[0.05em] pl-0 lg:pl-12 drop-shadow-sm text-blue-900 transition-all duration-[1.5s]">UAM</h1>
                    }

                    <ul className="md:order-10 hidden lg:flex items-center text-sm font-regular pr-12 font-semibold">
                        <li className="hover:underline underline-offset-4 decoration-1 decoration-blue-900 py-1 rounded-lg px-5"><Link
                            href="/">Inicio</Link></li>
                        <li className="hover:underline underline-offset-4 decoration-1 decoration-blue-900 py-1 rounded-lg px-5"><Link
                            href="/#social" scroll={true}>Vínculo con la Sociedad</Link></li>
                    </ul>
                    <div className="text-gray-800 text-center text-lg pr-0 sm:pr-5 hidden lg:inline-flex md:order-9 lg:pl-60"> </div>
                    <button className="block p-3 mx-10 lg:hidden hover:bg-gray-300 rounded-xl z-50" onClick={handleMenu}>
                        <div className="w-5 my-[3px] h-[3px] bg-zinc-200 sm:bg-blue-900 mb-[2px]"></div>
                        <div className="w-5 my-[3px] h-[3px] bg-zinc-200 sm:bg-blue-900 mb-[2px]"></div>
                        <div className="w-5 my-[3px] h-[3px] bg-zinc-200 sm:bg-blue-900"></div>
                    </button>
                </div>
                <div ref={containerMenu}
                    className={`absolute top-0 ${isMenuOpen ? 'right-0 opacity-100' : '-right-full opacity-0'}  h-screen w-[60%] border bg-zinc-200 transition-all ease-in duration-300 z-50`}>
                    <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg absolute right-7 top-4" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                    <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/">Inicio</Link>
                        </li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/uam">UAM</Link></li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/autoridades">Autoridades</Link></li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/pregrado">Pregrado</Link></li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/postgrado">Postgrado</Link>
                        </li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/noticias">Noticias</Link>
                        </li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/eventos">Eventos</Link>
                        </li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <Link href="/investigacion">Investigación</Link>
                        </li>
                        <li className="hover:bg-gray-200 hover:border border-white py-4 px-6 w-full">
                            <a href="https://uam.terna.net/" target="_blank" rel="noopener noreferrer">TernaNet</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`clip-navbar-submenu hidden lg:block shadow-inner w-1/2 bg-slate-200 hover:bg-slate-800 group self-end py-1 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-translate ease-in-out duration-500`}>
                <ul className="flex items-center justify-evenly p-2 text-[12px] text-slate-900 group-hover:text-slate-100 [&>li:hover]:scale-105 [&>li:hover]:transition-transform [&>li:hover]:ease-in-out [&>li:hover]:duration-1000">
                    <li>
                        <Link href="/noticias">Noticias</Link>
                    </li>
                    <li>
                        <Link href="/autoridades">Autoridades</Link>
                    </li>
                    <li>
                        <Link href="/pregrado">Pregrado</Link>
                    </li>
                    <li>
                        <Link href="/postgrado">Postgrado</Link>
                    </li>
                    <li>
                        <a href="https://uam.terna.net/" target="_blank" rel="noopener noreferrer">TernaNet</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


