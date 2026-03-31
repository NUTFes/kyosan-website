"use client";

import { Calendar, ChevronRight, FileText, ExternalLink } from "lucide-react";
import { pdfUrl } from "@/data/siteContent";

export function HeroSection() {
  return (
    <header
      id="top"
      className="pt-40 pb-24 px-6 relative overflow-hidden bg-white"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-right" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Calendar size={16} />
              2026/9/19(土)・20(日)開催予定
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-8">
              令和8年度 第45回技大祭
              <br />
              <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-4">
                企業協賛のご案内
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              長岡技術科学大学 最大の祭典「技大祭」。
              <br className="hidden md:block" />
              学生の熱意と先端技術を支援し、貴社の魅力を地域社会へ発信する最適なパートナーシップを募集しております。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
              >
                メニューを見る <ChevronRight size={20} />
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                <FileText size={20} />
                案内PDFを開く <ExternalLink size={18} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
