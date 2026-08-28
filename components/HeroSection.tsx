"use client";

import {
  Calendar,
  ChevronRight,
  FileText,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
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
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
                <Calendar size={16} />
                2026/9/19(土)・20(日)開催予定
              </div>
              <div className="inline-flex items-center gap-1.5 bg-slate-800 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                今年度の募集は終了しました
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
              令和8年度 第45回技大祭
              <br />
              <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-4">
                企業協賛のご案内
              </span>
            </h1>

            <div className="mb-8 p-5 md:p-6 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 max-w-2xl shadow-sm">
              <div className="flex items-start gap-3">
                <AlertCircle
                  className="text-amber-600 shrink-0 mt-0.5"
                  size={20}
                />
                <div className="space-y-1">
                  <p className="font-bold text-base md:text-lg text-amber-900">
                    今年度の協賛募集受付は終了いたしました
                  </p>
                  <p className="text-sm md:text-base text-amber-800 leading-relaxed">
                    第45回技大祭への協賛募集は、すべての枠で受付を終了いたしました。多くの企業・団体様より温かいご支援とご応募を賜り、心より御礼申し上げます。
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl">
              長岡技術科学大学「技大祭」
              <br className="hidden md:block" />
              2026年9/19(土)・20(日)に「第45回技大祭」を開催いたします。各協賛メニューの内容や詳細仕様は下記よりご確認いただけます。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
              >
                メニュー一覧を見る <ChevronRight size={20} />
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
