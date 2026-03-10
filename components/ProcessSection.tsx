'use client';

import { ChevronRight } from 'lucide-react';
import { processSteps } from '@/data/siteContent';

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">お申し込みの手順</h2>
          <p className="text-slate-400 text-lg">検討から掲載まで、専任の担当者がサポートいたします。</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col items-center text-center"
            >
              <div className="text-4xl font-black text-blue-500 mb-4 opacity-50">{item.step}</div>
              <h4 className="font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              {idx < processSteps.length - 1 && (
                <ChevronRight
                  className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 text-white/10"
                  size={32}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
