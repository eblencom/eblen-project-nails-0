import FadeInSection from "@/components/landing/FadeInSection";

const prices = [
  { title: "Покрытие на свои", price: "75", unit: "р" },
  { title: "Длина 1-2 (XS, S)", price: "85", unit: "р" },
  { title: "Длина 3 (M, L..) и более", price: "95", unit: "р" },
];

export default function PriceSection() {
  return (
    <section id="prices" className="px-6 py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <div className="mb-16 text-center">
            <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Стоимость
            </p>
            <h2 className="font-display text-4xl font-light text-foreground sm:text-5xl">Прайс</h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {prices.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 120}>
              <div
                className={`group relative cursor-default rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)] lg:p-10 ${
                  i === 1
                    ? "bg-blush-light/70 ring-1 ring-blush/40 shadow-[var(--shadow-glass)]"
                    : "glass-card"
                }`}
              >
                <p className="mb-6 font-body text-sm tracking-wide text-muted-foreground">{item.title}</p>
                <p className="mb-2 font-display text-6xl font-light text-foreground lg:text-7xl">
                  {item.price}
                  <span className="ml-1 text-3xl text-muted-foreground">{item.unit}</span>
                </p>
                <div className="gold-line-h mx-auto mt-6 w-16 opacity-50" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
