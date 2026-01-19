import Image from "next/image";

// 5. CustomerGallery.jsx


const galleryImages = [
  "https://i.ibb.co.com/fGSpPrsC/outdoor.jpg",
  "https://i.ibb.co.com/HfQGvXVK/baby-play.avif",
  "https://i.ibb.co.com/p6YQV149/family-photo.jpg",
  "https://i.ibb.co.com/sdFnj65g/gift-set.jpg",
  "https://i.ibb.co.com/gbpp5LjP/baby-smile.jpg",
  "https://i.ibb.co.com/1JL3kXmX/baby-family.avif",
];

export default function CustomerGallery() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold animate-fade-in">
            Loved by Real Hero Families
          </h2>
          <p className="text-base md:text-lg mt-3 opacity-80">
            Tag us with <strong>#HeroKidsBD</strong> to be featured!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Image
                fill
                src={src}
                alt="Happy customer moment"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}