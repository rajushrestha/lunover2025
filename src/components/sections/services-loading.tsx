"use client";

import React from 'react';

export function ServicesLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-background/60 p-8 md:p-10 rounded-3xl border border-border/30 shadow-sm h-[300px] animate-pulse"
        />
      ))}
    </div>
  );
}
