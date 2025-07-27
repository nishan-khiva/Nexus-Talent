import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import IndustryCards from "./components/IndustryCards";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <IndustryCards />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
