import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


const Header = () => {

    const router = useRouter()
    const currentRoute = router.pathname

    const [collapse, setCollapse] = useState(false);

    const toggle = () => {
        setCollapse(!collapse)
    }

    return (
        <header>
            <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative flex items-center justify-between h-16 font-poppins">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex sm:hidden">

                            <button onClick={toggle} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">

                                    <Link href="/"><a className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${currentRoute === '/' ? 'bg-gray-900' : ''}`}>Home</a></Link>{' '}{' '}

                                    <Link href="/marketplace"><a className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${currentRoute === '/marketplace' ? 'bg-gray-900' : ''}`}>Marketplace</a></Link>{' '}{' '}

                                    <Link href="/about"><a className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${currentRoute === '/index' ? 'bg-gray-900' : ''}`}>Profile</a></Link>{' '}{' '}

                                    <Link href="/api/users"><a className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${currentRoute === '//api/users' ? 'bg-gray-900' : ''}`}>Settings</a></Link>{' '}{' '}

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className={collapse ? "sm:flex sm:pt-0 w-full sm:w-auto px-2 pt-2 pb-3 space-y-1" : "hidden sm:flex"}>

                        <Link href="/"><a className="font-medium text-gray-300 hover:text-gray-900">Home</a></Link>{' '}{' '}

                        <Link href="/marketplace"><a className="font-medium text-gray-300 hover:text-gray-900">marketplace</a></Link>{' '}{' '}

                        <Link href="/index"><a className="font-medium text-gray-300 hover:text-gray-900">Profile</a></Link>{' '}{' '}

                        <Link href="/api/users"><a className="font-medium text-gray-300 hover:text-gray-900">Settings</a></Link>{' '}{' '}
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;