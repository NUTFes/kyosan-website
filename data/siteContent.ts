import type { ProcessStep, BankRow } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "内容の確定",
    text: "メニューを決定。不明点は担当者へご連絡ください。",
  },
  {
    step: "02",
    title: "フォーム送信",
    text: "専用フォームより必要事項の回答をお願いします。",
  },
  {
    step: "03",
    title: "原稿データ提出",
    text: "各期限を守り、ロゴや広告案を規定形式でご提出ください。",
  },
  {
    step: "04",
    title: "ご入金",
    text: "担当者より請求書を発行させていただきます。8月28日までに指定口座への振込をよろしくお願いいたします。",
  },
  {
    step: "05",
    title: "掲載・当日",
    text: "広告は順次公開させていただきます。当日会場にてお待ちしております。",
  },
];

export const bankRows: BankRow[] = [
  { label: "銀行名", val: "大光銀行 (0532)" },
  { label: "支店名", val: "希望が丘支店 (042)" },
  { label: "預金種別", val: "普通預金" },
  { label: "口座番号", val: "2002151" },
  {
    label: "口座名義",
    val: "技大祭実行委員会（ギダイサイジッコウイインカイ）",
  },
];

export const contact = {
  email: "nutfes_kyosan@googlegroups.com",
  instagram: "https://instagram.com/nutfes",
  instagramHandle: "@nutfes",
};

export const pdfUrl =
  "https://drive.google.com/file/d/1zzNQbLHtdsfj0M2LG7iUw8tbfdK_aK1g/view?usp=drive_link";

export const applicationFormUrl =
  "https://docs.google.com/forms/d/1HxznEJdXMTrdw_QQEYkuDSUOpO7qBTHIsMG9-0FQ0GE/edit";

export const disclaimerItems = [
  "天災、感染症、その他不可抗力により技大祭が中止となった場合でも、既に発生した準備費用等に充てるため、協賛金のご返金は致しかねます。予めご了承ください。",
  "広告内容が著しく不適切と実行委員会側で判断した場合、内容の修正または差し替えをお願いする場合がございます。",
  "掲載期限を過ぎた場合、内容が一部反映されない可能性がございます。",
];

export const greeting = {
  title: "実行委員会よりご挨拶",
  paragraphs: [
    "企業担当者様",
    "この度は第45回技大祭への協賛をご検討いただき、誠にありがとうございます。本年度の技大祭は、伝統の継承と共に「技術と創造の融合」をテーマに、より地域に根ざしたイベントを目指しております。",
    "昨今の物価高騰等を受け、一部協賛金額の改訂を行わせていただきましたが、それ以上に貴社のプレゼンスを高め、学生や地域住民との接点を最大化できるよう実行委員会一丸となって取り組んでまいります。",
  ],
  signature: {
    role: "技大祭実行委員会 委員長",
    name: "齊藤 翔太",
    org: "長岡技術科学大学 技大祭実行委員会産学局",
  },
};

export const transferDeadline = "2026年8月28日(金)";

/** 広告デザイン・入稿のご案内（共通・1か所表示用） */
export const adDesignGuidelines = {
  title: "広告デザイン・入稿のご案内",
  intro:
    "一貫した品質を保つため、以下の規定を遵守いただけますようお願い申し上げます。",
  productionTypes: {
    heading: "制作区分",
    description:
      "制作区分には以下の2種類がございます。どちらかをお選びください。",
    items: [
      {
        name: "完全データ入稿",
        text: "貴社にて制作されたデータを、後述の形式で送付してください。",
      },
      {
        name: "実行委員会制作",
        text: "ロゴ素材や掲載テキストをご提供いただき、当委員会でレイアウトします。",
      },
    ],
  },
  dataFormat: {
    heading: "データ形式",
    items: [
      "対応形式： Adobe Illustrator（推奨）、PDF、PNG、JPEG",
      "PDF/AI時の注意： 必ず全ての文字をアウトライン化してください。",
      "画像解像度： 300dpi以上を推奨します。",
    ],
  },
};
