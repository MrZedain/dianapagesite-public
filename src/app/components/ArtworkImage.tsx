"use client";

import { useState } from "react";
import { ImageModal } from "@/app/components/ImageModal";

type Props = {
    src: string;
    placeholder: string;
    alt: string;
};

export function ArtworkImage({ src, placeholder, alt }: Props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative overflow-hidden bg-neutral-100" style={!loaded ? { minHeight: '300px', minWidth: '300px', transition: "width 0.5s ease, height 0.5s ease" } : {minHeight: '100px', minWidth: '100px', transition: "width 0.5s ease, height 0.5s ease"}}>
            {/* Low-res placeholder */}
            <img
                src={placeholder}
                aria-hidden
                className={`absolute inset-0 w-full h-full object-cover blur-md scale-105 transition-opacity duration-700 
                    ${loaded ? "opacity-0 hidden" : "opacity-100"
                    
                    }`}
            />

            {/* Full image */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                className={`relative w-full h-auto transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />

        </div>
    );
}
