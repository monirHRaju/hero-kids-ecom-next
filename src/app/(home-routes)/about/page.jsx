// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Baby, Heart, ShieldCheck, Smile } from 'lucide-react';

export const metadata = {
  title: 'About Us - Hero Kids | Baby & Kids Products',
  description: 'Discover the story behind Hero Kids — your trusted online store for safe, high-quality baby and kids products in Bangladesh.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/9m8Zgz21/image.png')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-3">
                <div className="text-5xl md:text-6xl">🦸‍♂️</div>
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Hero Kids
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8">
              Making parenting a little easier, safer and more joyful
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600" size={28} />
                <span>100% Safety First</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-pink-600" size={28} />
                <span>Love in Every Product</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  A small dream that grew big
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Hero Kids was born in 2024 in Dhaka when two parents (just like you) got tired of running around the city looking for safe, good quality baby products at reasonable prices.
                  </p>
                  <p>
                    We decided to create a place where every parent in Bangladesh can find everything their little hero needs — from the first onesie to the toddler adventure gear — all in one trusted place.
                  </p>
                  <p className="font-medium text-xl text-pink-700">
                    Today we proudly serve thousands of families across the country.
                  </p>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.ibb.co.com/9m8Zgz21/image.png"
                  alt="Happy family with baby"
                  width={600}
                  height={600}
                  className="object-cover w-full aspect-square"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Safety First",
                desc: "Every product is carefully chosen with highest safety standards",
              },
              {
                icon: Heart,
                title: "Real Care",
                desc: "We choose products we would use for our own children",
              },
              {
                icon: Smile,
                title: "Affordable Joy",
                desc: "Best quality doesn't have to be the most expensive",
              },
              {
                icon: Baby,
                title: "Parent-Friendly",
                desc: "Fast delivery • Easy returns • Real customer support",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-pink-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to make your little hero happy?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of parents who trust Hero Kids for their baby's daily needs
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:brightness-105 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Baby size={28} />
            Start Shopping Now
          </Link>
        </div>
      </section>
    </main>
  );
}