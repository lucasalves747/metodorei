import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não. O Método REI é pra quem está disposto a mergulhar de verdade na própria virada.",
    },
    {
      question: "Funciona para qualquer idade?",
      answer: "Sim. Temos participantes entre 18 e 65+, de todas as áreas.",
    },
    {
      question: "Tem foco espiritual?",
      answer: "Sim. A reconexão com valores e princípios está presente em todo o processo.",
    },
    {
      question: "E o lado financeiro?",
      answer: "Você será guiado por quem vive o que ensina — ensinando como criar fontes de renda com inteligência, direção e valores.",
    },
    {
      question: "Posso ir com meu cônjuge?",
      answer: "Sim. Temos um desconto especial de 50% no segundo ingresso.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-primary">❓ PERGUNTAS</span>
              <span className="text-foreground"> FREQUENTES</span>
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-4 md:px-6 hover:border-primary/50 transition-colors animate-fade-in"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <AccordionTrigger className="text-sm md:text-lg font-semibold text-left hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-foreground/80 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
