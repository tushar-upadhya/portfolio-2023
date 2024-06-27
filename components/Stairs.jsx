import { reverseIndex, stairAnimation } from "@/lib/stairAnimation";
import { motion } from "framer-motion";

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="relative w-full h-full bg-white"
          />
        );
      })}
    </>
  );
};

export default Stairs;
