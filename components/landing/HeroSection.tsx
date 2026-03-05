"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero-nails.jpg",
  "/images/portfolio-1.jpg",
  "/images/portfolio-2.jpg",
  "/images/portfolio-3.jpg",
  "/images/portfolio-4.jpg",
  "/images/portfolio-5.jpg",
  "/images/portfolio-6.jpg",
  "/images/portfolio-7.jpg",
];

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState("/images/hero-nails.jpg");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setHeroImage(heroImages[randomIndex]);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 lg:px-16"
    >
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroImage}
          alt="Элегантный маникюр"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="order-1 space-y-8">
            <div className="animate-fade-up">
              <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-white/80 lg:text-muted-foreground">
                Nail Master · Минск
              </p>
              <h1 className="font-display text-4xl leading-[1.1] font-light text-white sm:text-5xl lg:text-6xl lg:text-foreground xl:text-7xl">
                Самые крепкие
                <br />
                <span className="font-light italic text-blush">ногти в Минске</span>
                <br />
                для Вас!
              </h1>
            </div>

            <p className="animate-fade-up-delay-1 max-w-md font-body text-base leading-relaxed text-white/90 lg:text-muted-foreground">
              Успей записаться на 04.04.2026 по адресу
              <br />
              г. Минск, ул. Лазурная, д. 17, пом. 24
            </p>

            <div className="animate-fade-up-delay-2 flex flex-wrap gap-4">
              <a href="#contacts" className="btn-blush font-body">
                Запись
              </a>
              <a href="#portfolio" className="btn-outline-blush font-body">
                Отзывы
              </a>
            </div>

            <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 pt-4">
              <span className="font-body text-xs tracking-wide text-white/85 lg:text-muted-foreground">
                Ногти за 45 минут
              </span>
              <div className="gold-line hidden sm:block" />
              <span className="font-body text-xs tracking-wide text-white/85 lg:text-muted-foreground">
                Скидка постоянным клиентам
              </span>
              <div className="gold-line hidden sm:block" />
              <span className="font-body text-xs tracking-wide text-white/85 lg:text-muted-foreground">
                Дизайн входит в стоимость :)
              </span>
            </div>
          </div>

          <div className="order-1 hidden justify-center animate-fade-up lg:order-2 lg:flex lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 -rotate-3 rounded-[2rem] bg-blush-light opacity-50" />
              <img
                src={heroImage}
                alt="Элегантный маникюр"
                className="relative h-auto w-72 rounded-[1.5rem] object-cover shadow-lg sm:w-80 lg:w-96 xl:w-[420px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
