"use client";

import React, { useEffect, useState } from 'react';

export function Fireflies({ count = 25 }) {
  const [fireflies, setFireflies] = useState<number[]>([]);

  useEffect(() => {
    setFireflies(Array.from({ length: count }, (_, i) => i));
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {fireflies.map((i) => (
        <div
          key={i}
          className="firefly"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};
