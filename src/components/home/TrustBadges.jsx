// 3. TrustBadges.jsx
const trustItems = [
  { icon: "🛡️", title: "100% Safe", desc: "Certified & Tested" },
  { icon: "🚚", title: "Fast Delivery", desc: "1-2 days in Dhaka" },
  { icon: "↩️", title: "Easy Returns", desc: "7 Days Hassle-Free" },
  { icon: "💬", title: "Parent Support", desc: "Real Help 10am-8pm" },
];

export default function TrustBadges() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16 animate-fade-in">
          Why Parents Trust Hero Kids
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="text-center transform transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-base md:text-xl mb-2">{item.title}</h3>
              <p className="text-neutral text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}