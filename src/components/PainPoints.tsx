import { AlertCircle } from "lucide-react";

export const PainPoints = () => {
  const painPoints = [
    "Trabalha demais e mesmo assim não sai do lugar?",
    "Já fez cursos, mentorias ou terapias… mas continua travado?",
    "Tem potencial, mas se sabota sempre que começa a crescer?",
    "Ama sua família, mas sente que poderia ser um cônjuge ou pai/mãe melhor?",
    "Quer direção e clareza, mas vive confuso, sobrecarregado ou paralisado?",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <AlertCircle className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-primary font-bold uppercase text-xs md:text-sm tracking-wider">Você se sente assim?</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground px-4">
              Você sente que:
            </h2>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="p-4 md:p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                <p className="text-base md:text-lg text-foreground/90">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-4 md:pt-8">
            <div className="inline-block px-4 md:px-8 py-3 md:py-4 bg-destructive/10 border border-destructive/30 rounded-xl">
              <p className="text-base md:text-xl font-bold text-foreground">
                ⚠️ Se respondeu "sim" para qualquer uma dessas, o Método REI é pra você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
