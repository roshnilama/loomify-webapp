import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";
import { Stack } from "@/components/ui/primitives/Stack";
import { Flex } from "@/components/ui/primitives/Flex";
import { Heading } from "@/components/ui/primitives/Heading";
import { Text } from "@/components/ui/primitives/Text";
import imageManifest from '@/lib/image-manifest.json';
import { ImageManifest } from '@/lib/types';

export function Hero() {
  const images: ImageManifest = imageManifest || [];
    return (
      <Section className="relative pt-40 pb-32 overflow-hidden bg-white">
        <Container className="relative">
          <div className="max-w-5xl mx-auto text-center">
            <Stack gap="10" className="items-center">
              {/* Badge */}
              <div className="text-gray-500 text-sm font-medium tracking-wider uppercase">
                {SITE.name} • Handmade Crochet Flowers
              </div>
              
              {/* Main headline */}
              <div className="space-y-4">
                <Heading level={1} className="text-7xl md:text-8xl font-black text-gray-900 tracking-tight leading-none">
                  HANDMADE
                </Heading>
                <Heading level={1} className="text-7xl md:text-8xl font-black text-gray-900 tracking-tight leading-none">
                  CROCHET FLOWERS
                </Heading>
              </div>
              
              {/* Subtitle */}
              <Text className="text-2xl text-gray-600 max-w-3xl leading-relaxed font-medium">
                Beautiful handcrafted crochet flowers, bouquets, and arrangements. 
                Made with love and delivered with care to brighten your space.
              </Text>
              
              {/* CTA Buttons */}
              <Flex className="mt-12 gap-6" justify="center" direction="row">
                <Button 
                  variant="brand" 
                  href="#gallery"
                  className="px-12 py-5 text-white bg-gray-900 hover:bg-gray-800 rounded-2xl transition-all duration-200 shadow-2xl shadow-gray-900/30 hover:shadow-3xl hover:shadow-gray-900/40 font-bold text-lg hover:scale-105"
                >
                  SHOP NOW
                </Button>
                <Button 
                  variant="outline" 
                  href="#features"
                  className="px-12 py-5 text-gray-900 bg-white hover:bg-gray-900 hover:text-white border-3 border-gray-900 rounded-2xl transition-all duration-200 font-bold text-lg hover:scale-105 shadow-xl"
                >
                  CUSTOM ORDERS
                </Button>
              </Flex>
            </Stack>
            
            {/* Image grid */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
              {images.map((img, idx) => (
                <div key={img.src} className="relative overflow-hidden rounded-3xl aspect-[4/3] border-2 border-gray-900/10 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    );
}

