import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Ayaan Labs
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          <Button 
            variant="default"
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
            onClick={() => scrollToSection('download')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;