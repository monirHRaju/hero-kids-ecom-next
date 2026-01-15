import Image from 'next/image';
import React from 'react';
import {fontBangla} from '@/app/layout'
const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=' flex-1 space-y-8'>
                <h1 className={`${fontBangla.className} text-6xl font-bold leading-20`}>আপনার শিশুকে দিন <br /> <span className='text-primary'>একটি সুন্দর ভবিষ্যৎ</span></h1>
                <p className='text-2xl font-semibold'>Get Every Product Upto 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Buy Now</button>
            </div>
            <div className='flex-1'>
                <Image alt='Hero image' width={500} height={400} src={'/assets/hero.png'}/>
            </div>
        </div>
    );
};

export default Banner;