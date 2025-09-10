import { BookOpen, MessageSquare, Target, Wifi } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Qur\'an Guidance',
      description: 'Get AI-assisted understanding of Qur\'an verses with contextual explanations, translations, and scholarly interpretations.',
      gradient: 'from-islamic-green to-primary'
    },
    {
      icon: MessageSquare,
      title: 'Hadith Insights',
      description: 'Query authentic Hadiths and receive accurate, scholarly-backed explanations with full chain of narration.',
      gradient: 'from-islamic-blue to-blue-500'
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Track your spiritual growth and receive customized recommendations based on your learning preferences.',
      gradient: 'from-islamic-gold to-yellow-500'
    },
    {
      icon: Wifi,
      title: 'Offline Access',
      description: 'Access essential teachings, prayers, and content without internet connectivity for uninterrupted worship.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gradient">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how NoorAi revolutionizes Islamic learning with advanced AI technology 
            and authentic scholarly content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="relative p-8 glass-card hover-scale group border-border/50 hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;