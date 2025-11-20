import logoImage from "@/assets/metodo-rei-logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <img src={logoImage} alt="Método REI" className="h-12 w-auto mx-auto" />
          </div>
          
          <p className="text-foreground/60 max-w-2xl">
            Desbloqueie Sua Identidade. Ative Sua Riqueza. Reine na Vida.
          </p>
          
          <div className="text-sm text-foreground/40">
            <p>© 2024 Método REI. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
