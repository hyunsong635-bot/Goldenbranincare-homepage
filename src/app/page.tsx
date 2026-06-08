import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionFlowSection from "@/components/SolutionFlowSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-start min-h-screen bg-[#fff9ee]">
      <Header />
      <main className="flex flex-col w-full pt-[72px] lg:pt-[104px]">
        <HeroSection />
        <ProblemSection />
        <SolutionFlowSection />
        <KeyFeaturesSection />
        <TargetAudienceSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
