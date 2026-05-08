"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@waketech.com",
    href: "mailto:hello@waketech.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually responds within 24 hours",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kelvin", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/kelvin", icon: Github },
  { label: "Twitter", href: "https://twitter.com/kelvin", icon: Twitter },
  { label: "WhatsApp", href: "https://wa.me/254700000000", icon: MessageCircle },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. A typical web application takes 4-8 weeks, while more complex solutions may take 3-6 months. I'll provide a detailed timeline after our initial consultation.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes, I offer monthly maintenance packages that include bug fixes, security updates, and feature enhancements. We can discuss this after your project is complete.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Next.js, Node.js, PostgreSQL, MongoDB, AWS, and modern DevOps practices. I'm always learning new technologies to deliver the best solutions.",
  },
  {
    question: "How do you handle payments?",
    answer: "I work with a milestone-based payment structure. Typically, 50% is paid upfront to begin work, with the remaining 50% upon project completion. For larger projects, we can discuss a phased payment plan.",
  },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="bg-blob absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-primary-start/20 to-transparent rounded-full blur-3xl" />
      <div className="bg-blob absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-primary-end/15 to-transparent rounded-full blur-3xl" />
      <div className="bg-blob absolute top-1/3 left-1/4 w-32 h-32 bg-accent-primary-start/10 rounded-full blur-2xl animate-pulse" />
      <div className="bg-blob absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent-primary-end/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}

function ContactCard({ info, index }: { info: typeof contactInfo[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(cardRef.current, { y: 30, opacity: 0 });
    ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 85%",
      onEnter: () => gsap.to(cardRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }),
      once: true,
    });
  });

  return (
    <div
      ref={cardRef}
      className="group bg-bg-surface border border-border-default rounded-2xl p-6 hover:border-accent-primary-start/30 hover:shadow-2xl hover:shadow-accent-primary-start/10 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary-start to-accent-primary-end flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <info.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-text-muted mb-1">{info.label}</p>
          {info.href ? (
            <Link
              href={info.href}
              className="text-text-primary font-medium hover:text-accent-primary-start transition-colors"
            >
              {info.value}
            </Link>
          ) : (
            <p className="text-text-primary font-medium">{info.value}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function SocialButton({ social }: { social: typeof socialLinks[0] }) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.set(btnRef.current, { y: 10, opacity: 0 });
    ScrollTrigger.create({
      trigger: btnRef.current,
      start: "top 90%",
      onEnter: () => gsap.to(btnRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }),
      once: true,
    });
  });

  return (
    <Link
      ref={btnRef}
      href={social.href}
      target="_blank"
      className="group flex items-center gap-3 px-5 py-3 bg-bg-surface border border-border-default rounded-xl hover:border-accent-primary-start/30 hover:shadow-lg hover:shadow-accent-primary-start/10 transition-all duration-300"
    >
      <social.icon className="w-5 h-5 text-text-muted group-hover:text-accent-primary-start group-hover:scale-110 transition-all duration-300" />
      <span className="text-text-primary font-medium group-hover:text-accent-primary-start transition-colors">
        {social.label}
      </span>
    </Link>
  );
}

function FloatingLabelInput({ id, label, type = "text", placeholder }: { id: string; label: string; type?: string; placeholder: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <Label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue
            ? "-top-2 text-xs bg-bg-surface px-1 text-accent-primary-start"
            : "top-3 text-text-muted"
        }`}
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={isFocused ? "" : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={`bg-bg-surface border-border-default transition-all duration-300 ${
          isFocused ? 'border-accent-primary-start shadow-lg shadow-accent-primary-start/10' : ''
        }`}
      />
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="relative w-full h-64 bg-bg-surface border border-border-default rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary-start/10 to-accent-primary-end/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-primary-start to-accent-primary-end flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <p className="text-text-primary font-semibold">Nairobi, Kenya</p>
          <p className="text-text-muted text-sm mt-1">Available for remote work worldwide</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <span className="px-3 py-1 bg-bg-base rounded-full text-xs text-text-muted border border-border-default">
          Africa
        </span>
        <span className="px-3 py-1 bg-bg-base rounded-full text-xs text-text-muted border border-border-default">
          GMT+3
        </span>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".contact-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".contact-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
        });

        gsap.from(".bg-blob", {
          scale: 0.8,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
        });

        gsap.from(".contact-card", {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".cards-section",
            start: "top 85%",
          },
        });

        gsap.from(".form-section", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".form-section",
            start: "top 85%",
          },
        });

        gsap.from(".social-btn", {
          y: 10,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".social-section",
            start: "top 85%",
          },
        });

        gsap.from(".faq-item", {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".faq-section",
            start: "top 85%",
          },
        });

        gsap.from(".cta-section", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
          },
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <AnimatedBackground />

      <section className="relative py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="contact-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-text-primary">
              Get in <span className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="contact-subtitle text-xl text-text-muted max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how WakeTech can help bring your vision to life.
            </p>
          </div>

          <div className="cards-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info, index) => (
              <ContactCard key={info.label} info={info} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="form-section lg:col-span-2">
              {formSubmitted ? (
                <div className="bg-bg-surface border border-border-default rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-primary-start to-accent-primary-end flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-muted mb-6">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-bg-surface border border-border-default rounded-2xl p-8 space-y-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingLabelInput id="name" label="Name" placeholder="Your name" />
                    <FloatingLabelInput id="email" label="Email" type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-text-primary">Subject</Label>
                    <Select>
                      <SelectTrigger className="mt-1 bg-bg-surface border-border-default">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="cloud-devops">Cloud & DevOps</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-text-primary">Budget</Label>
                      <Select>
                        <SelectTrigger className="mt-1 bg-bg-surface border-border-default">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k+">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-text-primary">Timeline</Label>
                      <Select>
                        <SelectTrigger className="mt-1 bg-bg-surface border-border-default">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-months+">3+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-text-primary">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="mt-1 bg-bg-surface border-border-default focus:border-accent-primary-start focus:ring-2 focus:ring-accent-primary-start/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="social-section bg-bg-surface border border-border-default rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <SocialButton key={social.label} social={social} />
                  ))}
                </div>
              </div>

              <MapPlaceholder />

              <Button
                variant="outline"
                className="w-full border-border-default hover:border-accent-primary-start/30 hover:bg-bg-surface transition-all duration-300"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section py-16 bg-bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-center mb-8">
            Quick answers to common questions
          </p>
          <Accordion type="single" className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <AccordionItem className="bg-bg-base border border-border-default rounded-xl px-4">
                  <AccordionTrigger className="text-text-primary hover:text-accent-primary-start hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="cta-section relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-accent-primary-start/10 to-accent-primary-end/10 border border-accent-primary-start/20 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build something amazing. I&apos;m excited to hear about your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-border-default text-text-primary hover:bg-bg-surface hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
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
