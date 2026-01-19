// 4. AgeCollections.jsx
const ageGroups = [
  { title: "0–6 Months", desc: "Newborn essentials", color: "from-pink-400 to-rose-500" },
  { title: "6–12 Months", desc: "Sitting & crawling", color: "from-purple-400 to-indigo-500" },
  { title: "1–2 Years", desc: "Toddler adventures", color: "from-blue-400 to-cyan-500" },
  { title: "2–5 Years", desc: "Active playtime", color: "from-teal-400 to-emerald-500" },
];

export default function AgeCollections() {
  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in">
          Find Products by Age & Stage
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {ageGroups.map((group, i) => (
            <div
              key={i}
              className={`card text-white bg-gradient-to-br ${group.color} hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="card-body items-center text-center py-10 md:py-14">
                <h3 className="card-title text-xl md:text-2xl font-black">{group.title}</h3>
                <p className="opacity-90 text-sm md:text-base">{group.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}