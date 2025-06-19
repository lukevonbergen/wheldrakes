import Reviews from '@/components/testimonials/Testimonials_1'

export const metadata = {
  title: "About | Wheldrakes",
  description:
    "Learn more about Wheldrakes Café in York – our story, our passion for fresh food and coffee, and the people behind the scenes.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#f9f7f4] py-24 px-6 md:px-12 text-gray-800">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b2e2e] mb-6">Our Story</h1>
        <p className="text-lg text-gray-700">
          Nestled in the heart of York, Wheldrakes is an independent, family-run café dedicated to quality, comfort, and community. 
          Whether you're after the perfect flat white, a warm scone fresh from the oven, or a place to slow down — 
          we're here to serve it, and serve it well.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">Made Daily, Served with Care</h2>
          <p className="text-gray-700 leading-relaxed">
            Every dish at Wheldrakes is made from scratch using locally sourced ingredients wherever possible. 
            We believe in doing things the right way — slow-roasted coffee, handmade cakes, and a brunch menu 
            that changes with the seasons.
          </p>
        </div>

        {/* Family/Local focus */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">Rooted in York</h2>
          <p className="text-gray-700 leading-relaxed">
            Wheldrakes has been a part of the Goodramgate community for years. We're proud to be part of York’s 
            independent food scene — a place where locals, students, and tourists alike can feel at home. 
            Whether you’re here every weekend or visiting for the first time, our door’s always open.
          </p>
        </div>

        {/* Commitment */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">Sustainable & Simple</h2>
          <p className="text-gray-700 leading-relaxed">
            We keep things simple: no fuss, no fluff. Just proper coffee, honest food, and friendly service. 
            Sustainability matters to us too — we aim to reduce waste, support local suppliers, and keep our 
            footprint low while keeping quality high.
          </p>
        </div>

        {/* Invitation */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">Pop In Sometime</h2>
          <p className="text-gray-700 leading-relaxed">
            We’re here seven days a week with fresh bakes, warm smiles, and plenty of seating inside and out. 
            Whether it’s your morning ritual or a weekend catch-up, we can’t wait to welcome you.
          </p>
        </div>
      </div>
      <Reviews />
    </main>
  );
}
