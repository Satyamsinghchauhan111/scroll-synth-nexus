import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export const GlowButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  disabled = false 
}: GlowButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-neon-cyan to-electric-blue text-primary-foreground hover:from-electric-blue hover:to-neon-cyan glow-effect';
      case 'secondary':
        return 'bg-gradient-to-r from-neon-purple to-neon-pink text-secondary-foreground hover:from-neon-pink hover:to-neon-purple glow-purple';
      case 'accent':
        return 'bg-gradient-to-r from-neon-green to-cyber-orange text-accent-foreground hover:from-cyber-orange hover:to-neon-green';
      default:
        return 'bg-gradient-to-r from-neon-cyan to-electric-blue text-primary-foreground hover:from-electric-blue hover:to-neon-cyan glow-effect';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative overflow-hidden border-0 transition-all duration-300 
          ${getVariantClasses()} 
          ${getSizeClasses()}
          disabled:opacity-50 disabled:cursor-not-allowed
          group
        `}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Button content */}
        <span className="relative z-10 font-semibold tracking-wide">
          {children}
        </span>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-md"
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(34, 211, 238, 0.4)',
              '0 0 30px rgba(34, 211, 238, 0.6)',
              '0 0 20px rgba(34, 211, 238, 0.4)'
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </Button>
    </motion.div>
  );
};