import { createPublicClient } from "./supabase";
import type { Product, NewsArticle, ProductSpec, ProductTone, NewsAccent } from "./catalog";

type ProductRow = {
  id: string;
  name: string;
  name_en: string | null;
  brand: string | null;
  category: string;
  tone: string | null;
  icon: string | null;
  image: string | null;
  tagline: string | null;
  description: string | null;
  specs: ProductSpec[] | null;
  sort_order: number | null;
};

type NewsRow = {
  id: string;
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string | null;
  icon: string | null;
  accent: string | null;
  sort_order: number | null;
};

function mapProduct(r: ProductRow): Product {
  return {
    id: r.id,
    name: r.name,
    nameEn: r.name_en ?? undefined,
    brand: r.brand ?? undefined,
    category: r.category,
    tone: (r.tone as ProductTone) ?? "device",
    icon: r.icon ?? "📦",
    image: r.image ?? undefined,
    tagline: r.tagline ?? undefined,
    description: r.description ?? undefined,
    specs: Array.isArray(r.specs) ? r.specs : [],
    sortOrder: r.sort_order ?? 0,
  };
}

function mapNews(r: NewsRow): NewsArticle {
  return {
    id: r.id,
    slug: r.slug,
    category: r.category,
    date: r.date,
    title: r.title,
    excerpt: r.excerpt ?? "",
    icon: r.icon ?? "📰",
    accent: (r.accent as NewsAccent) ?? "green",
    sortOrder: r.sort_order ?? 0,
  };
}

export async function getProducts(): Promise<Product[]> {
  const sb = createPublicClient();
  const { data, error } = await sb
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw new Error(`Failed to load products: ${error.message}`);
  return ((data as ProductRow[] | null) ?? []).map(mapProduct);
}

export async function getProduct(id: string): Promise<Product | null> {
  const sb = createPublicClient();
  const { data, error } = await sb
    .from("products")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(`Failed to load product: ${error.message}`);
  return data ? mapProduct(data as ProductRow) : null;
}

export async function getNews(): Promise<NewsArticle[]> {
  const sb = createPublicClient();
  const { data, error } = await sb
    .from("news")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw new Error(`Failed to load news: ${error.message}`);
  return ((data as NewsRow[] | null) ?? []).map(mapNews);
}

export async function getNewsItem(id: string): Promise<NewsArticle | null> {
  const sb = createPublicClient();
  const { data, error } = await sb
    .from("news")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(`Failed to load news item: ${error.message}`);
  return data ? mapNews(data as NewsRow) : null;
}
