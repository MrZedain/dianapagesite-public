"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/Contemporaries.jpg"; // high-res image
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      {/* Low-res blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/collections/dwellers/lowres/Contemporaries.jpg')",
          filter: "blur(40px)",
          opacity: loaded ? 0 : 1, // fade out when high-res loaded
        }}
      />
      {/* High-res background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/Contemporaries.jpg')",
          opacity: loaded ? 1 : 0, // fade in when loaded
        }}
      />
      {/* Content */}
      <main className="relative flex min-h-screen w-full max-w-3xl flex-col items-center justify-between">
      </main>
    </div>
  );
}
