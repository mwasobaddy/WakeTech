"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Globe,
  Smartphone,
  Cloud,
  ClipboardList,
  Wrench,
  Code2,
  Database,
  Server,
  Container,
  Bot,
  FileCode,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern frameworks and best practices.",
    deliverables: [
      "React/Next.js frontends",
      "Node.js/Python backends",
      "RESTful & GraphQL APIs",
      "Database design & optimization",
    ],
    featured: true,
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that deliver native-like experiences.",
    deliverables: [
      "React Native apps",
      "iOS & Android support",
      "Offline-first architecture",
      "Push notifications",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines.",
    deliverables: [
      "AWS/Azure/GCP setups",
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "Infrastructure as Code",
    ],
  },
  {
    id: "consulting",
    icon: ClipboardList,
    title: "Technical Consulting & Audits",
    description: "Expert advice on architecture, performance, and security improvements.",
    deliverables: [
      "Code architecture reviews",
      "Performance audits",
      "Security assessments",
      "Team training & mentoring",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your applications running smoothly and securely.",
    deliverables: [
      "Bug fixes & updates",
      "Feature enhancements",
      "Security patches",
      "24/7 monitoring",
    ],
  },
];

const process = [
  { step: 1, label: "Discovery", icon: ClipboardList, description: "Understanding your needs, goals, and users." },
  { step: 2, label: "Design", icon: Code2, description: "Creating wireframes, UI/UX, and architecture." },
  { step: 3, label: "Build", icon: FileCode, description: "Development with regular updates and feedback." },
  { step: 4, label: "Test", icon: Bot, description: "Comprehensive testing and quality assurance." },
  { step: 5, label: "Deploy", icon: Cloud, description: "Launch with monitoring and optimization." },
  { step: 6, label: "Maintain", icon: Wrench, description: "Ongoing support and enhancements." },
];

const technologies = [
  { name: "React", icon: FileCode },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: FileCode },
  { name: "TypeScript", icon: FileCode },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Container },
];

const engagementModels = [
  {
    id: "fixed",
    title: "Fixed Price",
    description: "Defined scope with agreed timeline and budget.",
    badge: "Recommended",
    features: [
      "Clear project scope",
      "Fixed timeline & budget",
      "Milestone-based payments",
      "Perfect for: Defined projects",
    ],
  },
  {
    id: "time",
    title: "Time & Materials",
    description: "Pay for actual work done with full flexibility.",
    features: [
      "Hourly or daily rates",
      "Full flexibility",
      "Regular invoicing",
      "Perfect for: Evolving needs",
    ],
  },
  {
    id: "retainer",
    title: "Retainer",
    description: "Ongoing support with guaranteed response times.",
    features: [
      "Monthly commitment",
      "Guaranteed response times",
      "Priority support",
      "Perfect for: Long-term partnerships",
    ],
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on scope. A typical web application takes 8-16 weeks, while more complex projects may take longer. We'll provide a detailed timeline during discovery.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer maintenance packages to keep your application secure, updated, and running smoothly after launch.",
  },
  {
    question: "What about post-launch maintenance?",
    answer: "Post-launch maintenance is crucial. We offer retainer plans that include bug fixes, security patches, and feature enhancements.",
  },
  {
    question: "How do you handle communication?",
    answer: "We provide weekly updates with dedicated Slack/email Channels, and scheduled video calls for major milestones.",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".services-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".services-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
        });

        const serviceCards = document.querySelectorAll(".service-card");
        serviceCards.forEach((card) => {
          gsap.set(card, { y: 50, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => gsap.to(card, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }),
            once: true,
          });
        });

        const processSteps = document.querySelectorAll(".process-step");
        processSteps.forEach((step) => {
          gsap.set(step, { y: 30, opacity: 0 });
          ScrollTrigger.create({
            trigger: step,
            start: "top 85%",
            onEnter: () => gsap.to(step, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }),
            once: true,
          });
        });

        const techItems = document.querySelectorAll(".tech-item");
        techItems.forEach((item) => {
          gsap.set(item, { y: 20, opacity: 0 });
          ScrollTrigger.create({
            trigger: item,
            start: "top 90%",
            onEnter: () => gsap.to(item, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }),
            once: true,
          });
        });

        const engagementCards = document.querySelectorAll(".engagement-card");
        engagementCards.forEach((card) => {
          gsap.set(card, { y: 40, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => gsap.to(card, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }),
            once: true,
          });
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="services-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary">
              Our <span className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="services-subtitle text-xl text-text-muted max-w-2xl mx-auto">
              Full-cycle software development tailored to your needs.
            </p>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card group bg-bg-surface border border-border-default rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent-primary-start/10 hover:-translate-y-2 transition-all duration-500 relative"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white text-xs font-medium rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Featured
                  </div>
                )}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary-start to-accent-primary-end flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-accent-primary-start transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-sm text-text-muted"
                    >
                      <Check className="h-4 w-4 text-accent-primary-start mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section py-20 sm:py-32 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary flex items-center justify-center gap-3">
            <TrendingUp className="h-8 w-8 text-accent-primary-start" />
            How We Work
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            A proven process that delivers results consistently.
          </p>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary-start via-accent-primary-end to-accent-primary-start -translate-x-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12">
              {process.map((p, i) => (
                <div
                  key={p.step}
                  className={`process-step relative ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}
                >
                  <div className={`absolute top-0 w-12 h-12 rounded-full bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white font-bold flex items-center justify-center shadow-lg shadow-accent-primary-start/25 ${i % 2 === 0 ? 'md:right-0 md:-translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} md:-translate-y-0`}>
                    {p.step}
                  </div>
                  <div className={`bg-bg-surface p-6 rounded-2xl border border-border-default ${i % 2 === 0 ? 'md:mr-16' : 'md:ml-16'} group hover:border-accent-primary-start/30 transition-all duration-300`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <p.icon className="h-5 w-5 text-accent-primary-start" />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary-start transition-colors">
                        {p.label}
                      </h3>
                    </div>
                    <p className="text-text-muted text-sm">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary">
            Technologies We Use
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Modern tools and frameworks for robust solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="tech-item group px-6 py-4 bg-bg-surface border border-border-default rounded-2xl hover:shadow-lg hover:shadow-accent-primary-start/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary-start/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <tech.icon className="h-6 w-6 text-accent-primary-start" />
                </div>
                <span className="text-sm font-medium text-text-muted group-hover:text-text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-section py-20 sm:py-32 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-text-primary">
            Engagement Models
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Flexible engagement options tailored to your project needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className="engagement-card group bg-bg-base border border-border-default rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent-primary-start/10 hover:-translate-y-2 transition-all duration-500 relative"
              >
                {model.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white text-xs font-medium rounded-full">
                    {model.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary-start transition-colors">
                  {model.title}
                </h3>
                <p className="text-text-muted text-sm mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-text-muted"
                    >
                      <Check className="h-4 w-4 text-accent-primary-start mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-text-primary">
            Frequently Asked Questions
          </h2>
          <Accordion className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-text-primary hover:text-accent-primary-start transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-r from-accent-primary-start to-accent-primary-end">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let's discuss how we can bring your vision to life.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-accent-primary-start hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}