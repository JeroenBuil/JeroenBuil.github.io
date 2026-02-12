import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactList = [
  // {
  //   id: 'email',
  //   label: 'Email',
  //   icon: 'mail'
  // },
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

export const Contact = () => {
  // Contact info state
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  useEffect(() => {
    // Initialize EmailJS with your public key
    // Get this from emailjs.com dashboard
    emailjs.init("SC4TBaP18-nJnd9Q0");
    
    // Construct contact info dynamically to avoid bot scraping
    const linkedinUser = 'jeroen-buil';
    setLinkedin(`https://linkedin.com/in/${linkedinUser}`);
    
    const githubUser = 'JeroenBuil';
    setGithub(`https://github.com/${githubUser}`);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.send(
        "service_bl79vxs",      // Get from emailjs.com dashboard
        "template_bsx2l3f",      // Get from emailjs.com dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const getContactInfo = (id) => {
    switch(id) {
      // case 'email':
      //   return {
      //     href: email ? `mailto:${email}` : null,
      //     text: email,
      //     isLoaded: !!email,
      //     isExternal: true
      //   };
      case 'linkedin':
        return {
          href: linkedin,
          text: linkedin,
          isLoaded: !!linkedin,
          isExternal: true
        };
      case 'github':
        return {
          href: github,
          text: github,
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
          Got a project in mind or want to chat about AI and Engineering? Message me or connect on LinkedIn and Github!
        </p>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">

          {/* Contact Info Section */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="bg-card p-8 rounded-lg">
            <h3 className="messager-card-header">
              Contact Information
            </h3>
            <div className="space-y-8">
            {contactList.map((contact) => {
              const { href, text, isLoaded, isExternal } = getContactInfo(contact.id);
              return (
                <div key={contact.id} className="flex items-center gap-2">
                  {isLoaded && href ? (
                    <a 
                      href={href} 
                      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="p-3 rounded-full bg-background hover:bg-primary/50 flex-shrink-0 cosmic-interaction hover:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.6))]"
                    >
                      {getIcon(contact.icon)}
                    </a>
                  ) : (
                    <div className="p-3 rounded-full bg-background flex-shrink-0">
                      {getIcon(contact.icon)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary text-sm">{contact.label}</h4>
                    {isLoaded && href && (
                      <a 
                        href={href}
                        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                        className="text-foreground hover:underline cursor-pointer block"
                      >
                        {text}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
            </div>
            </div>

            {/* Availability Status Card */}
            <div className="bg-card p-8 rounded-lg">
              <div className="flex items-center gap-3">
                {/* Status Indicator */}
                <div 
                  className={cn(
                    "w-5 h-5 rounded-full",
                    isAvailable ? "bg-green-500" : "bg-red-500"
                  )}
                  style={{ filter: `drop-shadow(0 0 8px ${isAvailable ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'})` }}
                />
                <h4 className="font-semibold text-foreground text-sm">
                  {isAvailable ? "Currently Available" : "Currently Unavailable"}
                </h4>
              </div>
              <p className="text-muted-foreground text-sm mt-4 text-left">
                {isAvailable ? "I'm open to new opportunities! Whether you need a full-time team member or a freelance consultant. Let's talk!" 
                : "I'm currently unavailable to take up new projects, but feel free to leave a message. Perhaps we can make it work!"}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={cn(
            "bg-card p-8 rounded-lg overflow-hidden",
            "transition-all duration-300 card-hover"
          )}>
            {/* Form Title */}
            <h3 className="messager-card-header">
              Send me a message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-md bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <p className="text-green-700 dark:text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-md bg-red-500/10 border border-red-500/30 flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                  <p className="text-red-700 dark:text-red-400 text-sm">Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="messager-input-header">
                  Name
                </label>
                <input type="text" id="contact-name" name="name" required 
                        value={formData.name}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-md bg-background",
                          "border-2 border-input",
                          "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]",
                          "transition-all duration-300",
                          "sm:text-sm"
                        )}
                        placeholder="Jane/John Doe"
                />
                
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="messager-input-header">
                  Email
                </label>
                <input type="email" id="contact-email" name="email" required 
                        value={formData.email}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-md bg-background",
                          "border-2 border-input",
                          "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]",
                          "transition-all duration-300",
                          "sm:text-sm"
                        )}
                        placeholder="j.doe@example.com"
                />
                
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="messager-input-header">
                  Message
                </label>
                <textarea 
                    id="contact-message" 
                    name="message" 
                    required 
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md bg-background",
                      "border-2 border-input",
                      "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]",
                      "transition-all duration-300",
                      "sm:text-sm resize-y"
                    )}
                    placeholder="Your message here..."
                  />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full cosmic-button flex items-center justify-center gap-2 group",
                  isLoading && "opacity-70 cursor-not-allowed"
                )}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send size={18} className="transition-all duration-300 group-hover:[filter:drop-shadow(0_0_12px_var(--color-foreground))]" />
              </button>
            </form>
          </div>


        </div>
      </div>
    </section>

  )
};