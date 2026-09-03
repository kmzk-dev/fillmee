---
title: "Markdown 記法サンプル"
subtitle: "全記法を確認できるサンプルページ"
category: "android" #android,chrome,web
status: "サンプル"
storeUrl: "http://Chrome.com"
storeLabel: "chromeWEB" 
legalSlug: "tabimemo-privacy" #関連するlegalディレクトリのドキュメント****.md
lastUpdated: "2026-01-02" # YYYY-MM-DD記述
---

# 見出し H1
## 見出し H2
### 見出し H3
#### 見出し H4

本文のサンプルです。これは通常の段落です。ここで太字や斜体、[リンク](https://example.com) を使えます。

これは次の行に続く段落です。強調は **太字**、*斜体*、***太字＋斜体*** のように書けます。

> 引用文の例です。
> ここは引用の二行目です。
> 引用の中で **強調** もできます。

---

## リスト

### 順序付きリスト

1. 最初の項目
2. 次の項目
3. さらに次の項目

### 順序なしリスト

- 項目A
- 項目B
  - 子項目B-1
  - 子項目B-2
- 項目C

### チェックボックス

- [x] 完了した作業
- [ ] 未完了の作業
- [x] 進行中の確認

---

## 強調とコード

インラインコードは `npm install` のように書けます。

複数行のコードブロックはこちらです。

```bash
npm install
npm run dev
npm run build
```

```js
const message = "Hello, Astro!";
console.log(message);
```

---

## 表

| 項目 | 内容 | 備考 |
| --- | --- | --- |
| 名前 | Astro | 静的サイト生成 |
| 目的 | ドキュメントサイト | Markdownベース |
| 実行環境 | Node.js | v22推奨 |
| 公開先 | GitHub Pages | 便利 |

---

## 画像

![サンプル画像](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80)

---

## 動画埋め込み

以下は HTML で動画を埋め込んだ例です。ブラウザ上で再生できます。

<video controls preload="metadata" poster="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80" style="width: 100%; max-width: 100%; border-radius: 1rem; background: #0f172a; margin: 1rem 0;">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  お使いのブラウザでは動画を再生できません。
</video>

---

## ハイパーリンクと脚注

- [公式サイト](https://astro.build)
- [GitHub](https://github.com)

ここに脚注を入れます[^1]。

[^1]: これは脚注の内容です。

---

## テキストの装飾

- 下線は使えないことが多いですが、HTMLタグで <u>下線付き</u> にできます。
- 取り消し線は ~~取り消し~~ のように書けます。
- 文字の大きさは HTML で調整できますが、通常は見出しで対応します。

---

## 数式の例

行内数式: $E = mc^2$

ブロック数式:

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$

---

## 注意書き

:::note
ここは注意書きの例です。
Markdown の拡張で使える表現です。
:::

---

## 終わり

以上が基本的な Markdown 記法のサンプルです。実際の見た目を確認して、デザインの方向性を決めましょう。
