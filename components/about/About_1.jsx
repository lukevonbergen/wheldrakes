export default function AboutUs() {
  return (
    <section className="bg-[#f9f7f4] py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#4b2e2e]">
          A Local Favourite, Baked Fresh Daily
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Tucked away in the heart of York, Wheldrakes is a warm and welcoming café built on simple things done exceptionally well — fresh food, quality coffee, and a team that truly cares. Whether you're joining us for breakfast, lunch, or just a slice of cake, you're always in good hands.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-12">
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-xl font-semibold text-[#4b2e2e] mb-2">Independent & Family-Run</h3>
            <p className="text-gray-600">
              We’re a small, family-led team with a passion for hospitality. Every plate and every coffee reflects our care and commitment to doing things right.
            </p>
          </div>
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-xl font-semibold text-[#4b2e2e] mb-2">From Brunch to Cake</h3>
            <p className="text-gray-600">
              From fluffy pancakes to freshly baked scones and rich flat whites — our menu is curated with quality and comfort in mind, served all day long.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}