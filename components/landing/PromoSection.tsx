import FadeInSection from "@/components/landing/FadeInSection";

export default function PromoSection() {
  return (
    <section className="gradient-blush relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="gold-line-h absolute top-12 right-0 left-0 opacity-30" />
      <div className="gold-line-h absolute right-0 bottom-12 left-0 opacity-30" />

      <div className="container mx-auto max-w-4xl text-center">
        <FadeInSection>
          <p className="mb-6 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Специальное предложение
          </p>
          <h2 className="font-display text-4xl leading-tight font-light text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-blush">-19%</span> на каждое
            <br />
            последующее посещение
          </h2>
          <div className="mt-10">
            <a href="#contacts" className="btn-blush font-body">
              Запись
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
