import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Star Wars wipe overlay */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, hsl(200 100% 55% / 0.3) 0%, hsl(260 80% 60% / 0.2) 50%, transparent 100%)",
        }}
        initial={{ scaleX: 1, transformOrigin: "left" }}
        animate={{ scaleX: 0, transformOrigin: "right" }}
        exit={{ scaleX: 1, transformOrigin: "left" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.div>
  );
}
