'use client';

import { X, CheckCircle2, Maximize2, ExternalLink } from 'lucide-react';
import type { SponsorshipMenu } from '@/lib/types';

interface DetailModalProps {
  menu: SponsorshipMenu;
  onClose: () => void;
  onExpandImage: (src: string) => void;
}

export function DetailModal({ menu, onClose, onExpandImage }: DetailModalProps) {
  const imageFootnote =
    menu.id === 'uniform'
      ? '※ 2枚目・3枚目の画像は追加予定です。'
      : menu.id === 'website' ||
          menu.id === 'pamphlet' ||
          menu.id === 'nobori' ||
          menu.id === 'uchiwa' ||
          menu.id === 'booth' ||
          menu.id === 'sns' ||
          (menu.stageBannerTypes && menu.stageBannerTypes.length > 0)
        ? '※ 画像をクリックすると拡大表示できます。'
        : '※ 上記はレイアウトイメージです。実際の画像データは後ほど差し替えてご利用ください。';

  return (
    <div
      className="fixed inset-0 z-[80] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
          aria-label="閉じる"
        >
          <X size={18} />
        </button>
        <div className="p-6 md:p-10 overflow-y-auto flex-1 min-h-0">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {menu.category}
            </span>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              料金目安：{menu.price}
            </span>
          </div>
          <h2 id="modal-title" className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            {menu.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">{menu.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* 協賛内容の詳細 */}
            <div className="space-y-5 order-2 md:order-1">
              <h3 className="text-sm font-bold text-slate-500 tracking-widest uppercase">協賛内容の詳細</h3>

              {menu.stageBannerTypes && menu.stageBannerTypes.length > 0 ? (
                <div className="space-y-5">
                  {menu.stageBannerTypes.map((section, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-bold text-slate-800">{section.title}</span>
                        <span className="text-blue-600 font-black">{section.price}</span>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">
                          {section.limit}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{section.desc}</p>
                      <p className="text-xs text-slate-500 mb-2">
                        サイズ：{section.size}
                        <br />
                        提出期限：{section.deadline}
                      </p>
                      {section.details?.length ? (
                        <ul className="text-xs text-slate-600 space-y-1">
                          {section.details.map((d, di) => (
                            <li key={di} className="flex gap-2">
                              <span className="text-slate-400">・</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : menu.uniformTypes ? (
                <div className="space-y-5">
                  {menu.uniformTypes.map((t, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-bold text-slate-800">{t.label}</span>
                        <span className="text-blue-600 font-black">{t.price}</span>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">
                          {t.limit}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{t.detail}</p>
                      {t.deadline && (
                        <p className="text-xs text-slate-500">提出期限：{t.deadline}</p>
                      )}
                    </div>
                  ))}
                  {menu.detailText && (
                    <div className="pt-2">
                      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                        {menu.detailText}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                    {menu.detailText}
                  </p>
                  {menu.pamphletNote && (
                    <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                      <p className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-2">ご案内</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{menu.pamphletNote}</p>
                    </div>
                  )}
                  {menu.websiteUrl && (
                    <a
                      href={menu.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      技大祭ホームページを開く（nutfes.net）
                    </a>
                  )}
                  {menu.snsUrl && (
                    <a
                      href={menu.snsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold hover:from-purple-700 hover:to-pink-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Instagramで @nutfes を開く
                    </a>
                  )}
                  {menu.boothUrl && (
                    <a
                      href={menu.boothUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-colors break-all"
                    >
                      <ExternalLink size={16} />
                      詳細を開く
                    </a>
                  )}
                </>
              )}
            </div>

            {/* 掲載イメージ */}
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-sm font-bold text-slate-500 tracking-widest uppercase">掲載イメージ</h3>

              {menu.stageBannerTypes && menu.stageBannerTypes.length > 0 ? (
                <div className="grid grid-cols-1 gap-5">
                  {menu.stageBannerTypes.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <p className="text-xs font-semibold text-slate-500">{section.title}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {section.images.map((src, i) => (
                          <div
                            key={i}
                            className="relative rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-lg"
                          >
                            <div className="relative min-h-[200px] w-full">
                              <img
                                src={src}
                                alt={`${section.title} ${i + 1}`}
                                className="w-full h-full object-contain object-center cursor-zoom-in bg-white"
                                onClick={() => onExpandImage(src)}
                              />
                              <button
                                type="button"
                                onClick={() => onExpandImage(src)}
                                className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                                aria-label="拡大表示"
                              >
                                <Maximize2 size={18} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : menu.id === 'pamphlet' && menu.pamphletImages && menu.pamphletImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-5">
                  {menu.pamphletImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-lg"
                    >
                      <div className="relative min-h-[200px] w-full">
                        <img
                          src={src}
                          alt={`パンフレット広告イメージ ${idx + 1}`}
                          className="w-full h-full object-contain object-center cursor-zoom-in bg-white"
                          onClick={() => onExpandImage(src)}
                        />
                        <button
                          type="button"
                          onClick={() => onExpandImage(src)}
                          className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                          aria-label="拡大表示"
                        >
                          <Maximize2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : menu.id === 'website' && menu.websiteImages?.length ? (
                <div className="space-y-5">
                  {menu.websiteImages.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                      <div className="relative rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-lg">
                        <div className="relative w-full min-h-[180px] flex items-center justify-center">
                          <img
                            src={item.src}
                            alt={item.label}
                            className="max-h-[320px] w-auto h-auto object-contain object-center cursor-zoom-in"
                            onClick={() => onExpandImage(item.src)}
                          />
                          <button
                            type="button"
                            onClick={() => onExpandImage(item.src)}
                            className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                            aria-label="拡大表示"
                          >
                            <Maximize2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : menu.id === 'sns' && menu.snsImages && menu.snsImages.length > 0 ? (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-5">
                    {menu.snsImages.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                        <div className="relative rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-lg">
                          <div className="relative w-full min-h-[180px] flex items-center justify-center">
                            <img
                              src={item.src}
                              alt={item.label}
                              className="max-h-[320px] w-auto h-auto object-contain object-center cursor-zoom-in"
                              onClick={() => onExpandImage(item.src)}
                            />
                            <button
                              type="button"
                              onClick={() => onExpandImage(item.src)}
                              className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                              aria-label="拡大表示"
                            >
                              <Maximize2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : menu.id === 'nobori' && menu.noboriImages && menu.noboriImages.length > 0 ? (
                <div className="grid grid-cols-1 gap-5">
                  {menu.noboriImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-lg"
                    >
                      <div className="relative min-h-[200px] w-full">
                        <img
                          src={src}
                          alt={`のぼり広告イメージ ${idx + 1}`}
                          className="w-full h-full object-contain object-center cursor-zoom-in bg-white"
                          onClick={() => onExpandImage(src)}
                        />
                        <button
                          type="button"
                          onClick={() => onExpandImage(src)}
                          className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                          aria-label="拡大表示"
                        >
                          <Maximize2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : menu.id === 'uchiwa' && menu.uchiwaImages && menu.uchiwaImages.length > 0 ? (
                <div className="grid grid-cols-1 gap-5">
                  {menu.uchiwaImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-lg"
                    >
                      <div className="relative min-h-[200px] w-full">
                        <img
                          src={src}
                          alt={`うちわ広告イメージ ${idx + 1}`}
                          className="w-full h-full object-contain object-center cursor-zoom-in bg-white"
                          onClick={() => onExpandImage(src)}
                        />
                        <button
                          type="button"
                          onClick={() => onExpandImage(src)}
                          className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                          aria-label="拡大表示"
                        >
                          <Maximize2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : menu.id === 'booth' && menu.boothImages && menu.boothImages.length > 0 ? (
                <div className="grid grid-cols-1 gap-5">
                  {menu.boothImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-lg"
                    >
                      <div className="relative min-h-[200px] w-full">
                        <img
                          src={src}
                          alt={`企業ブースイメージ ${idx + 1}`}
                          className="w-full h-full object-contain object-center cursor-zoom-in bg-white"
                          onClick={() => onExpandImage(src)}
                        />
                        <button
                          type="button"
                          onClick={() => onExpandImage(src)}
                          className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                          aria-label="拡大表示"
                        >
                          <Maximize2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : menu.id === 'uniform' && menu.uniformImages ? (
                <div className="grid grid-cols-1 gap-5">
                  {menu.uniformImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl bg-slate-900 overflow-hidden border border-slate-200 shadow-lg"
                    >
                      <div className="relative aspect-[4/3] min-h-[220px] w-full">
                        {src ? (
                          <>
                            <img
                              src={src}
                              alt={`ユニフォーム広告掲載イメージ ${idx + 1}`}
                              className="w-full h-full object-contain object-center cursor-zoom-in"
                              onClick={() => onExpandImage(src)}
                            />
                            <button
                              type="button"
                              onClick={() => onExpandImage(src)}
                              className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                              aria-label="拡大表示"
                            >
                              <Maximize2 size={18} />
                            </button>
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 text-slate-400 text-sm text-center px-4">
                            掲載イメージ {idx + 1}/3
                            <br />
                            （画像追加予定）
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative h-56 md:h-64 rounded-3xl bg-gradient-to-br from-indigo-700 via-blue-700 to-slate-900 text-white shadow-xl flex items-center justify-center text-xs md:text-sm">
                  <div className="absolute inset-4 border-2 border-dashed border-sky-200/70 rounded-2xl" />
                  <div className="relative z-10 text-center px-6 space-y-2">
                    <div className="text-[10px] uppercase tracking-widest text-sky-100">IMAGE PLACEHOLDER</div>
                    <div className="text-sm md:text-base font-bold">
                      「{menu.title}」のイメージ画像を
                      <br />
                      ここに挿入予定です
                    </div>
                    <p className="text-[11px] md:text-xs text-sky-100/80">
                      実際の掲載イメージやデザイン案を追加することで、
                      協賛後の見え方をより具体的にご確認いただけます。
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
