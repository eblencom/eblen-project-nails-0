import ContactsSection from "@/components/landing/ContactsSection";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import PortfolioSection from "@/components/landing/PortfolioSection";
import PriceSection from "@/components/landing/PriceSection";
import PromoSection from "@/components/landing/PromoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PromoSection />
      <PriceSection />
      <PortfolioSection />
      <ContactsSection />
    </div>
  );
}
