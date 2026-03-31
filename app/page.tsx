"use client";

import { useState, useEffect, useMemo } from "react";
import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { GreetingSection } from "@/components/GreetingSection";
import { SponsorshipMenuSection } from "@/components/SponsorshipMenuSection";
import { DetailModal } from "@/components/DetailModal";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ProcessSection } from "@/components/ProcessSection";
import { AdDesignSection } from "@/components/AdDesignSection";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { getSponsorshipMenusWithIcons } from "@/lib/menuIcons";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<
    ReturnType<typeof getSponsorshipMenusWithIcons>[0] | null
  >(null);
  const [expandedImageSrc, setExpandedImageSrc] = useState<string | null>(null);

  const sponsorshipMenus = useMemo(() => getSponsorshipMenusWithIcons(), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 pb-20">
      <Nav
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <HeroSection />
      <GreetingSection />

      {activeMenu && (
        <DetailModal
          menu={activeMenu}
          onClose={() => setActiveMenu(null)}
          onExpandImage={setExpandedImageSrc}
        />
      )}

      {expandedImageSrc && (
        <ImageLightbox
          src={expandedImageSrc}
          onClose={() => setExpandedImageSrc(null)}
        />
      )}

      <SponsorshipMenuSection
        menus={sponsorshipMenus}
        onOpenDetail={setActiveMenu}
      />
      <AdDesignSection />
      <ProcessSection />
      {/* <BankSection /> */}
      <Footer />

      <ScrollToTopButton scrolled={scrolled} />
    </div>
  );
}
