import Gallery from "@/components/gallery/Gallery_1";
import Location from '@/components/findus/FindUs_1'

export const metadata = {
  title: "Gallery | Wheldrakes",
  description: "Browse our cosy café, brunch plates, cakes and more from Wheldrakes in York.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="py-24 px-6 md:px-12 text-center bg-[#f9f7f4] border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4b2e2e]">Our Gallery</h1>
          <p className="text-lg text-gray-600 mb-10">
            A look inside our cosy café and some of the fresh food and drinks we serve daily in York.
          </p>
        </div>
      </section>

      <Gallery />
      <Location />
    </main>
  );
}