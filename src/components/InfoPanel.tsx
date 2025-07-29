import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface InfoPanelProps {
  title: string;
  content: string;
  direction?: 'left' | 'right';
  delay?: number;
}

export const InfoPanel = ({ title, content, direction = 'left', delay = 0 }: InfoPanelProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === 'left' ? [-100, 0] : [100, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      initial={{ 
        x: direction === 'left' ? -200 : 200, 
        opacity: 0 
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        duration: 1, 
        delay,
        type: "spring",
        stiffness: 80 
      }}
      className="relative"
    >
      <div className="bg-card/50 backdrop-blur-md border border-neon-cyan/30 rounded-lg p-8 relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-purple/5"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 blur-sm" />
        
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl font-bold mb-4 text-gradient"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-foreground leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
          >
            {content}
          </motion.p>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-purple" />
      </div>
    </motion.div>
  );
};