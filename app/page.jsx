"use client";
import Loading from "@/components/loading/loading";
import "../styles/globals.css";

import React, { useState, useEffect } from "react";

import Hero from "@/components/hero/Hero";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return isLoading ? <Loading /> : <Hero />;
}
