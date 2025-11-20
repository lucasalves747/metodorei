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
    <section id="inscricao" className="py-12 md:py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-10 md:space-y-16">
          {/* Last Call */}
          <div className="text-center space-y-4 md:space-y-6 p-6 md:p-12 bg-destructive/5 border-2 border-destructive/30 rounded-2xl md:rounded-3xl animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-destructive">🚨 ÚLTIMA</span>
              <span className="text-foreground"> CHAMADA</span>
            </h2>

            <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto px-4">
              <p className="text-base md:text-xl text-foreground/90 font-semibold">
                ⚠️ Essa é sua chance real de fazer diferente ainda em 2025.
              </p>
              <p className="text-sm md:text-lg text-foreground/80">
                As vagas são limitadas e o evento é 100% presencial.
                <br />
                Não vai ter replay. Não tem segunda chamada.
              </p>
              <p className="text-base md:text-xl font-bold text-foreground pt-2 md:pt-4">
                Você pode continuar como está...
                <br />
                <span className="text-primary">Ou dar o passo que muda tudo.</span>
              </p>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-6 md:space-y-8">
            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black px-4">
                <span className="text-primary">✅ DETALHES</span>
                <span className="text-foreground"> DO EVENTO</span>
              </h3>
            </div>

            {/* Location, Date, Time */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-border rounded-xl animate-fade-in"
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-foreground/60 font-medium">{detail.label}</p>
                    <p className="text-sm md:text-lg font-bold text-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Includes */}
            <div
              className="p-6 md:p-8 bg-card border border-border rounded-2xl space-y-4 md:space-y-6 animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
            >
              <div className="flex items-center gap-3">
                <Gift className="w-6 md:w-8 h-6 md:h-8 text-primary" />
                <h4 className="text-xl md:text-2xl font-black text-foreground">Inclui:</h4>
              </div>

              <div className="space-y-2 md:space-y-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary text-lg md:text-xl">✓</span>
                    <span className="text-foreground/90 text-sm md:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment & Limits */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-primary/30 rounded-xl animate-fade-in"
                style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}
              >
                <CreditCard className="w-6 md:w-8 h-6 md:h-8 text-primary flex-shrink-0" />
                <p className="text-foreground/90 font-semibold text-sm md:text-base"> Parcelamento disponível</p>
              </div>

              <div
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-primary/30 rounded-xl animate-fade-in"
                style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}
              >
                <Users className="w-6 md:w-8 h-6 md:h-8 text-primary flex-shrink-0" />
                <p className="text-foreground/90 font-semibold text-sm md:text-base">Desconto especial para casais</p>
              </div>

              <div
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-card border border-destructive/30 rounded-xl sm:col-span-2 lg:col-span-1 animate-fade-in"
                style={{ animationDelay: "0.9s", animationFillMode: "backwards" }}
              >
                <Ban className="w-6 md:w-8 h-6 md:h-8 text-destructive flex-shrink-0" />
                <p className="text-foreground/90 font-semibold text-sm md:text-base"> Vagas limitadas</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center space-y-4 md:space-y-6 pt-6 md:pt-8 animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "backwards" }}
          >
            <a href="https://metodorei.com/form-jackson-viler
">
            <Button
              variant="hero"
              size="lg"
              className="px-8 md:px-16 py-6 md:py-8 text-lg md:text-xl rounded-full w-full sm:w-auto"
            >
              INSCREVER-SE AGORA
            </Button>
            </a>

            
            <p className="text-foreground/60 text-xs md:text-sm px-4">Clique no botão acima para garantir sua vaga</p>
          </div>
        </div>
      </div>
    </section>
  );
};
