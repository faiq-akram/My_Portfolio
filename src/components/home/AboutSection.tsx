import { motion } from "framer-motion";
import { Code2, Palette, Zap, Brain } from "lucide-react";
import GlowCard from "../ui/GlowCard";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "Building scalable applications with React, Django, and modern cloud infrastructure.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces that users love to interact with.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring lightning-fast load times and smooth user experiences.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing intelligent features using cutting-edge AI.",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-title">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Passionate About <span className="gradient-text">Creating Impact</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            With over 1 year of experience in software development, I specialize in building 
            products that are not only functional but also delightful to use.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <GlowCard key={skill.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </GlowCard>
          ))}
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I started my journey as a self-taught developer, driven by curiosity and a passion 
                for problem-solving. Over the years, I've had the privilege of working with startups, 
                agencies, and enterprise companies.
              </p>
              <p className="text-muted-foreground">
                Today, I focus on creating AI-powered applications and helping businesses transform 
                their digital presence. I believe in writing clean, maintainable code and creating 
                experiences that truly matter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "React.js", level: 95 },
                { label: "TypeScript", level: 90 },
                { label: "Django", level: 85 },
                { label: "Python", level: 80 },
              ].map((skill) => (
                <div key={skill.label} className="glass-card p-4">
                  <div className="text-sm font-medium mb-2">{skill.label}</div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
