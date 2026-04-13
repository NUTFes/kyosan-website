"use client";

import { Award, Info } from "lucide-react";
import { greeting } from "@/data/siteContent";

export function GreetingSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-8 right-12 opacity-5 pointer-events-none hidden md:block">
            <Award size={120} />
          </div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <Info size={24} />
            </span>
            {greeting.title}
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-base md:text-lg">
            <p className="font-bold">{greeting.paragraphs[0]}</p>
            <p className="mb-1">{greeting.paragraphs[1]}</p>
            <p className="mb-1">{greeting.paragraphs[2]}</p>
            <p className="mb-1">{greeting.paragraphs[3]}</p>
            <p className="mb-1">{greeting.paragraphs[4]}</p>
            <p>{greeting.paragraphs[5]}</p>
            <div className="mt-2 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  {greeting.signature.role}
                </p>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">
                  {greeting.signature.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400">
                  {greeting.signature.org}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
