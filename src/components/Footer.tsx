import logoImage from "@/assets/metodo-rei-logo.png";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-card border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center animate-fade-in">
          <div>
            <img src={logoImage} alt="Método REI" className="h-10 md:h-12 w-auto mx-auto" />
          </div>
          
          <p className="text-sm md:text-base text-foreground/60 max-w-2xl px-4">
            Desbloqueie Sua Identidade. Ative Sua Riqueza. Reine na Vida.
          </p>
          
          <div className="text-xs md:text-sm text-foreground/40">
            <p>© 2024 Método REI. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
