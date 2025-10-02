import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="mb-4 text-5xl font-light tracking-tight text-foreground">
            {t('contact.title')}
          </h1>
          <p className="mb-16 text-lg font-light text-muted-foreground">
            {t('contact.subtitle')}
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl border-2 border-white/30 bg-white/40 backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 pointer-events-none" />
                <div className="relative">
                  <h3 className="mb-6 text-xl font-light text-foreground">{t('contact.info')}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-light text-muted-foreground">{t('contact.email')}</p>
                        <a href="mailto:kontakt@wiencke-architekten.de" className="text-foreground hover:text-primary transition-colors">
                          kontakt@wiencke-architekten.de
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-light text-muted-foreground">{t('contact.phone')}</p>
                        <a href="tel:+493518403831" className="text-foreground hover:text-primary transition-colors">
                          +49 351 84038317
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-light text-muted-foreground">{t('contact.address')}</p>
                        <p className="text-foreground">
                          Wiencke-Architekten PartG mbB<br />
                          Tannenstraße 34<br />
                          01099 Dresden, Germany
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-white/30 bg-white/40 backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 pointer-events-none" />
                <div className="relative">
                  <h3 className="mb-4 text-xl font-light text-foreground">{t('contact.hours')}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('contact.monday-friday')}</span>
                      <span className="text-foreground">8:30 - 17:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('contact.saturday')}</span>
                      <span className="text-foreground">{t('contact.closed')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('contact.sunday')}</span>
                      <span className="text-foreground">{t('contact.closed')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-white/30 bg-white/40 backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 pointer-events-none z-10" />
              <div className="relative h-full min-h-[600px]">
                <iframe
                  title={t('contact.location')}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=13.7344%2C51.0597%2C13.7544%2C51.0697&layer=mapnik&marker=51.0647%2C13.7444"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
