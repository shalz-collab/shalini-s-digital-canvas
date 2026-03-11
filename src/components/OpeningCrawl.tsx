import { motion } from "framer-motion";

const OpeningCrawl = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ perspective: "300px" }}>
      {/* Stars overlay */}
      <div className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, hsl(220 20% 3% / 0.0) 40%, hsl(220 20% 3% / 0.95) 100%)",
        }}
      />

      <motion.div
        className="text-center"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "50% 100%",
        }}
        initial={{ rotateX: 25, translateY: 60, opacity: 0 }}
        animate={{ rotateX: 25, translateY: -20, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <motion.p
          className="text-primary/60 text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          ★ A Long Time Ago in a Galaxy Far, Far Away... ★
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 font-display tracking-wider uppercase">
            Hi, I'm <span className="glow-text">Shalini MK</span>
          </h1>
        </motion.div>

        <motion.div
          className="text-primary/40 text-[10px] font-mono uppercase tracking-[0.2em] mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          Episode I · The Developer Awakens
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OpeningCrawl;
