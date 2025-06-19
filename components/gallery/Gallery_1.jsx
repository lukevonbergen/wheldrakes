'use client';

import { useState } from 'react';

const images = [
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f7/16/dc/easter-2022.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 1' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f7/16/a8/happy-easter-2022.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 2' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b7/4f/6a/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 3' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/65/bb/02/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 4' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b7/4f/71/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 5' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/9c/5f/d6/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 6' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(({ src, alt }, i) => (
            <div
              key={i}
              className="cursor-pointer group relative overflow-hidden rounded-lg border hover:shadow-md transition"
              onClick={() => setSelectedImage({ src, alt })}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-6" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}