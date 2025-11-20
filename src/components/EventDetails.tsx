import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Gift, CreditCard, Users, Ban } from "lucide-react";

export const EventDetails = () => {
  const details = [
    { icon: MapPin, label: "Local", value: "Jacksonville, FL" },
    { icon: Calendar, label: "Data", value: "22 e 23 de Novembro" },
    { icon: Clock, label: "Horário", value: "9h às 19h" },
  ];

  const includes = [
    "Imersão presencial de 2 dias",
    "Acesso à Jornada Pós-Rei (12 dias guiados)",
    "Comunidade exclusiva",
  ];

  return (
    <section id="inscricao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Last Call */}
          <div className="text-center space-y-6 p-12 bg-destructive/5 border-2 border-destructive/30 rounded-3xl">
            <h2 className="text-4xl lg:text-5xl font-black">
              <span className="text-destructive">🚨 ÚLTIMA</span>
              <span className="text-foreground"> CHAMADA</span>
            </h2>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl text-foreground/90 font-semibold">
                ⚠️ Essa é sua chance real de fazer diferente ainda em 2025.
              </p>
              <p className="text-lg text-foreground/80">
                As vagas são limitadas e o evento é 100% presencial.<br />
                Não vai ter replay. Não tem segunda chamada.
              </p>
              <p className="text-xl font-bold text-foreground pt-4">
                Você pode continuar como está...<br />
                <span className="text-primary">Ou dar o passo que muda tudo.</span>
              </p>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl font-black">
                <span className="text-primary">✅ DETALHES</span>
                <span className="text-foreground"> DO EVENTO</span>
              </h3>
            </div>
            
            {/* Location, Date, Time */}
            <div className="grid md:grid-cols-3 gap-6">
              {details.map((detail, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">{detail.label}</p>
                    <p className="text-lg font-bold text-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Includes */}
            <div className="p-8 bg-card border border-border rounded-2xl space-y-6">
              <div className="flex items-center gap-3">
                <Gift className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-black text-foreground">Inclui:</h4>
              </div>
              
              <div className="space-y-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-foreground/90 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Payment & Limits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 bg-card border border-primary/30 rounded-xl">
                <CreditCard className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-foreground/90 font-semibold">💳 Parcelamento disponível</p>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-card border border-primary/30 rounded-xl">
                <Users className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-foreground/90 font-semibold">👫 Desconto especial para casais</p>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-card border border-destructive/30 rounded-xl">
                <Ban className="w-8 h-8 text-destructive flex-shrink-0" />
                <p className="text-foreground/90 font-semibold">⛔ Vagas limitadas</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center space-y-6 pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="px-16 py-8 text-xl rounded-full"
            >
              INSCREVER-SE AGORA 👑
            </Button>
            
            <p className="text-foreground/60 text-sm">
              Clique no botão acima para garantir sua vaga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
