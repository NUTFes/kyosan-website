"use client";

import { processSteps } from "@/data/siteContent";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 bg-slate-900 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="container mx-auto max-w-3xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">お申し込みの手順</h2>
          <p className="text-slate-400 text-lg">
            検討から掲載まで、担当者がサポートいたします。
          </p>
        </div>

        <div className="space-y-0">
          {processSteps.map((item, idx) => (
            <div key={item.step} className="relative flex gap-6 md:gap-8">
              {/* 縦線 */}
              {idx < processSteps.length - 1 && (
                <div className="absolute left-[23px] top-14 bottom-0 w-px bg-white/10 md:left-[27px]" />
              )}
              {/* ステップ番号 */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/20 border border-white/10 flex items-center justify-center">
                <span className="text-lg md:text-xl font-black text-blue-400">
                  {item.step}
                </span>
              </div>
              {/* 内容 */}
              <div className="flex-1 pb-12 md:pb-14">
                <h4 className="font-bold text-lg md:text-xl mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
