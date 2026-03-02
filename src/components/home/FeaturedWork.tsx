import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import ai_chat from "../../assets/ai_chat.jpeg";
import responsive from "../../assets/repponsive_web_design.jpeg";
import portfolio from "../../assets/portfolio_web.jpeg";

const projects = [
  {
    title: "AI-Chat Application",
    description:
      "A real-time AI-powered chat application built with Next.js, enabling intelligent conversations and predictive responses.",
    tags: ["Next.js", "PostgreSQL"],
    image: ai_chat, // use imported image variable
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
];

export const FeaturedWork = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="section-title">Featured Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Recent <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View All Projects
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image} // actually render the image
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                >
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm">
                    View Project
                  </span>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
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
      </div>
    </section>
  );
};

export default FeaturedWork;
