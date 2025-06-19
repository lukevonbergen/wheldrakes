import Image from 'next/image';
import { Coffee, Users, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-[#f9f7f4] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b2e2e] leading-tight mb-6">
            The best breakfast, coffee, and cakes in the heart of York
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Handcrafted daily by our family-run team — Wheldrakes is your cosy spot for brunch, scones, and a proper cup of coffee.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <a
              href="/menu"
              className="bg-[#4b2e2e] text-white px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition"
            >
              See Our Menu
            </a>
            <a
              href="/gallery"
              className="border border-[#4b2e2e] text-[#4b2e2e] px-6 py-3 rounded-full font-medium hover:bg-[#4b2e2e]/10 transition"
            >
              View Gallery
            </a>
          </div>

          {/* Icons for values */}
          <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[#4b2e2e]" />
              <span>Artisan Coffee</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#4b2e2e]" />
              <span>Family-Run</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#4b2e2e]" />
              <span>Locally Loved</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:w-1/2">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
              alt="Flat white from Wheldrakes"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white text-xs px-4 py-1 rounded-full shadow border font-semibold text-gray-600 tracking-wide">
              Fresh Daily Bakes • York
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}