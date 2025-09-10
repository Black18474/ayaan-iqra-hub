import { Card } from '@/components/ui/card';
import founder1 from '@/assets/founder-1.jpg';
import founder2 from '@/assets/founder-2.jpg';
import founder3 from '@/assets/founder-3.jpg';

const Story = () => {
  const team = [
    {
      name: 'Ahmad Hassan',
      role: 'Founder & Lead Developer',
      image: founder1,
      description: 'Tech entrepreneur passionate about bridging Islamic knowledge with modern technology.'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Co-Founder & AI Specialist',
      image: founder2,
      description: 'AI researcher specializing in natural language processing for Arabic and Islamic texts.'
    },
    {
      name: 'Sheikh Omar Malik',
      role: 'Co-Founder & Content Advisor',
      image: founder3,
      description: 'Islamic scholar ensuring authenticity and accuracy of all religious content.'
    }
  ];

  return (
    <section id="story" className="py-24 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gradient">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ayaan Labs was founded with a vision to democratize Islamic knowledge through technology. 
              Our mission began when we realized the vast gap between traditional Islamic learning and 
              the digital age.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine cutting-edge AI with authentic Islamic scholarship to create tools that help 
              Muslims deepen their understanding of faith, whether they're beginners seeking guidance 
              or scholars conducting research.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="glass-card hover-scale p-8 text-center border-border/50 hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {member.name}
              </h3>
              
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">
                {member.role.toUpperCase()}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-muted-foreground">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm tracking-widest">EST. 2024</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;