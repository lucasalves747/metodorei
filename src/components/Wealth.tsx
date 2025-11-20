export const Wealth = () => {
  const benefits = [
    "Romper padrões de escassez e travas invisíveis",
    "Desenvolver uma mentalidade rica, prática e produtiva",
    "Ativar novas fontes de renda, mesmo começando do zero",
    "Organizar sua vida financeira com clareza e leveza",
    "Multiplicar o que você já tem — com estratégia e direção",
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black">
              <span className="text-primary">💰 ENRIQUECER</span>
              <span className="text-foreground"> É UMA QUESTÃO DE </span>
              <span className="text-primary">IDENTIDADE</span>
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80 max-w-3xl mx-auto">
              <p className="font-semibold">
                Você não precisa de mais um curso.
              </p>
              <p>
                Você precisa de clareza sobre quem você é, pra finalmente saber como multiplicar o que tem — 
                com foco, paz e consistência.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              No Método REI, você vai:
            </h3>
            
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <p className="text-foreground/90 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center space-y-4 pt-8">
            <div className="inline-block px-8 py-6 bg-primary/10 border-2 border-primary/30 rounded-2xl">
              <p className="text-xl font-bold text-foreground mb-2">
                💡 Riqueza sem identidade gera escravidão.
              </p>
              <p className="text-xl font-bold text-primary">
                Riqueza com identidade gera governo, legado e paz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
