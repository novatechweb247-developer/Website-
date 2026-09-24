import React from 'react';
import { motion, Variants } from 'motion/react';

interface ScrollPopProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scaleStart?: number;
  className?: string;
  once?: boolean;
}

export const ScrollPop: React.FC<ScrollPopProps> = ({
  children,
  delay = 0,
  direction = 'up',
  scaleStart = 0.88,
  className = '',
  once = false,
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 };
      case 'down':
        return { y: -40, x: 0 };
      case 'left':
        return { x: -40, y: 0 };
      case 'right':
        return { x: 40, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
      default:
        return { y: 40, x: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: scaleStart,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
        scale: { type: 'spring', stiffness: 220, damping: 20 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}> = ({ children, className = '', staggerDelay = 0.1, once = false }) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.88,
      y: 35,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
        scale: { type: 'spring', stiffness: 200, damping: 18 },
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
