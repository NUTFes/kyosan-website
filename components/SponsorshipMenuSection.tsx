'use client';

import { CheckCircle2, ShoppingBag } from 'lucide-react';
import type { SponsorshipMenu } from '@/lib/types';
import { contact } from '@/data/siteContent';

interface SponsorshipMenuSectionProps {
  menus: SponsorshipMenu[];
  onOpenDetail: (menu: SponsorshipMenu) => void;
}

export function SponsorshipMenuSection({ menus, onOpenDetail }: SponsorshipMenuSectionProps) {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">協賛メニュー一覧</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            全11種類のメニューから、貴社の広報戦略に最適なプランをお選びいただけます。
            <br className="hidden md:block" />
            複数の組み合わせや、掲載内容の調整も柔軟に対応可能です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="group bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-slate-50">
                  {menu.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {menu.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{menu.title}</h3>
              <div className="text-blue-600 font-black text-2xl mb-4">{menu.price}</div>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{menu.desc}</p>
              <div className="space-y-3 mb-8">
                {menu.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs font-semibold text-slate-600 leading-tight"
                  >
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {detail}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onOpenDetail(menu)}
                className="w-full py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl text-sm font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm"
              >
                詳細を確認
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="p-5 bg-white/20 rounded-3xl backdrop-blur-md border border-white/20 shrink-0">
              <ShoppingBag size={40} />
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-2">物品・サービスによる協賛</h4>
              <p className="text-blue-100 max-w-md">
                景品、ケータリング、専門技術の提供など、金銭以外の形でのご支援も歓迎いたします。広告枠との調整など柔軟に対応します。
              </p>
            </div>
          </div>
          <button
            type="button"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all whitespace-nowrap shadow-xl relative z-10 w-full lg:w-auto"
          >
            <a href={`mailto:${contact.email}`}>
              担当者に相談する
            </a> 
          </button>
        </div>
      </div>
    </section>
  );
}
