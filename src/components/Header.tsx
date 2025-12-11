import { Button } from "./ui/button";
import golldrineIcon from "@/assets/golldrine-icon.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-golldrine-bg/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={golldrineIcon} alt="Golldrine" className="w-8 h-8" />
          <span className="font-display text-xl font-semibold text-foreground">
            Golld<span className="text-primary">Card</span>
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
