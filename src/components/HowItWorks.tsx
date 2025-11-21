import { useEffect, useRef } from "react";
import { Sword, Building2, Rocket } from "lucide-react";

export const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
          <div className="text-center space-y-4 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-primary">COMO </span>
              <span className="text-foreground">FUNCIONA</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Day 1 */}
            <div className="reveal space-y-4 md:space-y-6 p-6 md:p-8 bg-card border-2 border-destructive/30 rounded-2xl">
              <div className="flex items-center gap-3">
                <Sword className="w-8 md:w-10 h-8 md:h-10 text-destructive" />
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-destructive">DIA 1</h3>
                  <p className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                    A Limpeza
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                Elimine bloqueios mentais e emocionais que travam sua prosperidade.
                <br />
                <br />
                <span className="text-foreground/70">
                  Traumas, medo, culpa, confusão — tudo é confrontado e tratado.
                </span>
              </p>
            </div>

            {/* Day 2 */}
            <div className="reveal space-y-4 md:space-y-6 p-6 md:p-8 bg-card border-2 border-primary/50 rounded-2xl">
              <div className="flex items-center gap-3">
                <Building2 className="w-8 md:w-10 h-8 md:h-10 text-primary" />
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-primary">DIA 2</h3>
                  <p className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                    A Reconstrução
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                Você ativa sua nova identidade com visão clara, mente leve e postura de reinante.
                <br />
                <br />
                <span className="text-foreground/70">
                  Você sai pronto pra aplicar tudo na vida real.
                </span>
              </p>
            </div>

            {/* Post-REI */}
            <div className="reveal space-y-4 md:space-y-6 p-6 md:p-8 bg-card border-2 border-accent/50 rounded-2xl sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <Rocket className="w-8 md:w-10 h-8 md:h-10 text-accent" />
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-accent">JORNADA PÓS-REI</h3>
                  <p className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                    A Consolidação
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                12 dias online com práticas e desafios práticos para implementar em:
                <br />
                <br />
                <span className="text-xs md:text-sm text-foreground/70">
                   Finanças | Casamento | Saúde
                  <br />
                   Filhos | Negócios | Mentalidade
                  <br />
                 Planejamento | Liderança | Impacto
                  <br />
                 Produtividade | Vida Plena | Autonomia
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
