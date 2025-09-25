import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";
import { Stack } from "@/components/ui/primitives/Stack";
import { Flex } from "@/components/ui/primitives/Flex";
import { Heading } from "@/components/ui/primitives/Heading";
import { Text } from "@/components/ui/primitives/Text";
import path from "node:path";
import fs from "node:fs/promises";

async function getPublicImages(): Promise<{ src: string; alt: string }[]> {
  try {
    const dirPath = path.join(process.cwd(), "public", "images");
    const files = await fs.readdir(dirPath);
    const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
    // Prioritize JPG files for better quality, then others
    const sortedFiles = files
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .sort((a, b) => {
        if (a.endsWith('.jpg') && !b.endsWith('.jpg')) return -1;
        if (!a.endsWith('.jpg') && b.endsWith('.jpg')) return 1;
        return a.localeCompare(b);
      })
      .slice(0, 4);
    return sortedFiles.map((f) => ({ 
      src: `/images/${f}`, 
      alt: f.replace(/[._-]+/g, " ").replace(/\.[^/.]+$/, "") 
    }));
  } catch {
    return [];
  }
}

export async function Hero() {
  const images = await getPublicImages();
    return (
      <Section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#B7C9E5]/20 via-[#EAC4A3]/10 to-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#B7C9E5]/30 via-[#EAC4A3]/10 to-white" />
        </div>
      <Container className="relative grid gap-10 items-center text-center">
        <Stack gap="6" className="items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 text-[#846A57] backdrop-blur-sm text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#846A57]/80" />
              Introducing {SITE.name}
            </div>
            <Heading level={1} className="text-5xl font-medium text-[#846A57] tracking-tight max-w-4xl">
              Beautiful crochet patterns and project tracking
            </Heading>
            <Text className="text-lg text-neutral-700 max-w-2xl">
              Explore curated designs, manage your works-in-progress, and get inspired by a warm community of makers.
            </Text>
          <Flex className="mt-4 gap-4" justify="center" direction="row">
            <Button 
              variant="brand" 
              href="#gallery"
              className="px-6 py-2.5 text-white bg-[#9F7E69] hover:bg-[#846A57] rounded-full transition-colors"
            >
              Browse patterns
            </Button>
          </Flex>
        </Stack>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, idx) => (
            <div key={img.src} className="relative overflow-hidden rounded-xl aspect-[4/3] border">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

