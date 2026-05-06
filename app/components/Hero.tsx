export default function Hero() {
  return (
    <section className="text-center py-20 container">
      <h1 className="text-4xl md:text-6xl font-bold">
        Crafting Digital Excellence
      </h1>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        At Aivonix Labs, we build premium web, mobile and AI solutions.
      </p>

      <div className="mt-8 space-x-4">
        <button className="bg-white text-black px-6 py-3 rounded">
          Start Your Journey
        </button>
        <button className="border px-6 py-3 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
}