const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-brand-darker border-t border-white/5">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-brand-light/50 text-sm">
          Golldrine Tech — Automação inteligente para negócios reais.
        </p>
        <p className="text-muted-foreground text-xs mt-3">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;