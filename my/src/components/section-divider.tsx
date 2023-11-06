"use client"
import { motion } from "framer-motion";
export function Divider() {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.2,
              duration: 0.9,}}
          ></motion.div>
          
  );
}
