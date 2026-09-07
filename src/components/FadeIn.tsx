import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

export const FadeIn = ({ children, delay = 0, direction = 'up', fullWidth = false, className, ...props }: FadeInProps) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={fullWidth ? `w-full ${className || ''}` : className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10%" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: 0.1
        }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
