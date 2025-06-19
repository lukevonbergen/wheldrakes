export default function HowToFindUs() {
  return (
    <section className="bg-[#f9f7f4] py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left text-[#4b2e2e]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            How to Find Us
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We’re located just a stone’s throw from York Minster — perfect for breakfast, coffee, or cake after a wander through the Shambles.
          </p>
          <p className="text-md text-gray-700 leading-relaxed">
            <strong>Address:</strong><br />
            5C Goodramgate<br />
            York YO1 7LJ, United Kingdom
            <br /><br />
            <strong>Opening Hours:</strong><br />
            Thursday–Monday: 8:30 AM – 3:30 PM<br />
            Tuesday & Wednesday: Closed
          </p>
        </div>

        {/* Map */}
        <div className="md:w-1/2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md border">
          <iframe
            title="Wheldrakes Location"
            src="https://www.google.com/maps/embed/v1/place?q=5C+Goodramgate+York+YO1+7LJ,+United+Kingdom&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}