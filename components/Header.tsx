import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import Wallet from './Wallet';

const Header = () => {

    const router = useRouter()
    const currentRoute = router.pathname

    const [collapse, setCollapse] = useState(false);

    const toggle = () => {
        setCollapse(!collapse)
    }

    return (
        <header className="h-24 flex items-center z-30 w-full bg-gradient-to-br from-red-500 to-purple-400">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">

                    <nav className="font-poppins text-gray-800 dark:text-white uppercase text-lg lg:flex md:flex items-center hidden">

                        <Link href="/"><a className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${currentRoute === '/' ? 'bg-gray-900' : ''}`}>Home</a></Link>{' '}{' '}

                        <Link href="/marketplace"><a className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${currentRoute === '/marketplace' ? 'bg-gray-900' : ''}`}>Marketplace</a></Link>{' '}{' '}

                        <Link href="/about"><a className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${currentRoute === '/index' ? 'bg-gray-900' : ''}`}>Profile</a></Link>{' '}{' '}

                    </nav>

                    <button onClick={toggle} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden lg:hidden" aria-controls="mobile-menu" aria-expanded="false">

                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <div className="sm:hidden" id="mobile-menu">
                            <div className={collapse ? "sm:flex sm:pt-0 w-full sm:w-auto px-2 pt-2 pb-3 space-y-1" : "hidden sm:flex"}>

                                <Link href="/"><a className="font-medium text-gray-300 hover:text-gray-900">Home</a></Link>{' '}{' '}

                                <Link href="/marketplace"><a className="font-medium text-gray-300 hover:text-gray-900">marketplace</a></Link>{' '}{' '}

                                <Link href="/index"><a className="font-medium text-gray-300 hover:text-gray-900">Profile</a></Link>{' '}{' '}

                            </div>
                        </div>
                    </button>
                </div>
                <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
                    <span className="text-xs ml-3 mt-1">
                        <Wallet />
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;