import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface GadgetCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const GadgetCard = ({ title, description, icon, delay = 0 }: GadgetCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [45, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, rotateY }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      <div className="bg-card border-glow rounded-lg p-6 h-full transition-all duration-300 hover:glow-purple backdrop-blur-sm bg-opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div 
          className="text-4xl mb-4 text-neon-cyan relative z-10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 text-gradient relative z-10">{title}</h3>
        <p className="text-muted-foreground relative z-10">{description}</p>
        
        <div className="absolute top-2 right-2 w-2 h-2 bg-neon-green rounded-full pulse-glow" />
      </div>
    </motion.div>
  );
};