"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a
          href="#"
          className="text-xl font-bold text-foreground"
          data-testid="link-logo"
        >
          <span className="text-[#40929e]">Quill</span>gent
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              onClick={() => scrollToSection(link.href)}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            className="hidden bg-[#40929e] text-white hover:bg-[#357d88] md:flex"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-header-cta"
          >
            Get Started
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="flex flex-col gap-2 border-t border-border/50 bg-background p-4 md:hidden">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className="justify-start"
              onClick={() => scrollToSection(link.href)}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Button>
          ))}
          <Button
            className="mt-2 bg-[#40929e] text-white hover:bg-[#357d88]"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-mobile-cta"
          >
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
}
