import { FadeIn } from "@/motion/FadeIn";
import { services } from "@/data/services";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-sans)]">
      <FadeIn delay={0.2}>
        <main className="flex flex-col gap-8 row-start-2 items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            AI Kuttan
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl">
            Your business. Digitally powered.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
            {Object.values(services).map((service, i) => (
              <FadeIn key={service.id} delay={0.4 + i * 0.1}>
                <div className="p-6 border border-border rounded-xl bg-surface hover:bg-surface-hover transition-colors">
                  <h2 className="text-2xl font-bold mb-2 text-accent">{service.title}</h2>
                  <p className="text-foreground-muted mb-4">{service.description}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </main>
      </FadeIn>
    </div>
  );
}
