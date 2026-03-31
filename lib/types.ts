import type { ReactNode } from "react";

/** 協賛メニュー共通（データ用：icon はキー文字列） */
export interface SponsorshipMenuData {
  id: string;
  title: string;
  iconKey: string;
  price: string;
  category: string;
  desc: string;
  details: string[];
  detailText: string;
  pamphletImages?: string[];
  pamphletNote?: string;
  websiteImages?: { src: string; label: string }[];
  websiteUrl?: string;
  snsImages?: { src: string; label: string }[];
  snsUrl?: string;
  uniformTypes?: {
    label: string;
    price: string;
    limit: string;
    detail: string;
    deadline: string;
  }[];
  uniformNotes?: string[];
  uniformImages?: (string | null)[];
  noboriImages?: string[];
  uchiwaImages?: string[];
  boothImages?: string[];
  boothUrl?: string;
  /** ステージ・横断幕の3種（バックボード／体育館内壁／外会場） */
  stageBannerTypes?: {
    title: string;
    desc: string;
    price: string;
    limit: string;
    size: string;
    deadline: string;
    details: string[];
    images: string[];
  }[];
}

/** 表示用（icon は ReactNode） */
export interface SponsorshipMenu extends Omit<SponsorshipMenuData, "iconKey"> {
  icon: ReactNode;
}

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
}

export interface BankRow {
  label: string;
  val: string;
}
