import { motion } from 'framer-motion';
import { GlowButton } from './GlowButton';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          Future Tech
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Experience the next generation of digital innovation with cutting-edge technology and futuristic design
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <GlowButton variant="primary" size="lg">
            Explore Technology
          </GlowButton>
          <GlowButton variant="secondary" size="lg">
            View Portfolio
          </GlowButton>
        </motion.div>
      </div>
      
      {/* Central hologram effect */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <div className="w-96 h-96 rounded-full border-2 border-neon-cyan/50 relative">
          <motion.div 
            className="absolute inset-4 rounded-full border border-neon-purple/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-8 rounded-full border border-electric-blue/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-lg" />
        </div>
      </motion.div>
    </section>
  );
};