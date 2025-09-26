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
      <Section className="relative pt-40 pb-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Beautiful background elements */}
        <div aria-hidden className="absolute inset-0 -z-10">
          {/* Large gradient orbs with more intensity */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-300/40 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-300/40 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse delay-2000" />
          
          {/* Additional glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-500" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-l from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1500" />
          
          {/* More floating elements with glow */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400/60 rounded-full animate-pulse shadow-lg shadow-purple-400/50" />
          <div className="absolute top-32 right-32 w-3 h-3 bg-pink-400/60 rounded-full animate-pulse delay-1000 shadow-lg shadow-pink-400/50" />
          <div className="absolute bottom-32 left-32 w-2 h-2 bg-purple-500/60 rounded-full animate-pulse delay-2000 shadow-lg shadow-purple-500/50" />
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink-500/60 rounded-full animate-pulse delay-500 shadow-lg shadow-pink-500/50" />
          <div className="absolute top-1/2 left-10 w-3 h-3 bg-purple-300/60 rounded-full animate-pulse delay-300 shadow-lg shadow-purple-300/50" />
          <div className="absolute top-1/3 right-10 w-4 h-4 bg-pink-300/60 rounded-full animate-pulse delay-700 shadow-lg shadow-pink-300/50" />
        </div>
        <Container className="relative">
          <div className="max-w-5xl mx-auto text-center">
            <Stack gap="10" className="items-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/90 backdrop-blur-md border-2 border-purple-300/60 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse shadow-lg shadow-purple-500/50" />
                <span className="text-gray-800 text-sm font-bold tracking-wider uppercase">
                  {SITE.name} • Handmade Crochet Flowers
                </span>
              </div>
              
              {/* Main headline */}
              <div className="space-y-4">
                <Heading level={1} className="text-7xl md:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
                  HANDMADE
                </Heading>
                <Heading level={1} className="text-7xl md:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 bg-clip-text text-transparent">
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
                  className="px-12 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/40 font-bold text-lg hover:scale-105 hover:-translate-y-1"
                >
                  SHOP NOW
                </Button>
                <Button 
                  variant="outline" 
                  href="#features"
                  className="px-12 py-5 text-purple-700 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white border-2 border-purple-300 hover:border-transparent rounded-2xl transition-all duration-300 font-bold text-lg hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-purple-500/30"
                >
                  CUSTOM ORDERS
                </Button>
              </Flex>
              
              {/* Instagram Follow Section */}
              <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border-2 border-purple-200/50 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.92-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-gray-800">Follow Our Journey</div>
                      <div className="text-sm text-gray-600">See our latest creations</div>
                      <div className="text-xs text-gray-500 mt-1">by Roshni Lama • Creator & Founder</div>
                    </div>
                  </div>
                  
                  <a
                    href="https://instagram.com/crchet_flowers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-pink-500/30 hover:shadow-pink-500/40 hover:scale-105 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.92-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow @crchet_flowers
                  </a>
                  
                  <div className="text-center text-sm text-gray-600 max-w-md">
                    Get inspired by our daily crochet creations, behind-the-scenes content, and exclusive offers!
                  </div>
                </div>
              </div>
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

