import { Button } from '@/components/ui/button';
import heroPattern from '@/assets/hero-pattern.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-islamic-gold/40 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">NoorAi</span>
            <br />
            <span className="text-4xl md:text-5xl font-medium text-muted-foreground">
              AI Islamic Knowledge
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            AI-powered guidance for Qur'an, Hadith, and Islamic teachings. 
            Learn, explore, and understand your faith intuitively with cutting-edge technology.
          </p>
        </div>
        
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-4 h-auto animate-glow shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => scrollToSection('download')}
          >
            Download Now
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 h-auto border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => scrollToSection('features')}
          >
            Learn More
          </Button>
        </div>
        
        <div className="animate-fade-in-up mt-16 text-sm text-muted-foreground" style={{ animationDelay: '0.9s' }}>
          Trusted by over 100,000+ Muslims worldwide
        </div>
      </div>
    </section>
  );
};

export default Hero;