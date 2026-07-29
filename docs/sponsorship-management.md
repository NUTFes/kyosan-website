# 協賛情報管理ドキュメント

このドキュメントは、協賛メニューの内容・募集状態・枠数・画像などを更新するための運用メモです。

## 主な管理ファイル

| ファイル | 役割 |
| --- | --- |
| `data/sponsorshipMenus.ts` | 協賛メニュー本体。名称、金額、説明、募集状態、画像などを管理します。 |
| `lib/types.ts` | 協賛メニューの型定義。新しい項目を追加する場合に更新します。 |
| `lib/recruitment.ts` | 募集状態の表示ロジック。募集終了バッジや一覧の価格・枠行を生成します。 |
| `data/siteContent.ts` | 共通文言、フォームURL、連絡先、振込期限などを管理します。 |
| `public/` | 掲載イメージやサンプル画像を配置します。 |
| `lib/menuIcons.tsx` | 協賛メニューに使うアイコンを管理します。 |

## 協賛メニューの基本構造

協賛メニューは `data/sponsorshipMenus.ts` の `sponsorshipMenusData` に配列で定義されています。

```ts
{
  id: "sns",
  title: "SNS広告 (新規)",
  iconKey: "Instagram",
  price: "¥20,000",
  category: "デジタル",
  recruitmentPriceLine: "¥20,000",
  recruitmentSlotLabel: "先着9口",
  desc: "一覧カードに表示する短い説明文",
  details: [
    "1万回以上インプレッション保証・2ページ構成",
    "提出期限：2026年7月17日(金)",
  ],
  detailText: `詳細モーダルに表示する長い説明文`,
}
```

## 募集状態の管理

募集状態は、各メニューの `recruitmentClosed` で切り替えます。

```ts
// 募集中
recruitmentClosed: false,

// または未設定でも募集中扱い
// recruitmentClosed を書かない
```

```ts
// 募集終了
recruitmentClosed: true,
```

募集終了時のみ、一覧カードと詳細モーダルに「募集終了」バッジが表示されます。募集中のバッジは表示されません。

募集終了時の共通案内文は `data/siteContent.ts` の `recruitmentClosedNotice` で管理しています。

## 枠数・価格の管理

募集枠を持つメニューでは、一覧カードの先頭行を次の2つから自動生成します。

```ts
recruitmentPriceLine: "¥20,000",
recruitmentSlotLabel: "先着9口",
```

募集中の場合は、一覧カードに次のように表示されます。

```text
¥20,000・先着9口
```

募集終了の場合は、`recruitmentClosed: true` にするだけで次のように表示されます。

```text
¥20,000・募集終了
```

## 枠数を増減する手順

例: SNS広告を「先着9口」から「先着12口」に増やす場合

1. `data/sponsorshipMenus.ts` を開く。
2. 対象メニューの `recruitmentSlotLabel` を変更する。

```ts
recruitmentSlotLabel: "先着12口",
```

3. `detailText` 内の協賛金額表記も同じ枠数に合わせる。

```text
一口 ¥20,000 先着12口
```

4. 必要に応じて、PDFやGoogleフォーム側の表記も更新する。

## 募集を締め切る手順

例: 企業ブースを募集終了にする場合

```ts
recruitmentClosed: true,
```

これだけで、一覧カードの先頭行は「募集終了」表記になり、詳細モーダルにも募集終了案内が表示されます。

`detailText` に募集終了文を直接書く必要はありません。二重表示を避けるため、募集終了の案内文は `recruitmentClosedNotice` とモーダル側の表示に任せてください。

## 募集を再開する手順

例: SNS広告の枠が増えて再募集する場合

```ts
// 削除する、または false にする
recruitmentClosed: false,
```

必要に応じて枠数も変更します。

```ts
recruitmentSlotLabel: "先着9口",
```

詳細文内の枠数表記も忘れずに合わせます。

## details の書き方

`recruitmentPriceLine` を使っているメニューでは、`details` に価格・枠の行を書かないでください。

良い例:

```ts
recruitmentPriceLine: "¥20,000",
recruitmentSlotLabel: "先着9口",
details: [
  "1万回以上インプレッション保証・2ページ構成",
  "提出期限：2026年7月17日(金)",
],
```

避ける例:

```ts
details: [
  "¥20,000／先着9口",
  "1万回以上インプレッション保証・2ページ構成",
],
```

価格・枠の表示が重複する原因になります。

## 画像の追加・差し替え

画像は `public/` に配置し、各メニューの画像配列にパスを追加します。

例: SNS広告の場合

```ts
snsImages: [
  { src: "/instagram.png", label: "投稿構成イメージ（表紙・広告・本題）" },
  { src: "/SNS_1.png", label: "実行委員会制作サンプル：1枚目（会社の概要）" },
],
```

画像パスは `/ファイル名` の形式で指定します。たとえば `public/sample.png` は `/sample.png` です。

## 新しい協賛メニューを追加する手順

1. `data/sponsorshipMenus.ts` の `sponsorshipMenusData` に新しいオブジェクトを追加する。
2. 既存のメニューと同じ項目を埋める。
3. 必要なら `lib/menuIcons.tsx` に `iconKey` を追加する。
4. 画像を使う場合は `public/` に配置し、対応する画像配列を設定する。
5. 新しい専用項目が必要な場合は `lib/types.ts` に型を追加する。
6. 表示側の分岐が必要な場合は `components/DetailModal.tsx` を更新する。

## 更新後の確認

更新後は次を確認します。

```bash
npm run build
```

確認ポイント:

- 一覧カードの価格・枠数が正しい
- 募集終了メニューだけ「募集終了」バッジが出る
- 募集中メニューに「募集中」バッジが出ていない
- 詳細モーダルの文言・期限・枠数が一覧と一致している
- 画像が表示され、クリック拡大できる
- Googleフォーム、案内PDF、サイトの表記に食い違いがない

## 現在の募集状態メモ

このメモは更新時点の状態です。変更した場合はあわせて更新してください。

| メニュー | 状態 | 管理項目 |
| --- | --- | --- |
| うちわ広告 | 募集終了 | `recruitmentClosed: true` |
| 企業ブース協賛 | 募集終了 | `recruitmentClosed: true` |
| SNS広告 | 募集中 | `recruitmentSlotLabel: "先着9口"` |
| 外会場横断幕広告協賛（新規） | 募集終了 | `stageBannerTypes` 内 `recruitmentClosed: true` |

