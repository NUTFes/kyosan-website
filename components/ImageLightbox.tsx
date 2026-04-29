"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  onClose: () => void;
}

export function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="画像拡大表示"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="閉じる"
      >
        <X size={24} />
      </button>
      <div
        className="relative w-[min(92vw,1100px)] h-[min(82vh,700px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="拡大表示"
          fill
          sizes="(min-width: 1280px) 1100px, 92vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
