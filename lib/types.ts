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
  pamphletCouponText?: string;
  pamphletCouponImages?: { src: string; label: string }[];
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
    /** true のとき当該タイプを募集終了表示 */
    recruitmentClosed?: boolean;
  }[];
  uniformNotes?: string[];
  uniformImages?: (string | null)[];
  noboriImages?: string[];
  uchiwaImages?: string[];
  boothImages?: string[];
  boothUrl?: string;
  /**
   * 募集状態の切替（true: 募集終了 / false または未設定: 募集中）
   * recruitmentPriceLine と併用すると、枠数変更時も boolean の切替だけで表示を更新できます。
   */
  recruitmentClosed?: boolean;
  /** 一覧の先頭行に使う価格表記（例: "¥20,000"） */
  recruitmentPriceLine?: string;
  /** 募集中に表示する枠数表記（例: "先着9口"） */
  recruitmentSlotLabel?: string;
  /** 詳細モーダル内バナーに表示する補足（省略時は共通文） */
  recruitmentClosedMessage?: string;
  /** ステージ・横断幕の3種（バックボード／外会場） */
  stageBannerTypes?: {
    title: string;
    desc: string;
    price: string;
    limit: string;
    size: string;
    deadline: string;
    details: string[];
    images: string[];
    /** 協賛特典（詳細モーダルで強調表示） */
    perk?: {
      title: string;
      description: string;
    };
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
