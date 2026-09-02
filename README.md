# DEV.FILLMEE.COM

このプロジェクトは、Astro を使って構築した静的サイトです。  
Markdown で製品紹介や利用規約を管理し、一覧ページと詳細ページとして自動で出力する構成になっています。

この README は、今後このリポジトリをクローンして利用する人向けに、
Astro の概要から導入、構築、実行方法、GitHub Pages への公開方法までまとめたものです。

---

## Astro とは

Astro は、静的サイトを高速に構築するための Web フレームワークです。

特徴:
- HTML を中心に構成されるため、初期表示が高速
- Markdown をそのままページとして扱いやすい
- React / Vue / Svelte などの UI フレームワークと組み合わせやすい
- SSG（Static Site Generation）に強く、GitHub Pages などへの公開に向いている

このプロジェクトでは、Markdown をコンテンツとして扱い、
一覧ページと詳細ページを自動生成する構成を採用しています。

---

## Astro の導入

前提条件:
- Node.js 22 以上を推奨
- npm が利用できること

新しいプロジェクトを作る場合:

```bash
npm create astro@latest -- --template minimal
```

既存のプロジェクトをクローンした場合は、依存関係をインストールします。

```bash
git clone <repository-url>
cd <project-name>
npm install
```

このリポジトリでは、依存関係は `package.json` に定義されています。

---

## Astro での構築

このプロジェクトの主な構成は次のとおりです。

```text
/
├── public/
├── src/
│   ├── content/
│   │   ├── product/
│   │   └── legal/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── product/
│   │   └── legal/
│   ├── content.config.ts
│   └── config.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

### 役割

- `src/pages/`
  - 各ページの入口です
  - `index.astro` はトップページ
  - `product/[slug].astro` は Markdown ベースの商品詳細ページ
  - `legal/[slug].astro` はポリシー詳細ページ

- `src/content/`
  - Markdown ファイルを置く場所です
  - `product/` に商品ページ用の MD
  - `legal/` に利用規約やプライバシーポリシー用の MD

- `src/content.config.ts`
  - Markdown のコレクション定義
  - `defineCollection` でコレクションを定義し、`glob` で MD を読み取ります

### Markdown の例

```md
---
title: "TabiMemo（旅メモ）"
subtitle: "予定と持ち物をサクサク整理する旅程ノート"
category: "android"
version: "Ver 1.4.2"
status: "Google Play 配信中"
legalSlug: "tabimemo-privacy"
order: 1
---

## アプリの概要
```

このように frontmatter を追加すると、Astro のコレクションから値を取り出して一覧ページや詳細ページで使えます。

---

## Astro の実行

ローカル開発環境で実行するには、プロジェクト直下で次を実行します。

```bash
npm run dev
```

実行後、通常は以下で確認できます。

```text
http://localhost:4321
```

### 静的ビルド

本番向けに静的ファイルを生成する場合:

```bash
npm run build
```

生成結果は `dist/` 配下に出力されます。

### ローカルプレビュー

ビルド後の内容を確認します。

```bash
npm run preview
```

---

## GitHub と GitHub Pages

このプロジェクトは Astro の静的サイト生成に対応しているため、GitHub Pages へ公開しやすい構成です。

### 1. GitHub に push

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <github-repository-url>
git push -u origin main
```

### 2. GitHub Pages の設定

GitHub のリポジトリで以下を設定します。

- Settings
- Pages
- Source: GitHub Actions または `main` ブランチの `dist` 配下

### 3. GitHub Pages 用の Astro 設定

GitHub Pages に公開する場合、リポジトリ名やベースパスに応じて `astro.config.mjs` を調整します。

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/<repository-name>/',
});
```

注意点:
- `username.github.io` 形式のリポジトリではベースパスが不要な場合があります
- その場合は `base` を省略して構いません
- カスタムドメインを使う場合は `site` をそのドメインに設定します

### 4. GitHub Actions の例

公開用の自動デプロイを行う場合、`.github/workflows/deploy.yml` を作成して以下のような流れにします。

```yaml
name: Deploy Astro site to Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

これで GitHub への push を契機に、自動で Astro の静的サイトが GitHub Pages に公開されます。

---

## 開発時のポイント

- Markdown の内容を更新すると、Astro のコレクションが自動で反映される
- `src/content/` 内のファイルを追加・修正すると、ページ生成に反映される
- 動的ルーティングは `slug` を使ってページを紐付ける設計になっている

---

## まとめ

このプロジェクトは、
- Astro を使った静的サイト構築
- Markdown ベースのコンテンツ管理
- GitHub Pages へのデプロイに適した構成

を目指したサイトです。

クローンしてすぐに動かすには、以下だけで十分です。

```bash
npm install
npm run dev
```

必要に応じて、GitHub Pages 向けの `site` / `base` 設定や CI/CD を整えると、公開準備が進みます。
