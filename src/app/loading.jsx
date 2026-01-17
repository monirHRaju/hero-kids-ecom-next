import Link from 'next/link';
import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <AiOutlineLoading3Quarters size={100} className="text-red-500 mb-4 animate-spin" />
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Loading...</h1>
            <p className="text-6xl text-gray-600 mb-6">Please wait for a while.</p>
        </div>
    );
};

export default loading;