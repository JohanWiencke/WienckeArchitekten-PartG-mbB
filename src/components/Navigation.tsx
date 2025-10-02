import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border-2 border-white/30 bg-white/40 backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 pointer-events-none" />
          <div className="relative flex items-center justify-between px-8 py-6">
            <Link to="/" className="text-2xl font-light tracking-tight text-foreground transition-opacity hover:opacity-70">
              Wiencke-Architekten
            </Link>
            
            <div className="flex items-center gap-8">
              <div className="flex gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-sm font-light tracking-wide transition-all duration-300",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex gap-2 ml-4 pl-4 border-l border-border/30">
                <Button
                  variant={language === 'de' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('de')}
                  className="h-8 px-3 text-xs font-light"
                >
                  DE
                </Button>
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="h-8 px-3 text-xs font-light"
                >
                  EN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
