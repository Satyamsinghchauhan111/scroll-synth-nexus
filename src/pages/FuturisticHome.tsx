import { motion } from 'framer-motion';
import { FloatingShapes } from '@/components/FloatingShapes';
import { HeroSection } from '@/components/HeroSection';
import { GadgetCard } from '@/components/GadgetCard';
import { InfoPanel } from '@/components/InfoPanel';
import { GlowButton } from '@/components/GlowButton';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Wifi, 
  Brain, 
  Rocket,
  Eye,
  Globe
} from 'lucide-react';

export const FuturisticHome = () => {
  const gadgets = [
    {
      title: "Neural Interface",
      description: "Advanced brain-computer interface technology for seamless digital interaction.",
      icon: <Brain />
    },
    {
      title: "Quantum Processor",
      description: "Next-generation computing power with quantum entanglement capabilities.",
      icon: <Cpu />
    },
    {
      title: "Energy Shield",
      description: "Protective force field technology powered by renewable energy sources.",
      icon: <Shield />
    },
    {
      title: "Holographic Display",
      description: "3D volumetric displays with touch-responsive holographic interfaces.",
      icon: <Eye />
    },
    {
      title: "Plasma Engine",
      description: "Revolutionary propulsion system for interplanetary travel capabilities.",
      icon: <Rocket />
    },
    {
      title: "Neural Network",
      description: "AI-powered connectivity mesh for instant global communication.",
      icon: <Wifi />
    }
  ];

  return (
    <div className="relative min-h-screen">
      <FloatingShapes />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Gadgets Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Future Gadgets
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover revolutionary technologies that will reshape our world
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gadgets.map((gadget, index) => (
              <GadgetCard
                key={index}
                title={gadget.title}
                description={gadget.description}
                icon={gadget.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Info Panels Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          <InfoPanel
            title="Advanced AI Integration"
            content="Our cutting-edge artificial intelligence seamlessly integrates with human cognition, creating unprecedented possibilities for enhanced productivity and creativity. Experience the future of human-machine collaboration."
            direction="left"
            delay={0}
          />
          
          <InfoPanel
            title="Quantum Computing Revolution"
            content="Harness the power of quantum mechanics to solve complex problems at speeds previously thought impossible. Our quantum processors redefine the boundaries of computational capability."
            direction="right"
            delay={0.2}
          />
          
          <InfoPanel
            title="Sustainable Energy Solutions"
            content="Revolutionary clean energy technologies that power our futuristic devices while maintaining perfect harmony with the environment. The future is both powerful and sustainable."
            direction="left"
            delay={0.4}
          />
        </div>
      </section>
      
      {/* Technology Showcase */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-card/30 backdrop-blur-md border border-neon-cyan/30 rounded-2xl p-12 relative overflow-hidden"
          >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-8 text-gradient relative z-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Enter the Future?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join us on a journey beyond imagination. Experience technology that transforms reality and opens doors to infinite possibilities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center relative z-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <GlowButton variant="primary" size="lg">
                <Globe className="mr-2 h-5 w-5" />
                Explore Universe
              </GlowButton>
              <GlowButton variant="accent" size="lg">
                <Zap className="mr-2 h-5 w-5" />
                Power Up
              </GlowButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-neon-cyan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Future Tech. Advancing humanity through technology.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};