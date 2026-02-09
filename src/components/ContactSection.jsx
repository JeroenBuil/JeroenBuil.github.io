import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactList = [
  {
    id: 'email',
    label: 'Email',
    icon: 'mail'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'linkedin'
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: 'github'
  },
  {
    id: 'location',
    label: 'Location',
    icon: 'mappin'
  }
];

export const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  
  useEffect(() => {
    // Construct contact info dynamically to avoid bot scraping
    const user = 'jeroen.buil';
    const domain = 'proton.me';
    setEmail(`${user}@${domain}`);
    
    const linkedinUser = 'jeroen-buil';
    setLinkedin(`https://linkedin.com/in/${linkedinUser}`);
    
    const githubUser = 'JeroenBuil';
    setGithub(`https://github.com/${githubUser}`);
  }, []);

  const getContactInfo = (id) => {
    switch(id) {
      case 'email':
        return {
          href: email ? `mailto:${email}` : null,
          text: email,
          isLoaded: !!email,
          isExternal: true
        };
      case 'linkedin':
        return {
          href: linkedin,
          text: 'jeroen-buil',
          isLoaded: !!linkedin,
          isExternal: true
        };
      case 'github':
        return {
          href: github,
          text: 'JeroenBuil',
          isLoaded: !!github,
          isExternal: true
        };
      case 'location':
        return {
          href: "https://maps.app.goo.gl/AG97Aenbr1jXSeAdA",
          text: 'Geneva, Switzerland',
          isLoaded: true,
          isExternal: true
        };
      default:
        return { href: null, text: '', isLoaded: false, isExternal: false };
    }
  };

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'mail':
        return <Mail className="w-6 h-6 text-primary"/>;
      case 'linkedin':
        return <Linkedin className="w-6 h-6 text-primary"/>;
      case 'github':
        return <Github className="w-6 h-6 text-primary"/>;
      case 'mappin':
        return <MapPin className="w-6 h-6 text-primary"/>;
      default:
        return null;
    }
  };

  return (
    <section 
      id="contact"
      className="py-24 px-4 relative"
    >
      <div className=" container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to new opportunities, collaborations, or just a chat about AI, engineering, or anything in between. 
          Feel free to reach out via email or connect with me on LinkedIn. Also check out my Github!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            {/* Contact Items */}
            {contactList.map((contact) => {
              const { href, text, isLoaded, isExternal } = getContactInfo(contact.id);
              return (
                <div key={contact.id} className="space-y-6 justify-center">
                  <div className="flex items-start space-x-1">
                    {isLoaded && href ? (
                      <a 
                        href={href} 
                        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                        className="p3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        {getIcon(contact.icon)}{" "}
                      </a>
                    ) : (
                      <div className="p3 rounded-full bg-primary/10">
                        {getIcon(contact.icon)}{" "}
                      </div>
                    )}
                    <div className="text-center flex-1">
                      <h4 className="font-semibold text-primary text-sm">{contact.label}</h4>
                      {isLoaded && (
                        <a 
                          {...(href && { href })}
                          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                          className={cn(
                            "block",
                            href ? "text-foreground hover:underline cursor-pointer" : "text-foreground cursor-default"
                          )}
                        >
                          {text}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>
    </section>

  )
};