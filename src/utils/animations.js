export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const headerSlideIn = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const logoHover = {
  whileHover: { rotate: 360 },
  transition: { duration: 0.8 }
};

export const navItemHover = {
  whileHover: { y: -2 }
};

export const buttonHover = {
  whileHover: { scale: 1.1, y: -5 },
  whileTap: { scale: 0.95 }
};

export const serviceCardHover = {
  whileHover: { scale: 1.03, rotateY: 5 }
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 360],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }
};
