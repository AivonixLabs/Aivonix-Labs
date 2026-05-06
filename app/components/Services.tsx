export default function Services() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Premium Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {["Web Development", "Mobile Apps", "Consulting", "AI Integration"].map((s) => (
          <div key={s} className="p-6 border border-gray-800 rounded-xl">
            <h3 className="font-semibold">{s}</h3>
            <p className="text-gray-400 mt-2 text-sm">
              High quality scalable solutions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}