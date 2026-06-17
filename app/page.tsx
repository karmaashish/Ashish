"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIEmployees from "@/components/AIEmployees";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <Hero />
      <AIEmployees />
      <HowItWorks />
      <Comparison />
      <Industries />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
