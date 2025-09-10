import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Star, Users, Shield } from 'lucide-react';

const Download = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '100K+' },
    { icon: Star, label: 'App Rating', value: '4.9' },
    { icon: Shield, label: 'Verified Content', value: '100%' },
    { icon: Smartphone, label: 'Downloads', value: '500K+' }
  ];

  return (
    <section id="download" className="py-24 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rotate-45" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-islamic-gold rotate-12" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">
            Download NoorAi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of Muslims worldwide who trust NoorAi for authentic Islamic guidance. 
            Available on all platforms.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="glass-card p-6 text-center hover-scale border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px]"
          >
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 h-auto border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 min-w-[200px]"
          >
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Google Play
          </Button>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Free download • No ads • Authentic content • Regular updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;