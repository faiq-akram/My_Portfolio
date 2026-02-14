import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/20 via-transparent to-primary/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title">Let's Work Together</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Have a Project in <span className="gradient-text text-glow">Mind?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to work on new challenges and collaborate with 
            innovative teams. Let's create something amazing together.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:glow-effect transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="flex items-center gap-2 px-8 py-4 glass-card hover:bg-secondary/50 font-medium transition-all duration-300"
            >
              faiqakram2004@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
