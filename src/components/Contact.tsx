import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@ayaanlabs.com',
      link: 'mailto:contact@ayaanlabs.com'
    },
    {
      icon: Phone,
      label: 'Support',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      value: 'Available 24/7',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '▶️' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about NoorAi? Need support? We're here to help you on your 
            spiritual journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <Card 
                key={index}
                className="glass-card p-6 text-center hover-scale border-border/50 hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-primary to-primary/80 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
                <p className="text-muted-foreground text-sm">{info.value}</p>
              </Card>
            );

            return info.link ? (
              <a key={index} href={info.link} className="block">
                {content}
              </a>
            ) : content;
          })}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Follow Our Journey
          </h3>
          
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="w-14 h-14 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                asChild
              >
                <a href={social.href} aria-label={social.name}>
                  <span className="text-xl">{social.icon}</span>
                </a>
              </Button>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h4 className="text-lg font-medium text-foreground mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest features, Islamic content, and spiritual guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;