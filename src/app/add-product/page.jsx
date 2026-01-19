// app/add-product/page.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProductPage() {
  const [previewImage, setPreviewImage] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      bangla: "",
      image: "",
      price: "",
      discount: 0,
      description: "",
      reviews: 0,
      sold: 0,
      ratings: 4.5,
    },
  });

  const imageUrl = watch("image");

  // Auto-preview image when URL changes
  useState(() => {
    if (imageUrl) {
      setPreviewImage(imageUrl);
    }
  }, [imageUrl]);

  const onSubmit = (data) => {
    // Here you would normally send data to your backend API
    console.log("Product Data:", data);
    
    // Example API call (uncomment when you have backend)
    // fetch('/api/products', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // }).then(res => res.json()).then(result => {
    //   alert("Product added successfully!");
    // })

    alert("Product added! (Check console for data)");
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Add New Product</h1>
        <p className="text-neutral mb-10">Fill in the details for the new baby/kids product</p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-8">
          {/* LEFT COLUMN - Main Info */}
          <div className="space-y-6">
            <div>
              <label className="label">
                <span className="label-text font-medium">Product Title (English)</span>
              </label>
              <input
                type="text"
                placeholder="Number and Counting Learning Board"
                className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
                {...register("title", { required: "Product title is required" })}
              />
              {errors.title && <p className="text-error text-sm mt-1">{errors.title.message}</p>}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">বাংলা নাম</span>
              </label>
              <input
                type="text"
                placeholder="সংখ্যা ও গণনা শেখার শিক্ষামূলক বোর্ড"
                className="input input-bordered w-full"
                {...register("bangla")}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Product Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://i.ibb.co/.../product.jpg"
                className={`input input-bordered w-full ${errors.image ? "input-error" : ""}`}
                {...register("image", { required: "Image URL is required" })}
              />
              {errors.image && <p className="text-error text-sm mt-1">{errors.image.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Price (৳)</span>
                </label>
                <input
                  type="number"
                  placeholder="1250"
                  className="input input-bordered w-full"
                  {...register("price", { required: true, min: 1 })}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Discount (%)</span>
                </label>
                <input
                  type="number"
                  placeholder="10"
                  min="0"
                  max="90"
                  className="input input-bordered w-full"
                  {...register("discount")}
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Short Description</span>
              </label>
              <textarea
                rows={4}
                placeholder="Number and Counting Learning Board টি শিশুদের প্রাথমিক গণিত শেখার জন্য..."
                className="textarea textarea-bordered w-full"
                {...register("description", { required: "Description is required" })}
              />
              {errors.description && (
                <p className="text-error text-sm mt-1">{errors.description.message}</p>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Preview + Extra Info */}
          <div className="space-y-6">
            {/* Image Preview */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Product Preview</h2>
                
                {previewImage ? (
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-base-300">
                    <Image
                      src={previewImage}
                      alt="Product preview"
                      className="object-cover w-full h-full"
                      onError={() => setPreviewImage(null)}
                    />
                  </div>
                ) : (
                  <div className="aspect-square w-full bg-base-200 rounded-xl flex items-center justify-center text-neutral">
                    <span>Image preview will appear here</span>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Initial Reviews</span>
                </label>
                <input
                  type="number"
                  defaultValue={0}
                  min={0}
                  className="input input-bordered w-full"
                  {...register("reviews")}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Initial Sold</span>
                </label>
                <input
                  type="number"
                  defaultValue={0}
                  min={0}
                  className="input input-bordered w-full"
                  {...register("sold")}
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Initial Rating</span>
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                defaultValue={4.5}
                className="input input-bordered w-full"
                {...register("ratings")}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button type="submit" className="btn btn-primary w-full text-lg">
                Add Product to Store
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}