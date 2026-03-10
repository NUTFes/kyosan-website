'use client';

import { Award, Menu, X } from 'lucide-react';

interface NavProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export function Nav({ scrolled, isMenuOpen, onToggleMenu, onCloseMenu }: NavProps) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-700">
          <Award className="text-blue-600" />
          <span>第45回技大祭 企業協賛</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            ご挨拶
          </a>
          <a href="#menu" className="hover:text-blue-600 transition-colors">
            協賛メニュー
          </a>
          <a href="#process" className="hover:text-blue-600 transition-colors">
            お申し込み
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            お問い合わせ
          </a>
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            お申し込みフォーム
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-slate-600"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] p-6 flex flex-col gap-6 animate-in fade-in duration-300">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-700">メニュー</span>
            <button type="button" onClick={onCloseMenu} className="p-2 text-slate-600" aria-label="閉じる">
              <X />
            </button>
          </div>
          <nav className="flex flex-col gap-6 mt-10">
            <a href="#about" className="text-2xl font-bold border-b border-slate-100 pb-4" onClick={onCloseMenu}>
              ご挨拶
            </a>
            <a href="#menu" className="text-2xl font-bold border-b border-slate-100 pb-4" onClick={onCloseMenu}>
              協賛メニュー
            </a>
            <a href="#process" className="text-2xl font-bold border-b border-slate-100 pb-4" onClick={onCloseMenu}>
              お申し込み
            </a>
            <a href="#contact" className="text-2xl font-bold border-b border-slate-100 pb-4" onClick={onCloseMenu}>
              お問い合わせ
            </a>
            <button type="button" className="bg-blue-600 text-white px-5 py-4 rounded-xl font-bold mt-4">
              お申し込みフォーム
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
}
