// 1. ShopByCategory.jsx
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: "Newborn (0-3m)", slug: "newborn", image: "https://i.ibb.co.com/8gn4RY91/newborn.avif", color: "bg-pink-50" },
  { name: "Baby (3-12m)", slug: "baby", image: "https://i.ibb.co.com/PGYDKSJg/baby.avif", color: "bg-purple-50" },
  { name: "Toddler (1-3y)", slug: "toddler", image: "https://i.ibb.co.com/zVvmhTQD/toddler.avif", color: "bg-blue-50" },
  { name: "Kids (3-6y)", slug: "kids", image: "https://i.ibb.co.com/5xGwdWyc/kids.avif", color: "bg-green-50" },
  { name: "Toys & Play", slug: "toys", image: "https://i.ibb.co.com/Vc96nkh7/toys.jpg", color: "bg-yellow-50" },
  { name: "Feeding", slug: "feeding", image: "https://i.ibb.co.com/B5zT7RVH/feeding.avif", color: "bg-orange-50" },
  { name: "Diapering", slug: "diapering", image: "https://i.ibb.co.com/YT389PGF/diapering.webp", color: "bg-teal-50" },
  { name: "Clothing", slug: "clothing", image: "https://i.ibb.co.com/dJJjjW70/clothing.jpg", color: "bg-rose-50" },
];

export default function ShopByCategory() {
  return (
    <section className="py-12 md:py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-14 animate-fade-in">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`group relative rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${cat.color}`}
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-70" />
                
                <Image
                  src={cat.image}
                  alt={cat.name}
                    fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 p-4 z-20">
                  <h3 className="font-bold text-white text-base md:text-xl drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}