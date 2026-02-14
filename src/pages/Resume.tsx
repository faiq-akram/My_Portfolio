import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import GlowCard from "@/components/ui/GlowCard";
import { Briefcase, GraduationCap, Award, Code2, Download } from "lucide-react";

const experience = [
  {
    title: "WordPress Developer",
    company: "Connexix",
    period: "2024  MAY – 2024 NOVEMBER",
    description: "Worked as a WordPress Developer, designing, building, andoptimizing websites, landing pages, and custom themes. Focused oncreating responsive, user-friendly sites that improve performance andoverall business efficiency. Skilled in plugin integration, pagebuilders, and streamlining client website operations.",
achievements: [
  "Built responsive WordPress websites",
  "Customized themes and pages for clients",
  "Used plugins and page builders effectively",
]
  },
  {
    title: "Full-Stack Web Developer",
    company: "Webbugs",
    period: "2025 JANUARY – 2025 September",
    description: "Worked as a Full-Stack Web Developer specializing in buildingdynamic and responsive web applications. Designed andimplemented RESTful APIs using Django and integrated them withReact.js frontend, optimized application performance, managedPostgreSQL databases, and ensured seamless user experiencesacross all devices. Collaborated on end-to-end development, from UIdesign to backend architecture.",
achievements: [
  "Developed full-stack web applications",
  "Connected Django backend with React frontend",
  "Improved website performance and user experience",
]
  },
]; 

const education = [
   {
    degree: "BS Computer Science",
    school: "Superior University, Lahore",
    period: "2022 - 2025",
  },
  // {
  //   degree: "F.Sc Pre-Engineering",
  //   school: "Punjab Collage, Lahore",
  //   period: "2020 - 2022",
  // },
];

const skills = [
  { category: "Frontend", items: ["React", "Javascript", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn"] },
  { category: "Backend", items: ["Python", "Django", "Django Rest Framework", "PostgreSQL"] },
];

const Resume = () => {
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
              <span className="section-title">Resume</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">
                My <span className="gradient-text">Professional Journey</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my experience, education, and technical expertise
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:glow-effect transition-all duration-300"
              >
              
              
              </motion.a>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Experience */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Briefcase className="text-primary" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold">Experience</h2>
                  </div>
                  <div className="space-y-6">
                    {experience.map((job, index) => (
                      <GlowCard key={job.title} delay={index * 0.1}>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <p className="text-primary">{job.company}</p>
                          </div>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-center gap-2 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </GlowCard>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <GraduationCap className="text-primary" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold">Education</h2>
                  </div>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <GlowCard key={edu.degree} delay={index * 0.1}>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">{edu.degree}</h3>
                            <p className="text-primary">{edu.school}</p>
                          </div>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">{edu.description}</p>
                      </GlowCard>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Skills */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Code2 className="text-primary" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold">Skills</h2>
                  </div>
                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-4"
                      >
                        <h3 className="text-sm font-semibold text-primary mb-3">
                          {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs bg-secondary rounded-lg text-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Resume;
