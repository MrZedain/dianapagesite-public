// data/collections/index.ts
import { drawing } from "./deawing";
import { dwellers } from "./dwellers";
import { rewilding } from "./rewilding";
import { TheShippingLog } from "./the-shipping-log";
import { Collection } from "./types";
import { UnknownCities } from "./unkown-cities";
import { performance } from "./performance";

export const collections: Collection[] = [dwellers, rewilding, TheShippingLog, UnknownCities, drawing, performance];

export const collectionsBySlug = Object.fromEntries(
  collections.map((c) => [c.slug, c])
);
