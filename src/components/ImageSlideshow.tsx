import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import arch1 from "@/assets/architecture-1.jpg";
import arch2 from "@/assets/architecture-2.jpg";
import arch3 from "@/assets/architecture-3.jpg";

const slides = [
  {
    image: arch1,
    title: "Modern Commercial Spaces",
    description: "Innovative designs for contemporary business environments"
  },
  {
    image: arch2,
    title: "Residential Excellence",
    description: "Creating homes that blend aesthetics with functionality"
  },
  {
    image: arch3,
    title: "Interior Architecture",
    description: "Thoughtful spaces that inspire and delight"
  }
];

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
          <div className="mb-8 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-glass p-8 shadow-xl">
            <h2 className="mb-3 text-4xl font-light tracking-tight text-foreground">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg font-light text-muted-foreground">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-6 right-6 top-1/2 flex -translate-y-1/2 justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="h-12 w-12 rounded-full border border-white/20 bg-white/70 backdrop-blur-glass hover:bg-white/90"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="h-12 w-12 rounded-full border border-white/20 bg-white/70 backdrop-blur-glass hover:bg-white/90"
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
