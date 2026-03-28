import React from 'react'
import Logo from '../../assets/logo.png'
import Coin from '../../assets/dollar 1.png'

export default function Navbar() {
    return (
        <nav className='w-full'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-12 text-brand-70">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <div className='flex gap-1 items-center btn'><p className=''>0 Coin</p> <img src={Coin} alt="Coin" className='w-6 h-6' /></div>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
