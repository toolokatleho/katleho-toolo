import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Shield, Database, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import portrait from "@assets/generated_images/professional_portrait_of_a_software_developer.png";
import bg from "@assets/generated_images/abstract_dark_technology_background.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Hi, I’m <span className="text-primary">Katleho</span>
              <br />
              <span className="text-foreground/80 text-3xl md:text-5xl">
                Software Developer.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Specializing in Secure Systems, Web Development, and Intelligent Interfaces. Building the digital future with precision and robust engineering.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg" className="text-base font-medium h-12 px-8">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-base font-medium h-12 px-8 border-primary/20 hover:bg-primary/10 hover:text-primary">
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-secondary/50">
              <img 
                src={portrait} 
                alt="Katleho Samuel Toolo" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badges */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-white/10"
              >
                <div className="flex justify-between items-center text-sm font-mono text-primary">
                  <span>&lt;System.Secure /&gt;</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-secondary h-1 mt-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Quick Intro / Expertise */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors"
          >
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Systems</h3>
            <p className="text-muted-foreground">Implementing robust security protocols and safe software architecture.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors"
          >
            <Terminal className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">System Engineering</h3>
            <p className="text-muted-foreground">Low-level programming with C/C++ and high-performance computing.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors"
          >
            <Database className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Data & AI</h3>
            <p className="text-muted-foreground">Database management, distributed systems, and intelligent algorithms.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
