"use client";

import Image from "next/image";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import References from "@/components/References";
import Contact from "@/components/Contact";




export default function Home() {

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* References Section */}
      <References />

      {/* Contact Section */}
      <Contact />
      
    </main>
  );
}
