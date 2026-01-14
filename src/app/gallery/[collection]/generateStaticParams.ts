// app/gallery/[collection]/generateStaticParams.ts
// Generates routes at build time

import { collections } from "@/app/data/collections";

export function generateStaticParams() {
  return collections.map((c) => ({
    collection: c.slug,
  }));
}