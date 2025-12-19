import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Brain, Globe } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Java, C++, C", level: 90 },
    { name: "Web Development (React, Node, HTML/CSS)", level: 85 },
    { name: "Database Management (SQL)", level: 80 },
    { name: "System Security & Analysis", level: 85 },
    { name: "HCI & UI/UX Design", level: 75 },
    { name: "Distributed Systems & Networking", level: 80 },
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          About Me<span className="text-primary">.</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I am Katleho Samuel Toolo, a multidisciplinary IT Professional with a strong foundation in software engineering, secure systems, and intelligent interfaces.
        </p>
      </motion.div>

      {/* Bio Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-muted-foreground"
        >
          <p>
            I hold a <strong>BSc in Information Technology</strong>, where I honed my skills in a rigorous academic environment covering everything from low-level programming in C to advanced Artificial Intelligence algorithms.
          </p>
          <p>
            My approach to development is holistic: I don't just write code; I engineer solutions that are secure, efficient, and user-centric. I thrive in complex environments where performance and security are paramount, yet I possess the creative sensibility to design intuitive Human-Computer Interfaces.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">Security Focused</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Full Stack</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">System Analyst</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">HCI Specialist</Badge>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-secondary/20 p-8 rounded-2xl border border-white/5"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="text-primary" /> Technical Proficiency
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-secondary" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline / Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-10">Academic Foundation</h2>
        <div className="border-l-2 border-primary/30 ml-4 space-y-12">
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,200,0.5)]" />
            <h3 className="text-xl font-bold">BSc in Information Technology</h3>
            <p className="text-primary font-medium mb-2">Graduated with Distinction</p>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive coursework including Web Design, Software Engineering, Databases, Computer Networks, System Security, HCI, Distributed Systems, and AI.
            </p>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-secondary border border-primary/50" />
            <h3 className="text-xl font-bold">Specialized Certifications</h3>
            <p className="text-muted-foreground max-w-2xl mt-2">
              Continuously updating skills in modern web frameworks, cybersecurity protocols, and cloud infrastructure.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
