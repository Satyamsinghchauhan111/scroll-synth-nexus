import { motion } from 'framer-motion';

export const FloatingShapes = () => {

  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="floating-shape absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: shape.duration, 
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Geometric shapes with different styles */}
          {shape.id % 4 === 0 && (
            <div className="w-full h-full bg-gradient-to-br from-neon-cyan/30 to-transparent rounded-full blur-sm" />
          )}
          {shape.id % 4 === 1 && (
            <div className="w-full h-full bg-gradient-to-br from-neon-purple/30 to-transparent transform rotate-45 blur-sm" />
          )}
          {shape.id % 4 === 2 && (
            <div className="w-full h-full bg-gradient-to-br from-electric-blue/30 to-transparent clip-path-triangle blur-sm" 
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          )}
          {shape.id % 4 === 3 && (
            <div className="w-full h-full bg-gradient-to-br from-neon-pink/30 to-transparent rounded-lg blur-sm" />
          )}
        </motion.div>
      ))}
      
      {/* Parallax grid lines */}
      <motion.div 
        className="absolute inset-0"
        animate={{ 
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};