export default function HowToFindUs() {
  return (
    <section className="relative bg-[#f9f7f4] py-24 px-6 md:px-12">
      {/* Full-width Google Map */}
      <div className="absolute inset-0">
        <iframe
          title="Wheldrakes Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.603951880767!2d-1.0799383841620833!3d53.96182357971413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487931a5f1d65a43%3A0xc2fdc2a514fe6b9c!2sWheldrakes%2C%205C%20Goodramgate%2C%20York%20YO1%207LJ!5e0!3m2!1sen!2suk!4v1718521040000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Overlay tint for readability */}
        <div className="absolute inset-0 bg-[#f9f7f4]/70 backdrop-blur-sm" />
      </div>

      {/* Text on top of map */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-[#4b2e2e]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Find Us</h2>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
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
    </section>
  );
}