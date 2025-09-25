import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import imageManifest from '@/lib/image-manifest.json';

export function Gallery() {
  const images: { src: string; alt: string }[] = (imageManifest as any) || [];
  return (
    <Section id="gallery">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Pattern gallery</h2>
          <p className="text-foreground/70">A peek at what you can create with Loomify.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, idx) => (
            <div key={img.src} className="relative overflow-hidden rounded-xl aspect-[4/3] border">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

