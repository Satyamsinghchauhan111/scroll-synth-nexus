import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="border-glow bg-background/80 backdrop-blur-md hover:glow-purple transition-all duration-300"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 text-neon-cyan" />
          ) : (
            <Moon className="h-4 w-4 text-neon-purple" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};