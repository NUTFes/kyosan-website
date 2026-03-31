"use client";

import { CreditCard } from "lucide-react";
import { bankRows, transferDeadline } from "@/data/siteContent";

export function BankSection() {
  return (
    <section id="bank" className="py-24 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-inner">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                <CreditCard size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                お振込先案内
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-100 text-blue-800 p-4 rounded-2xl text-sm font-bold">
                  振込期限：{transferDeadline}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  ※振込手数料は貴社にてご負担願います。
                  <br />
                  ※領収書が必要な場合は、お申し込み時にお申し付けください。
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 flex flex-col justify-center">
              <div className="space-y-1 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                {bankRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-5 border-b border-slate-100 last:border-0 px-4"
                  >
                    <span className="text-sm font-bold text-slate-400 mb-1 sm:mb-0">
                      {row.label}
                    </span>
                    <span className="text-xl font-black text-slate-800 tracking-tight">
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
