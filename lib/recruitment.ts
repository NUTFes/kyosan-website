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

/** 詳細モーダル用の募集終了案内 */
export function getRecruitmentClosedMessage(menu: RecruitmentMenu): string {
  return menu.recruitmentClosedMessage ?? recruitmentClosedNotice;
}

/** 枠数ラベル（募集終了時は「募集終了」） */
export function getSlotLimitLabel(item: {
  limit: string;
  recruitmentClosed?: boolean;
}): string {
  return item.recruitmentClosed ? "募集終了" : item.limit;
}

type DisplayDetailsMenu = RecruitmentMenu &
  Pick<SponsorshipMenuData, "id" | "uniformTypes">;

/** 一覧カード用の details（先頭行の枠表示を boolean から生成） */
export function getDisplayDetails(menu: DisplayDetailsMenu): string[] {
  if (menu.id === "uniform" && menu.uniformTypes) {
    const typeLines = menu.uniformTypes.map(
      (t) =>
        `${t.label.replace(/（/g, "(").replace(/）/g, ")")}：${t.price}／${getSlotLimitLabel(t)}`,
    );
    const deadlineLine = menu.details.find((d) => d.includes("提出期限"));
    return deadlineLine ? [...typeLines, deadlineLine] : typeLines;
  }

  const priceLine = getRecruitmentPriceLine(menu);
  if (!priceLine) return menu.details;
  return [priceLine, ...menu.details];
}
