import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FormatSection from "@/components/FormatSection";
import FieldsSection from "@/components/FieldsSection";
import TeamSection from "@/components/TeamSection";
import SurveySection from "@/components/SurveySection";
import WaitlistSection from "@/components/WaitlistSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FormatSection />
        <FieldsSection />
        <TeamSection />
        <SurveySection />
        <WaitlistSection />
      </main>
      <FooterSection />
    </>
  );
}
