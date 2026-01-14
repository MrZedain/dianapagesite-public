"use client";

import { Artwork } from "@/app/data/collections/types";
import { ArtworkImage } from "./ArtworkImage";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

interface GalleryGridProps {
  artworks: Artwork[];
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten data to pass src/alt for modal
  const images = artworks.map((art) => ({ src: art.image, alt: art.title, title: art.title, year: art.year, width: art.dimensions?.width, height: art.dimensions?.height }));

  if (modalOpen) return (
    <ImageModal
      images={images}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      isOpen={modalOpen}
      setIsOpen={setModalOpen}
    />
  )

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {artworks.map((art, index) => (
          <div
            key={art.id}
            onClick={() => { setCurrentIndex(index); setModalOpen(true); }}
            className="mb-4 break-inside-avoid cursor-pointer">
            <ArtworkImage
              src={art.image}
              placeholder={art.blur}
              alt={art.title}
            />
            <h5 className="text-gray-500">{art.title} {art.year}</h5>
            {art.dimensions?.width && art.dimensions?.height && (
              <h6 className="text-xs text-gray-500">
                {art.dimensions.width} × {art.dimensions.height}
              </h6>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
