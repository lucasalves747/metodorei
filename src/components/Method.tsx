import { Crown, TrendingUp, Brain } from "lucide-react";
import logoImage from "@/assets/metodo-rei-logo.png";

export const Method = () => {
  const pillars = [
    {
      icon: Crown,
      title: "REINAR",
      description: "Assuma o controle da sua vida com clareza, coragem e estratégia.",
    },
    {
      icon: TrendingUp,
      title: "ENRIQUECER",
      description: "Rompa com padrões de escassez, gere novas fontes de renda e construa riqueza com inteligência e propósito.",
    },
    {
      icon: Brain,
      title: "IDENTIDADE",
      description: "Fortaleça quem você é. Desative sabotagens internas e instale sua versão mais poderosa e confiante.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-foreground px-4 ">
              O QUE É O <span className="text"> MÉTODO REI? </span>
            </h2>
            <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
              O Método REI é uma imersão presencial de dois dias, criada para destravar sua mente, 
              alinhar sua visão e ativar uma nova versão sua — mais forte, próspera e no controle.
            </p>
          </div>
          
          {/* Three Pillars */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-center text-primary mb-6 md:mb-8 px-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
              Os 3 Pilares da Transformação:
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`group relative p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] animate-fade-in ${
                    index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{
                    animationDelay: `${0.4 + index * 0.15}s`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <div className="space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <pillar.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    
                    <h4 className="text-xl md:text-2xl font-black text-primary">
                      {pillar.title}
                    </h4>
                    
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-tr-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
