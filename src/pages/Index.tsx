import Navigation from "@/components/Navigation";
import ImageSlideshow from "@/components/ImageSlideshow";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  // Placeholder images - user will upload their own later
  const placeholderProjects = Array(12).fill(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ImageSlideshow />
      
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-light tracking-tight text-foreground">
            {t('gallery.title')}
          </h2>
          <p className="text-lg font-light text-muted-foreground">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((_, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] rounded-2xl border-2 border-white/30 bg-white/40 backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-sm font-light text-muted-foreground">
                    Projekt {index + 1}
                  </p>
                  <p className="text-xs font-light text-muted-foreground/60 mt-2">
                    {t('gallery.subtitle')}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
