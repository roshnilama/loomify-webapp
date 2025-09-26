import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo size={32} className="text-white" />
            <p className="text-gray-400 text-center md:text-left max-w-md">
              Professional crochet patterns and project tracking for serious makers.
            </p>
            <div className="text-gray-400 text-sm">
              Created by <span className="text-white font-medium">Roshni Lama</span>
            </div>
            <a 
              href="https://instagram.com/crchet_flowers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              @crchet_flowers
            </a>
          </div>
          
          {/* Navigation - Only what we have */}
          <div className="flex gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="#gallery" className="text-gray-400 hover:text-white transition-colors font-medium">
              Gallery
            </a>
            <a href="mailto:roshnil467@gmail.com" className="text-gray-400 hover:text-white transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Loomify. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}

