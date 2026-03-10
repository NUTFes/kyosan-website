'use client';

import { FileCheck } from 'lucide-react';
import { adDesignGuidelines } from '@/data/siteContent';

export function AdDesignSection() {
  const { title, intro, productionTypes, dataFormat } = adDesignGuidelines;

  return (
    <section id="ad-guidelines" className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-700 rounded-2xl flex items-center justify-center">
            <FileCheck size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-800">{title}</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-12">{intro}</p>

        <div className="space-y-10">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{productionTypes.heading}</h3>
            <p className="text-slate-600 text-sm mb-6">{productionTypes.description}</p>
            <ul className="space-y-4">
              {productionTypes.items.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 text-slate-600 font-bold text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-bold text-slate-800">{item.name}：</span>
                    <span className="text-slate-600">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6">{dataFormat.heading}</h3>
            <ul className="space-y-3">
              {dataFormat.items.map((line, idx) => (
                <li key={idx} className="text-slate-600 leading-relaxed flex gap-2">
                  <span className="text-slate-400">・</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
