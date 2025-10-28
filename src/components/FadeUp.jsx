// src/components/FadeUp.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      className="fade-up"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}