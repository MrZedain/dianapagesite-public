"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type Props = {
    images: {
        src: string;
        alt: string;
        title: string;
        year?: number;
        width?: String;
        height?: String;
    }[];
    currentIndex: number;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export function ImageModal({
    images,
    currentIndex,
    isOpen,
    setIsOpen,
    setCurrentIndex,
}: Props) {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const touchStartRef = useRef<{ dist: number; scale: number } | null>(null);
    const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setScale(1);
            setPosition({ x: 0, y: 0 });
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, currentIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex]);

    // Inactivity timer to reset position after 3 seconds
    useEffect(() => {
        if (scale > 1 && !isDragging) {
            inactivityTimerRef.current = setTimeout(() => {
                setPosition({ x: 0, y: 0 });
            }, 3000);
        }
        return () => {
            if (inactivityTimerRef.current) {
                clearTimeout(inactivityTimerRef.current);
            }
        };
    }, [scale, isDragging, position]);

    if (!isOpen) return null;

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    // Fixed: Constrain position to keep image within bounds
    const constrainPosition = (newX: number, newY: number, currentScale: number) => {
        if (!imageRef.current || !imageContainerRef.current) return { x: newX, y: newY };

        const img = imageRef.current;
        const container = imageContainerRef.current;

        // Get the actual rendered dimensions of the image
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        
        // Calculate scaled dimensions
        const scaledWidth = imgWidth * currentScale;
        const scaledHeight = imgHeight * currentScale;
        
        // Container dimensions
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Calculate how much the image extends beyond the container when scaled
        const overflowX = Math.max(0, (scaledWidth - containerWidth) / 2);
        const overflowY = Math.max(0, (scaledHeight - containerHeight) / 2);

        // Maximum translation in pixels (not scaled)
        const maxX = overflowX;
        const maxY = overflowY;

        return {
            x: Math.max(-maxX, Math.min(maxX, newX)),
            y: Math.max(-maxY, Math.min(maxY, newY))
        };
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const delta = e.deltaY * -0.01;
        const newScale = Math.min(Math.max(1, scale + delta), 5);
        setScale(newScale);
        if (newScale === 1) {
            setPosition({ x: 0, y: 0 });
        } else {
            const constrained = constrainPosition(position.x, position.y, newScale);
            setPosition(constrained);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true);
            setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            const newX = e.clientX - dragStart.x;
            const newY = e.clientY - dragStart.y;
            const constrained = constrainPosition(newX, newY, scale);
            setPosition(constrained);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const getTouchDistance = (touches: React.TouchList) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const dist = getTouchDistance(e.touches);
            touchStartRef.current = { dist, scale };
        } else if (e.touches.length === 1 && scale > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.touches[0].clientX - position.x,
                y: e.touches[0].clientY - position.y,
            });
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && touchStartRef.current) {
            e.preventDefault();
            const dist = getTouchDistance(e.touches);
            const newScale = Math.min(
                Math.max(1, touchStartRef.current.scale * (dist / touchStartRef.current.dist)),
                5
            );
            setScale(newScale);
            if (newScale === 1) {
                setPosition({ x: 0, y: 0 });
            } else {
                const constrained = constrainPosition(position.x, position.y, newScale);
                setPosition(constrained);
            }
        } else if (e.touches.length === 1 && isDragging && scale > 1) {
            e.preventDefault();
            const newX = e.touches[0].clientX - dragStart.x;
            const newY = e.touches[0].clientY - dragStart.y;
            const constrained = constrainPosition(newX, newY, scale);
            setPosition(constrained);
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (e.touches.length < 2) {
            touchStartRef.current = null;
        }
        if (e.touches.length === 0) {
            setIsDragging(false);
        }
    };

    const image = images[currentIndex];

    return (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col h-dvh w-dvw overflow-hidden overscroll-none">
            {/* Top bar with controls */}
            <div className="shrink-0 flex items-center justify-between px-4 py-3 lg:py-4">
                {/* Image counter */}
                <div className="flex-1 flex justify-center lg:justify-start">
                    {images.length > 1 && (
                        <div className="px-3 py-1 bg-black/10 rounded-full text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </div>

                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Main content area */}
            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                {/* Image container */}
                <div className="relative flex-1 min-h-0 min-w-0 flex items-center justify-center">
                    {/* Navigation arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                                aria-label="Previous image"
                            >
                                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                                aria-label="Next image"
                            >
                                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    <div
                        ref={imageContainerRef}
                        className="w-full h-full min-w-0 min-h-0 flex items-center justify-center p-4 lg:p-8"
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ touchAction: scale > 1 ? 'none' : 'auto' }}
                    >
                        {/* CLIP LAYER */}
                        <div className="w-full h-full min-w-0 min-h-0 overflow-hidden flex items-center justify-center">
                            <img
                                ref={imageRef}
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain select-none transition-transform"
                                style={{
                                    transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                                    transformOrigin: "center center",
                                    cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                                }}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Info sidebar/bottom */}
                <div className="w-full lg:w-80 p-4 lg:p-8 bg-white/50 lg:bg-transparent border-t lg:border-t-0 lg:border-l border-black/10">
                    <div className="flex flex-col">
                        <h2 className="text-lg lg:text-2xl font-medium mb-1 lg:mb-2">{image.title}</h2>
                        {image.year && <p className="text-gray-600 text-sm lg:text-base mb-1">{image.year}</p>}
                        {image.width && image.height && (
                            <p className="text-gray-500 text-sm">
                                {image.width} × {image.height}
                            </p>
                        )}

                        {scale > 1 && (
                            <div className="text-sm text-gray-500 mt-2 lg:mt-4">
                                Zoom: {Math.round(scale * 100)}%
                            </div>
                        )}

                        <div className="hidden lg:block text-xs text-gray-400 mt-4">
                            <p>Scroll to zoom • Drag to pan</p>
                            <p className="mt-1">← → Arrow keys to navigate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}