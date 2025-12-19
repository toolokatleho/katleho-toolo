import { motion } from "framer-motion";
import { Shield, Code, Layout, Database, Network, Smartphone } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Secure Software Development",
    description: "Building resilient applications with a security-first mindset. Implementing encryption, secure authentication, and vulnerability assessments."
  },
  {
    icon: Code,
    title: "Web & Front-End Development",
    description: "Creating responsive, modern web applications using React, TypeScript, and Tailwind CSS. Performance optimized and SEO friendly."
  },
  {
    icon: Layout,
    title: "System Design & Analysis",
    description: "Architecting scalable software solutions. Analyzing requirements to design efficient, maintainable systems."
  },
  {
    icon: Database,
    title: "Database Development",
    description: "Designing complex SQL schemas, optimizing queries, and ensuring data integrity for high-volume applications."
  },
  {
    icon: Network,
    title: "Network & Distributed Solutions",
    description: "Developing software for distributed environments, handling concurrency, and ensuring network reliability."
  },
  {
    icon: Smartphone,
    title: "UI/UX & HCI Interfaces",
    description: "Designing intuitive interfaces based on Human-Computer Interaction principles. Focusing on usability and accessibility."
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          My Services<span className="text-primary">.</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Delivering engineering excellence across the full software lifecycle.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group p-8 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/50 hover:bg-secondary/30 transition-all"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
