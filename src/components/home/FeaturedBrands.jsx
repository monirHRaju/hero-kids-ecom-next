import Image from "next/image";

// FeaturedBrands.jsx
const brands = [
  { name: "Mothercare", logo: "https://i.ibb.co.com/H1YQVJy/mothercare-logo.jpg", slug: "mothercare" },
  { name: "Farlin", logo: "https://i.ibb.co.com/WvMFSqWM/farlin.png", slug: "farlin" },
  { name: "Chicco", logo: "https://i.ibb.co.com/jv5MZWqV/chicco.jpg", slug: "chicco" },
  { name: "Philips Avent", logo: "https://i.ibb.co.com/r2ZZ1c6V/philips-avent.jpg", slug: "philips-avent" },
  { name: "Munchkin", logo: "https://i.ibb.co.com/6hVxYg1/munchkin.jpg", slug: "munchkin" },
  { name: "Pigeon", logo: "https://i.ibb.co.com/SwBWScxy/pigeon.png", slug: "pigeon" },
  { name: "R for Rabbit", logo: "https://i.ibb.co.com/QFr4sjqx/r-for-rabbit.jpg", slug: "r-for-rabbit" },
  { name: "LuvLap", logo: "https://i.ibb.co.com/zWcHR5VX/luvlap.png", slug: "luvlap" },
];




export default function FeaturedBrands() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in">
          Trusted Brands We Love
        </h2>
        
        <p className="text-center text-base md:text-lg text-neutral mb-10 md:mb-14 max-w-3xl mx-auto">
          We carefully select products only from brands with proven safety records and thousands of happy parents
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
          {brands.map((brand, i) => (
            <a
              key={brand.slug}
              href={`/brand/${brand.slug}`}
              className="group flex flex-col items-center p-4 md:p-6 rounded-xl hover:bg-base-200 transition-all duration-300 hover:shadow-md animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-3 md:mb-4">
                <Image
                fill
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-center text-neutral group-hover:text-primary transition-colors">
                {brand.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}