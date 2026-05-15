import CursorGlow from "@/components/CursorGlow";
import CursorTrail from "@/components/CursorTrail";
import FloatingOrbs from "@/components/FloatingOrbs";
import GridBackground from "@/components/GridBackground";
import Loader from "@/components/Loader";
import NoiseOverlay from "@/components/NoiseOverlay";
import Particles from "@/components/Particles";
import SectionTransition from "@/components/SectionTransition";

import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import Programs from "@/sections/Programs";
import Stats from "@/sections/Stats";
import Campus from "@/sections/Campus";
import Future from "@/sections/Future";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Loader />

      <NoiseOverlay />
      <GridBackground />
      <Particles />
      <FloatingOrbs />

      <CursorGlow />
      <CursorTrail />

      <Navbar />

      <Hero />
      <SectionTransition />

      <Programs />
      <SectionTransition />

      <Stats />
      <SectionTransition />

      <Campus />
      <SectionTransition />

      <Future />
      <SectionTransition />

      <Testimonials />
      <SectionTransition />

      <CTA />

      <Footer />
    </main>
  );
}
