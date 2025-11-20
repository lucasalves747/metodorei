import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import crownImage from "@/assets/crown.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-20" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-primary" />
              <h2 className="text-primary font-bold text-xl tracking-wider uppercase">Método REI</h2>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-primary italic">Desbloqueie Sua Identidade.</span>
              <br />
              <span className="text-foreground">Ative Sua Riqueza.</span>
              <br />
              <span className="text-primary">Reine na Vida.</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-foreground/90 text-lg font-semibold">
                Método REI | 22 e 23 de Novembro | Jacksonville - Evento Presencial Transformador
              </p>
            </div>
            
            <div className="space-y-4 text-foreground/80 text-base leading-relaxed">
              <p>
                Você sente que está fazendo tudo certo, mas a vida não flui como deveria?
                <br />
                Talvez o problema não esteja no que você faz, mas em quem você ainda não se tornou.
              </p>
              
              <p className="font-medium">
                Em apenas <span className="text-primary font-bold">2 dias presenciais</span>, o Método REI vai te conduzir por uma 
                jornada intensa de desbloqueio, reconstrução e ativação — para que você 
                finalmente governe sua vida com clareza, autoridade e prosperidade real.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-foreground/90">Liberdade Financeira</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <span className="text-foreground/90">Mentalidade e Identidade Restauradas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔥</span>
                <span className="text-foreground/90">Plano de Ação com Direção Clara</span>
              </div>
            </div>
            
            <div className="pt-6">
              <p className="text-foreground/90 font-semibold mb-4">Você está pronto para esta mudança?</p>
              <Button 
                variant="hero" 
                size="lg"
                className="w-full sm:w-auto rounded-full px-12 py-6 text-lg"
                onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Inscreva-se Agora!
              </Button>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-3xl" />
              <img 
                src={crownImage} 
                alt="Coroa dourada" 
                className="relative w-full max-w-xl drop-shadow-[0_0_80px_rgba(212,175,55,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
