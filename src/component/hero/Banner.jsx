import React from 'react'
import heroBg from '../../assets/bg-shadow.png'
import BannerMain from '../../assets/banner-main.png'

export default function Banner() {
    return (
        <header className='rounded-2xl mt-5'>
            <div
                className="hero container mx-auto rounded-2xl bg-black bg-cover bg-center h-[545px]"
                style={{ backgroundImage: `url(${heroBg})` }} 
            >
                <div className="hero-overlay rounded-2xl py-16"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <img src={BannerMain} alt="Banner"  className=' text-center block mx-auto mb-5'/>
                        <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn bg-brand2">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </header>
    )
}


