"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.2, ease: "easeInOut" },
          }}
          className="fixed top-0 w-screen h-screen pointer-events-none bg-primary"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
