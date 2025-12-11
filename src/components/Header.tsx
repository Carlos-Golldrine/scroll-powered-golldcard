import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">G</span>
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Golld<span className="text-gold">Card</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#modelos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Modelos
          </a>
          <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </nav>
        
        <Button variant="hero" size="sm">
          Peça Já o Seu!
        </Button>
      </div>
    </header>
  );
};

export default Header;
