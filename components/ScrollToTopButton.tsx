'use client';

import { ArrowUpCircle } from 'lucide-react';

interface ScrollToTopButtonProps {
  scrolled: boolean;
}

export function ScrollToTopButton({ scrolled }: ScrollToTopButtonProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-10 right-6 md:right-10 p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-90 z-[70] ${
        scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      aria-label="ページトップへ"
    >
      <ArrowUpCircle size={32} />
    </button>
  );
}
