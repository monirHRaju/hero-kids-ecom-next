
import React from 'react';
// import allProducts from "@/data/products.json";
// import { getProducts } from "@/actions/server/product";
import ProductCard from '../cards/ProductCard';



const Products = async() => {
    const products = await fetch("http://localhost:5000/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());

    return (    
        <div>
            <h1 className="text-2xl font-bold mb-4">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;