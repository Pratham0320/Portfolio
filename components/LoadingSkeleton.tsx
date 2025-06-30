"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        {/* Loading animation */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full" />
        </motion.div>

        {/* Loading text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Loading Portfolio
        </motion.h2>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Skeleton cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="animate-pulse">
                <div className="h-4 bg-white/20 rounded mb-4" />
                <div className="h-3 bg-white/15 rounded mb-2" />
                <div className="h-3 bg-white/15 rounded w-2/3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
