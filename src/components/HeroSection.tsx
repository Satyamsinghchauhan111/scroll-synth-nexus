import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GlowButton } from './GlowButton';
import { ThemeToggle } from './ThemeToggle';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Mouse-based transforms
  const mouseX = useSpring(mousePosition.x * 20, { stiffness: 200, damping: 30 });
  const mouseY = useSpring(mousePosition.y * 20, { stiffness: 200, damping: 30 });

  const title = "FUTURE TECH";
  const subtitle = "Experience the next generation of digital innovation";
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <ThemeToggle />
      
      {/* Parallax background layers */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />
      </motion.div>
      
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-blue/5 rounded-full blur-2xl" />
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="text-center z-10 relative"
        style={{ x: mouseX, y: mouseY }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated title */}
        <div className="mb-8 overflow-hidden">
          <motion.h1 className="text-6xl md:text-8xl font-bold">
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  type: "spring" as const,
                  stiffness: 100
                }}
                className="inline-block text-gradient"
                style={{ 
                  textShadow: isHovered ? '0 0 20px rgba(34, 211, 238, 0.8)' : 'none',
                  transition: 'text-shadow 0.3s ease'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        
        {/* Animated subtitle with typewriter effect */}
        <motion.div 
          className="mb-8 h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        
        {/* Enhanced buttons with stagger animation */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 0.8, type: "spring" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <GlowButton variant="primary" size="lg">
              Explore Technology
            </GlowButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <GlowButton variant="secondary" size="lg">
              View Portfolio
            </GlowButton>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced central hologram with more complex animations */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.8 }}
        style={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30
        }}
      >
        {/* Outer ring */}
        <motion.div 
          className="w-96 h-96 rounded-full border-2 border-neon-cyan/50 relative"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Middle ring */}
          <motion.div 
            className="absolute inset-8 rounded-full border border-neon-purple/50 flex items-center justify-center"
            animate={{ 
              rotate: -360,
              borderColor: ["rgba(147, 51, 234, 0.5)", "rgba(34, 211, 238, 0.5)", "rgba(147, 51, 234, 0.5)"]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              borderColor: { duration: 3, repeat: Infinity }
            }}
          >
            {/* Inner ring */}
            <motion.div 
              className="w-full h-full rounded-full border border-electric-blue/50 flex items-center justify-center"
              animate={{ 
                rotate: 360,
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Central core */}
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 blur-lg"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Floating particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-cyan rounded-full"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-4px',
                marginLeft: '-4px'
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 150,
                y: Math.sin((i * Math.PI * 2) / 6) * 150,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center"
          animate={{ borderColor: ["rgba(34, 211, 238, 0.5)", "rgba(147, 51, 234, 0.5)", "rgba(34, 211, 238, 0.5)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};