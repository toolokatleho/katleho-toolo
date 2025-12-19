import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Secure Banking Portal",
    category: "Security Systems",
    description: "A secure web portal for financial transactions implementing 2FA, end-to-end encryption, and fraud detection algorithms.",
    tech: ["Java", "Spring Security", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Distributed Sensor Network",
    category: "C++ / IoT",
    description: "Middleware for collecting and processing data from thousands of IoT sensors in real-time with minimal latency.",
    tech: ["C++", "MQTT", "Redis"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "E-Commerce Dashboard",
    category: "Web App",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    tech: ["React", "Node.js", "Recharts"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Inventory Mgmt System",
    category: "Database Systems",
    description: "High-performance inventory tracking system optimized for complex queries and large datasets.",
    tech: ["SQL", "Python", "FastAPI"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "AI Traffic Controller",
    category: "AI / Algorithms",
    description: "Simulation software using genetic algorithms to optimize traffic light patterns and reduce congestion.",
    tech: ["Python", "TensorFlow", "PyGame"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Portfolio v1",
    category: "UI/UX",
    description: "My previous portfolio website focusing on minimalist design and accessibility standards.",
    tech: ["HTML/CSS", "JavaScript", "Figma"],
    color: "from-gray-500 to-slate-500"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          Featured Projects<span className="text-primary">.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A selection of work demonstrating competence in secure systems, algorithms, and user interface design.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-all h-full flex flex-col"
          >
            {/* Abstract Cover */}
            <div className={`h-40 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10 border border-primary/20">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto">
                <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button variant="default" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
