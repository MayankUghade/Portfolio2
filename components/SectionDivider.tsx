"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center">
      <motion.div
        className="bg-gray-200 my-10 h-16 w-1 rounded-full dark:bg-opacity-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    </div>
  );
}
