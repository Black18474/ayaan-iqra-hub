const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Download', href: '#download' },
        { name: 'Updates', href: '#' },
        { name: 'Support', href: '#contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#story' },
        { name: 'Team', href: '#story' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              Ayaan Labs
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bridging Islamic knowledge with modern technology to empower Muslims worldwide.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-1">Made with ❤️ for the Ummah</p>
              <p>Authentic • Reliable • Innovative</p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : window.open(link.href, '_blank')}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Ayaan Labs. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built with React & Tailwind CSS</span>
              <div className="flex items-center gap-2">
                <span>Made in</span>
                <span className="text-red-500">🇺🇸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;