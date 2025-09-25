import Image from "next/image";
import path from "node:path";
import fs from "node:fs/promises";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

async function getPublicImages(): Promise<{ src: string; alt: string }[]> {
  try {
    const dirPath = path.join(process.cwd(), "public", "images");
    const files = await fs.readdir(dirPath);
    const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
    // Sort by file type priority: JPG > PNG > WebP > others
    const sortedFiles = files
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .sort((a, b) => {
        const extA = path.extname(a).toLowerCase();
        const extB = path.extname(b).toLowerCase();
        const priority = { '.jpg': 0, '.jpeg': 0, '.png': 1, '.webp': 2, '.gif': 3 };
        const priorityA = priority[extA as keyof typeof priority] ?? 4;
        const priorityB = priority[extB as keyof typeof priority] ?? 4;
        if (priorityA !== priorityB) return priorityA - priorityB;
        return a.localeCompare(b);
      });
    return sortedFiles.map((f) => ({ 
      src: `/images/${f}`, 
      alt: f.replace(/[._-]+/g, " ").replace(/\.[^/.]+$/, "") 
    }));
  } catch {
    return [];
  }
}

async function getImages(): Promise<{ src: string; alt: string }[]> {
  return await getPublicImages();
}

export async function Gallery() {
  const images = await getImages();
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

