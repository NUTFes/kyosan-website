import type { SponsorshipMenuData } from "@/lib/types";
import { recruitmentClosedNotice } from "@/data/siteContent";

type RecruitmentMenu = Pick<
  SponsorshipMenuData,
  | "recruitmentClosed"
  | "recruitmentPriceLine"
  | "recruitmentSlotLabel"
  | "recruitmentClosedMessage"
  | "details"
  | "detailText"
>;

/** 募集枠の有無を boolean で管理するメニューか */
export function hasRecruitmentStatus(
  menu: Pick<SponsorshipMenuData, "recruitmentPriceLine">,
): boolean {
  return Boolean(menu.recruitmentPriceLine);
}

export function isRecruitmentClosed(
  menu: Pick<SponsorshipMenuData, "recruitmentClosed">,
): boolean {
  return menu.recruitmentClosed === true;
}

/** 一覧・詳細のバッジ文言（募集終了時のみ表示） */
export function getRecruitmentBadgeLabel(menu: RecruitmentMenu): string | null {
  if (!hasRecruitmentStatus(menu) || !isRecruitmentClosed(menu)) return null;
  return "募集終了";
}

function getRecruitmentPriceLine(menu: RecruitmentMenu): string | null {
  if (!menu.recruitmentPriceLine) return null;
  if (isRecruitmentClosed(menu)) {
    return `${menu.recruitmentPriceLine}・募集終了`;
  }
  if (menu.recruitmentSlotLabel) {
    return `${menu.recruitmentPriceLine}・${menu.recruitmentSlotLabel}`;
  }
  return menu.recruitmentPriceLine;
}

/** 一覧カード用の details（先頭行の枠表示を boolean から生成） */
export function getDisplayDetails(menu: RecruitmentMenu): string[] {
  const priceLine = getRecruitmentPriceLine(menu);
  if (!priceLine) return menu.details;
  return [priceLine, ...menu.details];
}

/** 詳細モーダル用の募集終了案内 */
export function getRecruitmentClosedMessage(menu: RecruitmentMenu): string {
  return menu.recruitmentClosedMessage ?? recruitmentClosedNotice;
}
