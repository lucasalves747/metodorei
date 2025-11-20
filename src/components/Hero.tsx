import { Button } from "@/components/ui/button";
import crownImage from "@/assets/crown.png";
import logoImage from "@/assets/metodo-rei-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-20" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="mb-4 md:mb-6">
              <img src={logoImage} alt="Método REI" className="h-12 md:h-16 w-auto mx-auto lg:mx-0" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-primary italic">Desbloqueie Sua Identidade.</span>
              <br />
              <span className="text-foreground">Ative Sua Riqueza.</span>
              <br />
              <span className="text-primary">Reine na Vida.</span>
            </h1>

            <div className="space-y-2">
              <p className="text-foreground/90 text-base md:text-lg lg:text-xl font-semibold">
                22 e 23 de Novembro | Jacksonville - Evento Presencial Transformador
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 text-foreground/80 text-sm md:text-base leading-relaxed">
              <p>
                Você sente que está fazendo tudo certo, mas a vida não flui como deveria?
                <br />
                Talvez o problema não esteja no que você faz, mas em quem você ainda não se tornou.
              </p>

              <p className="font-medium">
                Em apenas <span className="text-primary font-bold">2 dias presenciais</span>, o Método REI vai te
                conduzir por uma jornada intensa de desbloqueio, reconstrução e ativação — para que você finalmente
                governe sua vida com clareza, autoridade e prosperidade real.
              </p>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                <span className="text-xl md:text-2xl">🎯</span>
                <span className="text-foreground/90 text-sm md:text-base">Liberdade Financeira</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                <span className="text-xl md:text-2xl">🧠</span>
                <span className="text-foreground/90 text-sm md:text-base">Mentalidade e Identidade Restauradas</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                <span className="text-xl md:text-2xl">🔥</span>
                <span className="text-foreground/90 text-sm md:text-base">Plano de Ação com Direção Clara</span>
              </div>
            </div>

            <div className="pt-4 md:pt-6">
              <p className="text-foreground/90 font-semibold mb-3 md:mb-4 text-sm md:text-base">
                Você está pronto para esta mudança?
              </p>
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 md:px-12 py-4 md:py-6 text-base md:text-lg"
                onClick={() => document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" })}
              >
                Inscreva-se Agora!
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-3xl" />
              <img
                src={crownImage}
                alt="Coroa dourada"
                className="hidden md:block relative w-full max-w-xs md:max-w-md lg:max-w-xl drop-shadow-[0_0_80px_rgba(212,175,55,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
