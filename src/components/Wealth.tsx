export const Wealth = () => {
  const benefits = [
    "Romper padrões de escassez e travas invisíveis",
    "Desenvolver uma mentalidade rica, prática e produtiva",
    "Ativar novas fontes de renda, mesmo começando do zero",
    "Organizar sua vida financeira com clareza e leveza",
    "Multiplicar o que você já tem — com estratégia e direção",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-primary">💰 ENRIQUECER</span>
              <span className="text-foreground"> É UMA QUESTÃO DE </span>
              <span className="text-primary">IDENTIDADE</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto px-4">
              <p className="font-semibold">
                Você não precisa de mais um curso.
              </p>
              <p>
                Você precisa de clareza sobre quem você é, pra finalmente saber como multiplicar o que tem — 
                com foco, paz e consistência.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-6 md:mb-8 px-4">
              No Método REI, você vai:
            </h3>
            
            <div className="grid gap-3 md:gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm md:text-base">✓</span>
                  </div>
                  <p className="text-foreground/90 text-sm md:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center space-y-3 md:space-y-4 pt-4 md:pt-8">
            <div className="inline-block px-4 md:px-8 py-4 md:py-6 bg-primary/10 border-2 border-primary/30 rounded-2xl mx-4">
              <p className="text-base md:text-xl font-bold text-foreground mb-2">
                💡 Riqueza sem identidade gera escravidão.
              </p>
              <p className="text-base md:text-xl font-bold text-primary">
                Riqueza com identidade gera governo, legado e paz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
