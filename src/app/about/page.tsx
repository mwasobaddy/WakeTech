"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Code2,
  Database,
  Terminal,
  Cloud,
  BookOpen,
  Mountain,
  Music,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const journey = [
  {
    year: "2020",
    title: "Started Coding",
    description: "Began my journey into software development with HTML, CSS, and JavaScript.",
  },
  {
    year: "2021",
    title: "First Professional Role",
    description: "Joined a Nairobi-based startup as a junior developer, building web applications.",
  },
  {
    year: "2022",
    title: "Specialization",
    description: "Focused on full-stack development with React, Node.js, and cloud technologies.",
  },
  {
    year: "2023",
    title: "Founded WakeTech",
    description: "Started WakeTech to deliver custom software solutions to clients worldwide.",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code", "Figma"],
  },
  {
    category: "DevOps",
    items: ["AWS", "CI/CD", "Linux", "Nginx"],
  },
];

const experience = [
  {
    company: "WakeTech",
    role: "Founder & Lead Developer",
    period: "2023 - Present",
    achievements: [
      "Building custom software solutions for clients",
      "Leading technical decisions and architecture",
    ],
  },
  {
    company: "TechSavanna",
    role: "Full-Stack Developer",
    period: "2021 - 2023",
    achievements: [
      "Developed multiple web applications for clients",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2020 - 2021",
    achievements: [
      "Built websites for local businesses",
      "Learned modern web technologies",
    ],
  },
];

const education = [
  {
    degree: "Computer Science",
    institution: "University of Nairobi",
    year: "2019",
  },
];

const certifications = [
  "AWS Certified Developer Associate",
  "Meta Front-End Developer Certificate",
  "freeCodeCamp Responsive Web Design",
];

const interests = [
  { icon: Mountain, label: "Hiking" },
  { icon: BookOpen, label: "Reading" },
  { icon: Music, label: "Music" },
];

function AnimatedCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to({ value: 0 }, {
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            setDisplayValue(Math.round(this.targets()[0].value));
          },
        });
      },
      once: true,
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="stat-item text-center">
      <div className="text-3xl sm:text-4xl font-bold text-accent-primary-start">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm text-text-muted mt-1">{label}</div>
    </div>
  );
}

function GlowingProfile() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      boxShadow: "0 0 30px rgba(255, 107, 53, 0.4), 0 0 60px rgba(0, 78, 137, 0.2)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="profile-image relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary-start to-accent-primary-end opacity-40 blur-xl" />
      <div className="relative w-full h-full rounded-full">
        <img 
          src="https://portifolio-9dy5.vercel.app/assets/hero-removebg-preview-3535e551.png" 
          alt="Developer Avatar" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="relative pl-12">
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary-start via-accent-primary-end to-accent-primary-start" />
      {journey.map((item, i) => (
        <div key={item.year} className="journey-item relative pb-8 last:pb-0 group">
          <div className="absolute left-[-2.1rem] top-1 w-4 h-4 rounded-full bg-accent-primary-start border-4 border-bg-base group-hover:scale-125 transition-transform duration-300" />
          <div className="absolute left-[-1.5rem] top-2 w-2 h-2 rounded-full bg-accent-primary-end opacity-50 animate-pulse" />
          <div className="text-sm font-bold text-accent-primary-start mb-1">
            {item.year}
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-primary-start transition-colors">
            {item.title}
          </h3>
          <p className="text-text-muted text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".about-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".about-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
        });

        gsap.from(".profile-content", {
          x: -30,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });

        gsap.from(".profile-image", {
          x: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        });

        gsap.from(".stat-item", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 85%",
          },
        });

        gsap.from(".journey-item", {
          x: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".journey-section",
            start: "top 80%",
          },
        });

        const skillCards = document.querySelectorAll(".skill-category");
        skillCards.forEach((card) => {
          gsap.set(card, { y: 30, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => gsap.to(card, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }),
            once: true,
          });
        });

        const expCards = document.querySelectorAll(".experience-item");
        expCards.forEach((card) => {
          gsap.set(card, { y: 30, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => gsap.to(card, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }),
            once: true,
          });
        });

        gsap.from(".interest-item", {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".interests-section",
            start: "top 85%",
          },
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
            <h1 className="about-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary">
              About <span className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">WakeTech</span>
            </h1>
            <p className="about-subtitle text-xl sm:text-2xl text-text-muted flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-accent-primary-start" />
              Custom Software Solutions
            </p>
          </div>

          <div className="profile-section grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="profile-content">
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                WakeTech is a software studio dedicated to transforming ideas into powerful 
                digital products. Based in Kenya, we help businesses worldwide build custom 
                solutions that drive growth and innovation.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                With years of experience in software development, we specialize in building 
                scalable web applications using modern technologies like React, Node.js, and cloud services. 
                We believe in clean code, clear communication, and delivering results that exceed expectations.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Our team is passionate about creating digital experiences that matter. 
                Whether you're a startup or enterprise, we work with you to bring your vision to life.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-accent-primary-start hover:underline text-lg">
                Let&apos;s work together <Sparkles className="h-5 w-5" />
              </Link>
            </div>
            <div className="profile-image flex justify-center lg:justify-end h-full">
              <GlowingProfile />
            </div>
          </div>

          <div className="stats-section flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-24">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="journey-section py-20 sm:py-32 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-accent-primary-start" />
            My Journey
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="skills-section py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary flex items-center gap-3">
            <Code2 className="h-8 w-8 text-accent-primary-start" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="skill-category group bg-bg-surface border border-border-default rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent-primary-start/10 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-text-primary group-hover:text-accent-primary-start transition-colors">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-4 py-2 bg-bg-base rounded-full text-sm font-medium text-text-muted group-hover:bg-accent-primary-start/10 group-hover:text-accent-primary-start transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="experience-section py-20 sm:py-32 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary flex items-center gap-3">
            <Terminal className="h-8 w-8 text-accent-primary-start" />
            Experience
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="experience-item group bg-bg-base rounded-2xl p-8 border border-border-default hover:shadow-2xl hover:shadow-accent-primary-start/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary-start transition-colors">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-sm font-medium text-accent-primary-start mb-4">
                  {exp.company}
                </p>
                <span className="text-sm text-text-muted bg-bg-surface px-4 py-2 rounded-full inline-block mb-4">
                  {exp.period}
                </span>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="text-sm text-text-muted flex items-start"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent-primary-start mt-2 mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-accent-primary-start" />
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-text-primary">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex items-center gap-4 p-6 bg-bg-surface rounded-2xl border border-border-default"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent-primary-start/10 flex items-center justify-center">
                      <GraduationCap className="h-7 w-7 text-accent-primary-start" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-lg">{edu.degree}</p>
                      <p className="text-text-muted">
                        {edu.institution}, {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-text-primary">Certifications</h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 p-4 bg-bg-surface rounded-xl border border-border-default"
                  >
                    <Award className="h-5 w-5 text-accent-primary-start flex-shrink-0" />
                    <span className="text-text-muted">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="interests-section py-20 sm:py-32 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary flex items-center gap-3">
            <Heart className="h-8 w-8 text-accent-primary-start" />
            Beyond Code
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-2xl">
            When I&apos;m not building software, I enjoy exploring new places, reading
            tech literature, and appreciating music. I&apos;m also passionate
            about growing Kenya&apos;s tech ecosystem and mentoring aspiring developers.
          </p>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest) => (
              <div
                key={interest.label}
                className="interest-item group flex items-center gap-3 px-6 py-4 bg-bg-base border border-border-default rounded-2xl hover:shadow-xl hover:shadow-accent-primary-start/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <interest.icon className="h-6 w-6 text-accent-primary-start" />
                </div>
                <span className="text-base font-medium text-text-muted group-hover:text-text-primary transition-colors">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-text-primary">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how I can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-10 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}