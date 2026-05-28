"use client";

import { useEffect, useState } from "react";

export default function PageProgressBar() {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Initial mount progress
    setWidth(30);
    const t1 = setTimeout(() => setWidth(70), 150);
    const t2 = setTimeout(() => setWidth(100), 400);
    const t3 = setTimeout(() => setVisible(false), 800); // fade out completed

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-[#ccff00] z-[9999] transition-all duration-500 ease-out pointer-events-none"
      style={{
        width: `${width}%`,
        opacity: width === 100 ? 0 : 1,
      }}
    />
  );
}
