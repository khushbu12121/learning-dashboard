"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      className="bg-gradient-to-r from-purple-700 to-blue-700 p-8 rounded-3xl mb-6"
    >
      <h1 className="text-4xl font-bold">
        Welcome Back, Khushbu 👋
      </h1>

      <p className="mt-3 text-zinc-200">
        Learning Streak: 🔥 12 Days
      </p>
    </motion.div>
  );
}