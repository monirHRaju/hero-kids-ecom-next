import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {[...Array(9)].map((_, index) => (
        <ProductCardSkeleton key={index}></ProductCardSkeleton>
      ))}
    </div>
  );
};

export default loading;
