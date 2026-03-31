"use client";

import {
  FileText,
  Monitor,
  Shirt,
  Instagram,
  Users,
  Flag,
  ShoppingBag,
  Sun,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SponsorshipMenu } from "@/lib/types";
import { sponsorshipMenusData } from "@/data/sponsorshipMenus";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Monitor,
  Shirt,
  Instagram,
  Users,
  Flag,
  ShoppingBag,
  Nobori: Flag,
  Sun,
};

const iconClassMap: Record<string, string> = {
  FileText: "text-blue-500",
  Monitor: "text-indigo-500",
  Shirt: "text-purple-500",
  Instagram: "text-pink-500",
  Users: "text-orange-500",
  Flag: "text-red-500",
  ShoppingBag: "text-emerald-500",
  Nobori: "text-amber-600",
  Sun: "text-orange-500",
};

export function getSponsorshipMenusWithIcons(): SponsorshipMenu[] {
  return sponsorshipMenusData.map((menu) => {
    const Icon = iconMap[menu.iconKey] ?? FileText;
    const className = iconClassMap[menu.iconKey] ?? "text-slate-500";
    const { iconKey: _, ...rest } = menu;
    return {
      ...rest,
      icon: <Icon className={className} />,
    };
  });
}
