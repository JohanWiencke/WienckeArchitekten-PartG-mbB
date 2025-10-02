import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import arch1 from "@/assets/architecture-1.jpg";
import arch2 from "@/assets/architecture-2.jpg";
import arch3 from "@/assets/architecture-3.jpg";

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image: arch1,
      title: t('hero.title1'),
      description: t('hero.desc1'),
    },
    {
      image: arch2,
      title: t('hero.title2'),
      description: t('hero.desc2'),
    },
    {
      image: arch3,
      title: t('hero.title3'),
      description: t('hero.desc3'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-end justify-center pb-32">
        <div className="w-full max-w-4xl px-6 text-center animate-fade-in">
          <div className="mb-8 rounded-2xl border-2 border-white/30 bg-white/40 backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 pointer-events-none" />
            <div className="relative">
              <h2 className="mb-3 text-4xl font-light tracking-tight text-foreground">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg font-light text-muted-foreground">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-6 right-6 top-1/2 flex -translate-y-1/2 justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="h-12 w-12 rounded-full border-2 border-white/30 bg-white/40 backdrop-blur-[20px] hover:bg-white/50 transition-all shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="h-12 w-12 rounded-full border-2 border-white/30 bg-white/40 backdrop-blur-[20px] hover:bg-white/50 transition-all shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-foreground"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
