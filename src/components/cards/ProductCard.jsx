"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    rating = 4.5,
    reviews = 25,
    sold = 120,
  } = product;

  const discountedPrice = discount
    ? price - (price * discount) / 100
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {discount && (
          <span className="badge badge-error text-white absolute top-2 left-2">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Content */}
      <Link href={`/products/${title}`} className="card-body p-4 cursor-pointer">
        <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-400">
            ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          {sold}+ sold
        </p>

        {/* Add to Cart */}
        <div className="card-actions mt-3">
          <button className="btn btn-primary btn-sm w-full">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
