import Image from "next/image";
import { Hero } from "./(sections)/Hero";
import { Features } from "./(sections)/Features";
import { Gallery } from "./(sections)/Gallery";
import { Testimonials } from "./(sections)/Testimonials";
import { Footer } from "./(sections)/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}
