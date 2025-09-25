
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#9F7E69]/10 px-0 py-16 mt-16 border-t border-[#9F7E69]/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="text-xl font-semibold text-[#9F7E69]">Loomify</div>
            <p className="text-sm text-neutral-600">Creating beautiful crochet patterns and inspiration for crafters worldwide.</p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[#846A57] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-neutral-600 hover:text-[#9F7E69] transition">Features</a></li>
              <li><a href="#gallery" className="text-sm text-neutral-600 hover:text-[#9F7E69] transition">Pattern Gallery</a></li>
              <li><a href="#newsletter" className="text-sm text-neutral-600 hover:text-[#9F7E69] transition">Newsletter</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[#846A57] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-neutral-600 hover:text-[#9F7E69] transition">Beginner's Guide</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-[#9F7E69] transition">Stitch Library</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-[#9F7E69] transition">Pattern Tips</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[#846A57] mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-neutral-600">Designed by Roshni Lama</p>
              <a className="text-sm text-[#9F7E69] hover:text-[#846A57] transition block" href="mailto:roshnil467@gmail.com">roshnil467@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center text-neutral-500 mt-12 pt-8 border-t border-[#9F7E69]/10">
          © {new Date().getFullYear()} Loomify. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

