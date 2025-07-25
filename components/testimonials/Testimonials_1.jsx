export default function Testimonials() {
  return (
    <section className="bg-[#f9f7f4] py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">What People Are Saying</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Real words from happy guests who’ve visited Wheldrakes.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              quote:
                "Absolutely beautiful brunch and the best coffee in York. The homemade cakes are divine and the staff couldn’t be friendlier.",
              name: "Emma S.",
              title: "Google Review",
            },
            {
              quote:
                "Cosy atmosphere with quality food. The eggs benedict was spot on — perfectly poached and full of flavour.",
              name: "Tom H.",
              title: "Google Review",
            },
            {
              quote:
                "Such a gem! Great menu, lovely service, and the scones were hands down the best I’ve had in ages.",
              name: "Charlotte R.",
              title: "Google Review",
            },
          ].map(({ quote, name, title }, i) => (
            <div key={i} className="p-6 bg-white rounded-lg border shadow-sm">
              <p className="text-gray-700 italic mb-4">“{quote}”</p>
              <div className="text-sm font-medium text-gray-900">{name}</div>
              <div className="text-xs text-gray-500">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
