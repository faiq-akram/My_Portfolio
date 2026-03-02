import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import ai_chat from "../assets/ai_chat.jpeg";
import responsive from "../assets/repponsive_web_design.jpeg";
import portfolio from "../assets/portfolio_web.jpeg";


const projects = [
  {
    title: "AI-Chat Application",
    description:
      "A real-time AI-powered chat application built with React and Node.js, enabling intelligent conversations and predictive responses.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: ai_chat,
    link: "#",
  },
  {
    title: "Modern Responsive Web Application",
    description:
      "A modern, fully responsive web application built with React and Tailwind CSS, designed for smooth navigation and seamless user experience.",
    tags: ["React", "Tailwind Css"],
    image: responsive,
    link: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A beautifully designed personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and contact information.",
    tags: ["React", "Tailwind Css"],
    image: portfolio,
    link: "#",
  },
  {
    title: "Learning Management System",
    description:
      "A web-based learning management system that allows users to manage courses, track progress, and access learning content through a clean and responsive interface.",
    tags: ["React", "Tailwind Css"],
    // image: ,
    link: "#",
  },
  {
  title: "Athletic Connect",
  description:
    "An online booking and tournament platform that allows players and teams to book sports arenas, register for tournaments, and manage participation seamlessly.",
  tags: ["React", "Tailwind CSS", "Django"],
  // image: portfolio,
  link: "#",
},
{
  title: "Mobile POS System",
  description:
    "A mobile-based Point of Sale system designed for businesses to manage sales, orders, and inventory in real-time, with fast performance and user-friendly mobile interface.",
  tags: ["React", "Tailwind CSS", "Django"],
  // image: portfolio,
  link: "#",
},
{
  title: "E-commerce Admin Panel",
  description:
    "A comprehensive admin dashboard for managing products, categories, orders, and users, with integrated analytics, inventory tracking, and CRUD operations.",
  tags: ["React", "Tailwind CSS", "Django"],
  // image: portfolio,
  link: "#",
},
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <main className="pt-32 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="section-title">Portfolio</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">
                Featured <span className="gradient-text">Projects</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A collection of projects I've worked on
              </p>
            </motion.div>

            {/* Projects Grid */}
            <section>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group glass-card overflow-hidden card-hover"
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ExternalLink className="text-primary" size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight
                          size={18}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Projects;
