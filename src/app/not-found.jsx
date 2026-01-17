import Link from 'next/link';
import React from 'react';
import { MdReportGmailerrorred } from "react-icons/md";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <MdReportGmailerrorred size={100} className="text-red-500 mb-4 animate-bounce" />
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-6xl text-gray-600 mb-6">Page Not Found</p>
            <Link href="/" className="btn btn-primary">Go back home</Link>
        </div>
    );
};

export default NotFound;