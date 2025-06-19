import Image from 'next/image';
import FindUs from '@/components/findus/FindUs_1';

export const metadata = {
  title: 'Contact Us | Wheldrakes York',
  description: 'Find our café, contact us via phone or email, and see where we are in York.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Intro Section */}
      <section className="bg-[#f9f7f4] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e2e] mb-6">We’d Love to Hear from You</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you’re booking a table, asking about allergens, or just saying hello — we’re always here.
          </p>
        </div>
      </section>

      {/* Contact Info with Image */}
      <section className="py-16 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4b2e2e] mb-6">Contact Details</h2>
            <p className="text-md text-gray-700 mb-4">
              <strong>Address:</strong><br />
              5C Goodramgate, York YO1 7LJ, United Kingdom
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Phone:</strong><br />
              <a href="tel:+447940210670" className="text-[#4b2e2e] hover:underline">07940 210670</a>
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Email:</strong><br />
              <a href="mailto:hello@wheldrakes.co.uk" className="text-[#4b2e2e] hover:underline">hello@wheldrakes.co.uk</a>
            </p>
            <p className="text-md text-gray-700">
              <strong>Opening Hours:</strong><br />
              Mon: 8:30 am – 3:30 pm<br />
              Tue–Wed: Closed<br />
              Thu–Sun: 8:30 am – 3:30 pm
            </p>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              alt="Friendly café interior"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>
      <FindUs />
    </main>
  );
}