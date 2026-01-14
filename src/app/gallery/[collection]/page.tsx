import { collectionsBySlug } from "@/app/data/collections";
import React from "react";
import GalleryGrid from "@/app/components/galleryGrid";

type GalleryPageProps = {
  params: Promise<{ collection: string }>;
};

export default function GalleryPage({ params }: GalleryPageProps) {
    // unwrap the params promise
  const resolvedParams = React.use(params);
  const collection = collectionsBySlug[resolvedParams.collection];

  if (collection.title === "performance") 
    return (
  <div className="px-4 pt-12 sm:pt-0">

      {/* Page title */}
      <h1 className="mb-3 text-3xl text-center font-medium text-[#bababa]">
        {collection.title}
      </h1>

      <GalleryGrid artworks={collection.artworks} />
       {/* Details Section */}
      <div className="mt-10 space-y-10">
        {/* Photographs of Performance */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#fc1eba]">
            Photographs of Performance
          </h3>
          <ul className="list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
              Sydelle Willow Smith, <span className="text-[#fc1eba] font-bold">'Ek sê'</span> performed in March 2012 as part of the
              "Infecting the City" Public Arts Festival hosted by the Africa Centre,
              Cape Town and directed by Diana Page.
            </li>
            <li>
              The late Elio Montanari, <span className="text-[#fc1eba] font-bold">'Kadinin Sesleri Womens Voices'</span> performed in 2007 as part
              of the Visibility Project hosted by Galata Perform, Istanbul and directed
              by Diana Page.
            </li>
            <li>
              Gary van Wyk, <span className="text-[#fc1eba] font-bold">“Pitch Blue”</span>, performed in 2008 Red Hook Brooklyn, NYC,
              hosted by Axis Gallery and the Ampersand Foundation and directed by Diana Page.
            </li>
          </ul>
        </div>

        {/* Videos of Performances */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#fc1eba]">
            Videos of Performances
          </h3>
          <ul className="list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong className="text-[#fc1eba]">Ek se</strong> filmed by Shelley Barry. Post-production by Bryan Little. <br />
              Performers: Gabeba Baderoon, Ziya Azazi, Hlengiwe Mkhwanazi.
            </li>
            <li>
              <strong className="text-[#fc1eba]">Pitch Blue</strong> filmed by Helen Tschudi, Klara Palotai, Diana Page, Lisa Brittan. <br />
              Performers: Sayda Trujillo, Sharla Meese, Saori Tsukada, Tammy Hall, Bara Sapir. <br />
              Adapted by Hannah Oxlade for Bag Factory presentation, 2012.
            </li>
            <li>
              <strong className="text-[#fc1eba]">Kadinin Sesleri</strong> filmed by Erdem Ayvazoglu. <br />
              Performers: Songul Can, Uma Fusun, Lisa Meyer, Joanna Wulfsberg.
            </li>
          </ul>
        </div>

        </div>
    </div>
  )


  return (
  <div className="px-4 pt-12 sm:pt-0">

      {/* Page title */}
      <h1 className="mb-3 text-3xl text-center font-medium text-[#bababa]">
        {collection.title}
      </h1>

      <GalleryGrid artworks={collection.artworks} />
    </div>
  );
}
