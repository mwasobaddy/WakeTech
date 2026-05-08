"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Download, ChevronDown, Mail, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const workExperience = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Lead development of enterprise web applications using React, Node.js, and PostgreSQL. Architected microservices and implemented CI/CD pipelines.",
    highlights: ["Led team of 5 developers", "Reduced deployment time by 60%", "Implemented real-time analytics"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupHub Inc.",
    period: "2020 - 2022",
    description: "Built scalable web applications from scratch using Next.js and MongoDB. Developed RESTful APIs and integrated third-party services.",
    highlights: ["Launched 3 SaaS products", "Improved app performance by 40%", "Mentored junior developers"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2018 - 2020",
    description: "Created responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
    highlights: ["Delivered 20+ client projects", "Introduced component library", "Best developer award 2019"],
  },
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "PostgreSQL / MongoDB", level: 80 },
  { name: "AWS / Cloud", level: 75 },
  { name: "GSAP / Animations", level: 85 },
];

const stats = [
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 20, label: "Happy Clients", suffix: "+" },
  { value: 10, label: "Awards Won", suffix: "" },
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

function StatCounter({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: countRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to({}, {
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            const progress = this.progress();
            setCount(Math.floor(value * progress));
          },
        });
      },
      once: true,
    });
  });

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-text-muted mt-2">{label}</div>
    </div>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: barRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(fillRef.current, {
          width: `${level}%`,
          duration: 1.5,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-text-primary font-medium">{name}</span>
        <span className="text-text-muted">{level}%</span>
      </div>
      <div className="h-3 bg-bg-surface rounded-full overflow-hidden border border-border-default">
        <div
          ref={fillRef}
          className="h-full bg-gradient-to-r from-accent-primary-start to-accent-primary-end rounded-full"
          style={{ width: 0 }}
        />
      </div>
    </div>
  );
}

function ExperienceCard({ experience, isOpen, onToggle }: { experience: typeof workExperience[0]; isOpen: boolean; onToggle: () => void }) {
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
      className="bg-bg-surface border border-border-default rounded-2xl overflow-hidden hover:border-accent-primary-start/30 hover:shadow-2xl hover:shadow-accent-primary-start/10 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:border-accent-primary-start/30 border border-transparent transition-all duration-300"
      >
        <div>
          <h3 className="text-xl font-semibold text-text-primary">{experience.role}</h3>
          <p className="text-accent-primary-start font-medium">{experience.company}</p>
          <p className="text-text-muted text-sm mt-1">{experience.period}</p>
        </div>
        <div className={`p-2 rounded-full bg-bg-base text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6">
          <p className="text-text-muted mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight) => (
              <span
                key={highlight}
                className="text-sm px-3 py-1 bg-bg-base rounded-full text-accent-primary-start border border-accent-primary-start/20"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ experience, index }: { experience: typeof workExperience[0]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(itemRef.current, { x: index % 2 === 0 ? -30 : 30, opacity: 0 });
    ScrollTrigger.create({
      trigger: itemRef.current,
      start: "top 85%",
      onEnter: () => gsap.to(itemRef.current, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }),
      once: true,
    });
  });

  return (
    <div ref={itemRef} className="relative pl-8 pb-12 border-l-2 border-accent-primary-start/30 last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-accent-primary-start to-accent-primary-end" />
      <div className="bg-bg-surface border border-border-default rounded-2xl p-6 hover:shadow-xl hover:shadow-accent-primary-start/10 transition-all duration-300">
        <h3 className="text-xl font-semibold text-text-primary">{experience.role}</h3>
        <p className="text-accent-primary-start font-medium">{experience.company}</p>
        <p className="text-text-muted text-sm mt-1 mb-3">{experience.period}</p>
        <p className="text-text-muted">{experience.description}</p>
      </div>
    </div>
  );
}

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openCard, setOpenCard] = useState<number | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".hero-content", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(".bg-blob", {
          scale: 0.8,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  const toggleCard = (id: number) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <AnimatedBackground />

      <section className="relative py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-text-primary">
              My <span className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
              A passionate developer with expertise in building modern web applications
            </p>
            <Button className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
            Work Experience
          </h2>
          <div className="space-y-4">
            {workExperience.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isOpen={openCard === experience.id}
                onToggle={() => toggleCard(experience.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-surface border border-border-default rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-text-primary">Technical Skills</h3>
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
            <div className="bg-bg-surface border border-border-default rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-text-primary">Additional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "Docker", "Kubernetes", "GraphQL", "REST APIs", "Agile", "Figma", "Jest", "CI/CD", "AWS Lambda", "Redis", "WebSockets"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-bg-base rounded-full text-text-muted border border-border-default hover:border-accent-primary-start hover:text-accent-primary-start transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
            Experience Timeline
          </h2>
          <div className="max-w-2xl mx-auto">
            {workExperience.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m available for freelance projects and full-time opportunities. Let&apos;s discuss how I can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-border-default text-text-primary hover:bg-bg-surface hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </Link>
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
