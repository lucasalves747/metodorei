import { Sword, Building2, Rocket } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black">
              <span className="text-primary">🧠 COMO </span>
              <span className="text-foreground">FUNCIONA</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className="space-y-6 p-8 bg-card border-2 border-destructive/30 rounded-2xl">
              <div className="flex items-center gap-3">
                <Sword className="w-10 h-10 text-destructive" />
                <div>
                  <h3 className="text-2xl font-black text-destructive">DIA 1</h3>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">A Limpeza</p>
                </div>
              </div>
              
              <p className="text-foreground/90 leading-relaxed">
                Elimine bloqueios mentais e emocionais que travam sua prosperidade.
                <br /><br />
                <span className="text-foreground/70">
                  Traumas, medo, culpa, confusão — tudo é confrontado e tratado.
                </span>
              </p>
            </div>
            
            {/* Day 2 */}
            <div className="space-y-6 p-8 bg-card border-2 border-primary/50 rounded-2xl">
              <div className="flex items-center gap-3">
                <Building2 className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="text-2xl font-black text-primary">DIA 2</h3>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">A Reconstrução</p>
                </div>
              </div>
              
              <p className="text-foreground/90 leading-relaxed">
                Você ativa sua nova identidade com visão clara, mente leve e postura de reinante.
                <br /><br />
                <span className="text-foreground/70">
                  Você sai pronto pra aplicar tudo na vida real.
                </span>
              </p>
            </div>
            
            {/* Post-REI */}
            <div className="space-y-6 p-8 bg-card border-2 border-accent/50 rounded-2xl">
              <div className="flex items-center gap-3">
                <Rocket className="w-10 h-10 text-accent" />
                <div>
                  <h3 className="text-2xl font-black text-accent">JORNADA PÓS-REI</h3>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">A Consolidação</p>
                </div>
              </div>
              
              <p className="text-foreground/90 leading-relaxed">
                12 dias online com práticas e desafios práticos para implementar em:
                <br /><br />
                <span className="text-sm text-foreground/70">
                  💰 Finanças | ❤️ Casamento | 💪 Saúde<br/>
                  👨‍👩‍👧 Filhos | 📈 Negócios | 🧠 Mentalidade<br/>
                  📊 Planejamento | 🎯 Liderança | 🌍 Impacto<br/>
                  🔥 Produtividade | 🕊️ Vida Plena | 🔓 Autonomia
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
