export default function ContactSection() {
  return (
    <section className="container py-20 text-center">
      <h2 className="text-3xl font-bold">
        Let’s Build Something Extraordinary
      </h2>

      <p className="mt-4 text-gray-400">
        info.aivonixlabs@gmail.com | +923187564697
      </p>

      <form className="mt-8 grid md:grid-cols-2 gap-4">
        <input placeholder="First Name" className="p-3 bg-black border" />
        <input placeholder="Last Name" className="p-3 bg-black border" />
        <input placeholder="Email" className="p-3 bg-black border col-span-2" />
        <input placeholder="Subject" className="p-3 bg-black border col-span-2" />
        <textarea placeholder="Message" className="p-3 bg-black border col-span-2"></textarea>

        <button className="bg-white text-black py-3 col-span-2">
          Send Message
        </button>
      </form>
    </section>
  );
}