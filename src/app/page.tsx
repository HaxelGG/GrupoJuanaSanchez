import { EventStrip } from "@/components/sections/EventStrip";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Declaration } from "@/components/sections/Declaration";
import { PullQuote } from "@/components/sections/PullQuote";
import { Timeline } from "@/components/sections/Timeline";
import { TrioIntro } from "@/components/sections/TrioIntro";
import { LaunchCountdown } from "@/components/sections/LaunchCountdown";
import { ChapterJuana } from "@/components/sections/ChapterJuana";
import { ChapterLolikas } from "@/components/sections/ChapterLolikas";
import { ChapterPrintellar } from "@/components/sections/ChapterPrintellar";
import { Manifesto } from "@/components/sections/Manifesto";
import { FimiEvent } from "@/components/sections/FimiEvent";
import { Shops } from "@/components/sections/Shops";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <EventStrip />
      <Nav />
      <main>
        <Hero />
        <Declaration />
        <PullQuote />
        <Timeline />
        <TrioIntro />
        <LaunchCountdown />
        <ChapterJuana />
        <ChapterLolikas />
        <ChapterPrintellar />
        <Manifesto />
        <FimiEvent />
        <Shops />
      </main>
      <Footer />
    </>
  );
}
