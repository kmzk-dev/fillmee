import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. プロダクト用コレクション（src/content/product 以下の .md を読み込む）
const productCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/product' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.enum(['android', 'chrome', 'web']),
    status: z.string(),
    storeUrl: z.string().optional(),
    storeLabel: z.string().default('ストアで確認する'),
    legalSlug: z.string(),
    lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
});

// 2. ポリシー用コレクション（src/content/legal 以下の .md を読み込む）
const legalCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    lastUpdated: z.string(),
  }),
});

export const collections = {
  product: productCollection,
  legal: legalCollection,
};