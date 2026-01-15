import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image src="/assets/logo.png" alt="Hero Kids Logo" width={50} height={30} />
            <h2 className="text-xl font-bold">HERO<span className='text-primary'>KIDS</span></h2>
        </div>
    );
};

export default Logo;