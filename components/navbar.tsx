"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tight">7 Solutions</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="/careers" className="text-sm font-medium hover:text-accent transition-colors">
              Careers
            </Link>
            <Link href="/news" className="text-sm font-medium hover:text-accent transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-primary-foreground/10">
            <Link
              href="/"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/careers"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/news"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-transparent" variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
