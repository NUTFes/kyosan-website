'use client';

import { Award, Info, Mail, Instagram } from 'lucide-react';
import { contact, disclaimerItems } from '@/data/siteContent';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24">
      <div className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-600 rounded-xl">
                <Award size={32} />
              </div>
              <h2 className="text-3xl font-black">お問い合わせ</h2>
            </div>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              ご検討中の方、特定のカスタマイズメニューについて相談したい方、過去の協賛実績を確認したい方など、お気軽にご連絡ください。
              <br />
              現役学生の担当スタッフが誠意を持って対応させていただきます。
            </p>
            <div className="space-y-8">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 border border-white/5">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">E-mail Address</p>
                  <p className="text-lg md:text-xl font-bold group-hover:text-blue-400 transition-colors break-all">
                    {contact.email}
                  </p>
                </div>
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-pink-600 transition-all duration-300 border border-white/5">
                  <Instagram size={28} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">
                    Official Instagram
                  </p>
                  <p className="text-lg md:text-xl font-bold group-hover:text-pink-400 transition-colors">
                    {contact.instagramHandle}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Info className="text-blue-500 shrink-0" />
              注意事項
            </h3>
            <ul className="space-y-6 text-slate-400 leading-relaxed text-sm md:text-base">
              {disclaimerItems.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-10 text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-slate-500">
            <Award size={16} />
            <span>Gidaisai 45th Executive Committee</span>
          </div>
          <p className="text-xs text-slate-600">
            &copy; 2026 Nagaoka University of Technology Gidaisai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
