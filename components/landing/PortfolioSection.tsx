"use client";

import { useEffect, useState } from "react";
import FadeInSection from "@/components/landing/FadeInSection";

const images = [
  "/images/portfolio-1.jpg",
  "/images/portfolio-2.jpg",
  "/images/portfolio-3.jpg",
  "/images/portfolio-4.jpg",
  "/images/portfolio-5.jpg",
  "/images/portfolio-6.jpg",
  "/images/portfolio-7.jpg",
];

export default function PortfolioSection() {
  const [displayImages, setDisplayImages] = useState<string[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setDisplayImages(shuffled.slice(0, 6));
  }, []);

  return (
    <>
      <section id="portfolio" className="bg-milk px-6 py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Работы
              </p>
              <h2 className="font-display text-4xl font-light text-foreground sm:text-5xl">Портфолио</h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {displayImages.map((src, i) => (
              <FadeInSection key={src} delay={i * 80}>
                <button
                  type="button"
                  className="group block w-full cursor-pointer overflow-hidden rounded-xl text-left"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={src}
                    alt={`Работа ${i + 1}`}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
                    loading="lazy"
                  />
                </button>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 font-body text-lg tracking-wider text-primary-foreground"
            onClick={() => setLightbox(null)}
          >
            Закрыть ✕
          </button>
          <img
            src={displayImages[lightbox]}
            alt="Увеличенное фото"
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </>
  );
}
