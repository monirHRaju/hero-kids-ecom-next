
import React from 'react';
// import allProducts from "@/data/products.json";
// import { getProducts } from "@/actions/server/product";
import ProductCard from '../cards/ProductCard';
import Link from 'next/link';



const Products = async() => {
    const products = await fetch("http://localhost:5000/new-products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());

    return (    
        <div className='py-16 md:py-24 bg-gradient-to-b from-base-100 to-base-200'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-2xl md:text-4xl font-bold animate-fade-in">New Arrivals</h2>
                <p className="text-base md:text-lg text-neutral mt-2">Fresh goodies for your little hero</p>
              </div>
              <Link href="/products" className="btn btn-outline btn-primary btn-sm md:btn-md">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;