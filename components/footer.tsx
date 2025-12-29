import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BUILDERCO</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Building the future with excellence, innovation, and integrity.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">General Contracting</li>
              <li className="text-primary-foreground/80">Infrastructure & Roads</li>
              <li className="text-primary-foreground/80">Residential Buildings</li>
              <li className="text-primary-foreground/80">Industrial Projects</li>
              <li className="text-primary-foreground/80">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">123 Construction Ave, Building District, City 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="shrink-0" />
                <span className="text-primary-foreground/80">info@builderco.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 lg:mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} BuilderCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
