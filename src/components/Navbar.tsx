"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-bg-surface/10 backdrop-blur-lg border-b border-border-default/50 shadow-sm"
            : "bg-bg-base backdrop-blur-md"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
            >
              <div className="h-18 w-18 lg:w-20 lg:h-20 rounded-full overflow-hidden mr-2">
                <img
                  src="/logo.png"
                  alt="WakeTech"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent font-bold text-2xl lg:text-4xl transition-all duration-300 group-hover:tracking-wide">
                WakeTech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative group px-4 py-2"
                  >
                    <span
                      className={cn(
                        "text-md font-medium transition-all duration-300",
                        pathname === link.href
                          ? "text-text-primary"
                          : "text-text-muted group-hover:text-text-primary"
                      )}
                    >
                      {link.label}
                    </span>

                    {/* Animated underline indicator */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent-primary-start to-accent-primary-end transition-all duration-300 ease-out",
                        pathname === link.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                ))}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-full transition-all duration-300 ml-4 relative",
                  "hover:bg-bg-surface/50"
                )}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <div className="relative w-5 h-5">
                  <Sun
                    size={20}
                    className={cn(
                      "absolute transition-all duration-300",
                      theme === "light"
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-90"
                    )}
                  />
                  <Moon
                    size={20}
                    className={cn(
                      "absolute transition-all duration-300",
                      theme === "dark"
                        ? "opacity-100 rotate-0"
                        : "opacity-0 rotate-90"
                    )}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  "hover:bg-bg-surface/50"
                )}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <div className="relative w-5 h-5">
                  <Sun
                    size={20}
                    className={cn(
                      "absolute transition-all duration-300",
                      theme === "light"
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-90"
                    )}
                  />
                  <Moon
                    size={20}
                    className={cn(
                      "absolute transition-all duration-300",
                      theme === "dark"
                        ? "opacity-100 rotate-0"
                        : "opacity-0 rotate-90"
                    )}
                  />
                </div>
              </button>
              <button
                className={cn(
                  "p-2 text-text-primary rounded-lg transition-all duration-300",
                  "hover:bg-bg-surface/50"
                )}
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-out Menu */}
          <div
            className={cn(
              "absolute top-0 left-0 h-full w-72 bg-bg-surface shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
              isOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-border-default/50">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <span className="text-lg font-bold uppercase bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">
                  WakeTech
                </span>
              </Link>
              <button
                className={cn(
                  "p-2 text-text-muted hover:text-text-primary rounded-lg transition-all duration-300",
                  "hover:bg-bg-base"
                )}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col p-4 gap-2 flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                    "flex items-center overflow-hidden",
                    pathname === link.href
                      ? "text-text-primary bg-bg-base"
                      : "text-text-muted hover:text-text-primary hover:bg-bg-base/50"
                  )}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 0.05}s backwards` : "none",
                  }}
                >
                  {/* Background gradient on active */}
                  {pathname === link.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary-start/10 to-accent-primary-end/10 -z-10" />
                  )}

                  {/* Animated left border */}
                  <div
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary-start to-accent-primary-end transition-all duration-300",
                      pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                  />

                  <span className="relative ml-2">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Menu Footer with CTA */}
            <div className="p-4 border-t border-border-default/50">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary-start/25 hover:scale-105 text-sm">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}