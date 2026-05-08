"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  ArrowRight, 
  Code2, 
  ExternalLink, 
  Code, 
  Smartphone, 
  Sparkles, 
  FolderOpen,
  Eye,
  Github,
  Globe,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
  category: "web" | "mobile" | "ai" | "opensource";
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with admin dashboard, payment integration, and inventory management system.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "web",
    featured: true,
  },
  {
    id: "2",
    title: "Real-time Analytics Dashboard",
    description: "Live dashboard with WebSocket updates, interactive charts, and data export features.",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Node.js", "D3.js", "WebSocket"],
    demo: "https://example.com",
    category: "web",
    featured: true,
  },
  {
    id: "3",
    title: "Mobile App API",
    description: "RESTful API for cross-platform mobile app with authentication and push notifications.",
    image: "/projects/api.jpg",
    tags: ["Express", "MongoDB", "JWT", "Firebase"],
    demo: "https://example.com",
    category: "web",
  },
  {
    id: "4",
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts, nutrition, and progress with social features.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    demo: "https://example.com",
    category: "mobile",
    featured: true,
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "AI-powered tool for generating marketing copy and social media posts.",
    image: "/projects/ai-content.jpg",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "ai",
  },
  {
    id: "6",
    title: "Open Source UI Library",
    description: "A lightweight component library for React applications with full documentation.",
    image: "/projects/ui-lib.jpg",
    tags: ["React", "TypeScript", "Rollup", "Storybook"],
    demo: "https://example.com",
    github: "https://github.com",
    category: "opensource",
  },
  {
    id: "7",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features.",
    image: "/projects/taskmgr.jpg",
    tags: ["Next.js", "Supabase", "Prisma"],
    demo: "https://example.com",
    category: "web",
  },
  {
    id: "8",
    title: "Weather Forecast App",
    description: "Beautiful weather app with forecasts, maps, and severe weather alerts.",
    image: "/projects/weather.jpg",
    tags: ["React Native", "Weather API", "Maps"],
    demo: "https://example.com",
    category: "mobile",
  },
];

const filters = [
  { id: "all", label: "All Projects", icon: FolderOpen },
  { id: "web", label: "Web Apps", icon: Code },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "ai", label: "AI/ML", icon: Sparkles },
  { id: "opensource", label: "Open Source", icon: Layers },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card group">
      <div className="bg-bg-surface border border-border-default rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent-primary-start/10 transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent-primary-start/10 to-accent-primary-end/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="h-16 w-16 text-accent-primary-start/30 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div className="flex gap-2">
              {project.demo && (
                <Link href={project.demo} target="_blank">
                  <Button size="sm" className="bg-accent-primary-start text-white hover:opacity-90">
                    <Eye className="mr-1 h-4 w-4" />
                    View
                  </Button>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <Button size="sm" variant="outline" className="border-accent-primary-start text-accent-primary-start hover:bg-accent-primary-start/10">
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </Button>
                </Link>
              )}
            </div>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white text-xs font-medium rounded-full shadow-lg">
              Featured
            </div>
          )}
        </div>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-accent-primary-start uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary-start transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted mb-5 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-bg-base rounded-full text-sm text-text-muted group-hover:bg-accent-primary-start/10 group-hover:text-accent-primary-start transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".projects-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".projects-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
        });

        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach((btn) => {
          gsap.set(btn, { y: 20, opacity: 0 });
          ScrollTrigger.create({
            trigger: btn,
            start: "top 90%",
            onEnter: () => gsap.to(btn, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }),
            once: true,
          });
        });

        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach((card) => {
          gsap.set(card, { y: 40, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: "top 90%",
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
            <h1 className="projects-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary">
              Our <span className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="projects-subtitle text-xl text-text-muted max-w-2xl mx-auto">
              A showcase of the digital products we&apos;ve built for clients worldwide.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white shadow-lg shadow-accent-primary-start/25"
                    : "bg-bg-surface border border-border-default text-text-muted hover:text-text-primary hover:border-accent-primary-start/50"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <filter.icon className="h-4 w-4" />
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Globe className="h-16 w-16 text-text-muted mx-auto mb-4 opacity-50" />
              <p className="text-text-muted text-lg">No projects in this category yet.</p>
              <p className="text-text-muted text-sm mt-2">Check back soon!</p>
            </div>
          )}

          <div className="cta-section relative py-20 mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-br from-accent-primary-start/10 to-accent-primary-end/10 border border-accent-primary-start/20 rounded-3xl p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
                  Have a project in mind?
                </h2>
                <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
                  We&apos;d love to hear about it. Let&apos;s discuss how we can help bring your vision to life.
                </p>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-accent-primary-start to-accent-primary-end text-white hover:opacity-90 hover:shadow-lg hover:shadow-accent-primary-start/25 transition-all duration-300 hover:scale-105 px-10 py-6 text-lg">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}