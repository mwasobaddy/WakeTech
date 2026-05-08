"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code, Database, Cloud, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern web applications built with React, Next.js, and Vue.",
    href: "/services",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Scalable APIs and database design with Node.js and PostgreSQL.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and CI/CD pipelines on AWS.",
    href: "/services",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with admin dashboard.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Real-time Dashboard",
    description: "Live analytics dashboard with WebSocket updates.",
    tags: ["React", "Node.js", "D3.js"],
  },
  {
    title: "Mobile App API",
    description: "RESTful API for cross-platform mobile app.",
    tags: ["Express", "MongoDB", "JWT"],
  },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="bg-blob absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-primary-start/20 to-transparent rounded-full blur-3xl" />
      <div className="bg-blob absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-primary-end/15 to-transparent rounded-full blur-3xl" />
      <div className="bg-blob absolute top-1/3 left-1/4 w-32 h-32 bg-accent-primary-start/10 rounded-full blur-2xl animate-pulse" />
      <div className="bg-blob absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent-primary-end/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="bg-blob absolute top-1/2 right-1/2 w-24 h-24 bg-accent-primary-start/8 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.8s' }} />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <ArrowDown className="w-5 h-5 animate-bounce" />
    </div>
  );
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".hero-text", {
          y: 100,
          opacity: 0,
          duration: 1.4,
          ease: "power4.out",
          stagger: 0.15,
        });

        gsap.from(".hero-image", {
          x: 80,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
        });

        gsap.from(".scroll-indicator", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
        });

        gsap.from(".bg-blob", {
          scale: 0.8,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
        });

        const serviceCards = document.querySelectorAll(".service-card");
        serviceCards.forEach((card) => {
          gsap.set(card, { y: 30, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => gsap.to(card, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }),
            once: true,
          });
        });

        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach((card) => {
          gsap.set(card, { y: 30, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => gsap.to(card, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }),
            once: true,
          });
        });

        gsap.set(".about-content", { y: 30, opacity: 0 });
        ScrollTrigger.create({
          trigger: ".about-section",
          start: "top 85%",
          onEnter: () => gsap.to(".about-content", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }),
          once: true,
        });

        gsap.set(".cta-content", { y: 30, opacity: 0 });
        ScrollTrigger.create({
          trigger: ".cta-section",
          start: "top 85%",
          onEnter: () => gsap.to(".cta-content", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }),
          once: true,
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      <AnimatedBackground />

      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="text-center lg:text-left">
              <div className="hero-text inline-flex items-center gap-2 px-4 py-2 bg-accent-primary-start/10 border border-accent-primary-start/20 rounded-full text-accent-primary-start text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent-primary-start rounded-full animate-pulse" />
                Open for projects
              </div>

              <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-text-primary">We Build </span>
                <span className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">
                  Digital Products
                </span>
              </h1>

              <p className="hero-text text-xl sm:text-2xl md:text-3xl text-text-muted mb-4 font-light">
                Custom Software & Web Applications
              </p>

              <p className="hero-text text-lg text-text-muted mb-8 max-w-xl mx-auto lg:mx-0">
                WakeTech is a software studio that transforms ideas into elegant,
                performant digital solutions. Let's bring your vision to life.
              </p>

              <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                    Start a Project
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-border-default text-text-primary hover:bg-bg-surface hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                  >
                    View Work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hero-image flex justify-center lg:justify-end">
              <div className="relative grid grid-cols-2 gap-4 w-full">
                {/* Main project showcase - E-commerce Platform */}
                <div className="col-span-2 relative group">
                  <img
                    src="https://images.pexels.com/photos/461073/pexels-photo-461073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="E-Commerce Platform Project"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">E-Commerce Platform</p>
                      <p className="text-xs opacity-90">Next.js • PostgreSQL • Stripe</p>
                    </div>
                  </div>
                </div>

                {/* Real-time Dashboard */}
                <div className="relative group">
                  <img
                    src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Real-time Dashboard Project"
                    className="w-full h-32 object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-xs font-semibold">Dashboard</p>
                      <p className="text-xs opacity-75">React • D3.js</p>
                    </div>
                  </div>
                </div>

                {/* Mobile App API */}
                <div className="relative group">
                  <img
                    src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Mobile API Project"
                    className="w-full h-32 object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-xs font-semibold">Mobile API</p>
                      <p className="text-xs opacity-75">Express • MongoDB</p>
                    </div>
                  </div>
                </div>

                {/* Logo overlay */}
                <div className="absolute -bottom-16 -right-4 bg-bg-surface rounded-2xl p-2 shadow-lg border border-border-default">
                  <img
                    src="/logo-full.png"
                    alt="WakeTech"
                    className="w-60 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      <section className="services-section relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary">
            What We Do
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Specialized services to bring your digital vision to life
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-card group bg-bg-surface border border-border-default rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent-primary-start/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary-start to-accent-primary-end flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-muted mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-accent-primary-start hover:underline group-hover:translate-x-1 transition-transform"
                >
                  Learn more <ArrowDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section py-20 sm:py-32 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-content grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-text-primary">
                Building Digital Experiences That Matter
              </h2>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                With over 5 years of experience in software development, I specialize in creating
                seamless web applications that combine beautiful design with robust functionality.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                My approach focuses on understanding your unique needs and delivering solutions
                that not only meet but exceed expectations. Every project is an opportunity
                to create something remarkable.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent-primary-start hover:underline">
                More about me <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary-start to-accent-primary-end rounded-3xl opacity-20" />
                <div className="absolute inset-4 bg-bg-surface rounded-2xl border border-border-default flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl sm:text-7xl font-bold bg-gradient-to-br from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">
                      5+
                    </span>
                    <p className="text-text-muted mt-2">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary">
            Featured Projects
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="project-card group bg-bg-surface border border-border-default rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent-primary-start/10 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-accent-primary-start/10 to-accent-primary-end/10 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent-primary-start/5 via-transparent to-accent-primary-end/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ExternalLink className="w-10 h-10 text-text-muted" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-bg-base rounded-full text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center gap-2 text-accent-primary-start hover:underline text-lg">
              View all projects <ArrowDown className="h-5 w-5 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section py-20 sm:py-32">
        <div className="cta-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-10 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-8 border-t border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} WakeTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}