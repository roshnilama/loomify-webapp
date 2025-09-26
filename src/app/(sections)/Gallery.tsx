import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import imageManifest from '@/lib/image-manifest.json';
import { ImageManifest } from '@/lib/types';

export function Gallery() {
  const images: ImageManifest = imageManifest || [];
  return (
    <Section id="gallery">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Creations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Beautiful handmade crochet flowers and arrangements. Each piece is crafted with love and attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <div 
              key={img.src} 
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={idx < 4}
              />
              
              {/* Overlay with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white">
                  <h3 className="font-semibold text-sm mb-1 truncate">
                    {img.alt || `Crochet Creation ${idx + 1}`}
                  </h3>
                  <p className="text-xs text-gray-200 opacity-90">
                    Handmade with love
                  </p>
                </div>
              </div>
              
              {/* Zoom icon on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

