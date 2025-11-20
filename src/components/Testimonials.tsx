import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cheguei travado em todas as áreas. Saí destravado em todas elas.",
      author: "Felipe S.",
      role: "Empresário",
    },
    {
      quote: "Achei que era um problema financeiro. Era um problema de identidade. Quando desbloqueei isso, minha empresa explodiu.",
      author: "Maria Eduarda",
      role: "Mentora e mãe",
    },
    {
      quote: "Foi o evento mais intenso e libertador da minha vida.",
      author: "Carlos M.",
      role: "Empresário e pastor",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-primary">💬 DEPOIMENTOS</span>
              <span className="text-foreground"> DE TRANSFORMAÇÃO REAL</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative p-6 md:p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                <Quote className="absolute top-4 md:top-6 right-4 md:right-6 w-8 md:w-12 h-8 md:h-12 text-primary/20" />
                
                <div className="space-y-4 md:space-y-6 relative z-10">
                  <p className="text-sm md:text-lg text-foreground/90 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="pt-3 md:pt-4 border-t border-border">
                    <p className="font-bold text-foreground text-sm md:text-base">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
