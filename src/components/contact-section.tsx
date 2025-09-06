import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Mail, Send } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xrbaodkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yemi.m.fatogun@gmail.com",
      href: "mailto:yemi.m.fatogun@gmail.com"
    },
    {
      icon: SiLinkedin,
      title: "LinkedIn", 
      value: "linkedin.com/in/opeyemifatogun-dev",
      href: "https://www.linkedin.com/in/opeyemifatogun-dev"
    },
    {
      icon: SiGithub,
      title: "GitHub",
      value: "github.com/Fatogun-Opeyemi",
      href: "https://github.com/Fatogun-Opeyemi/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Let's Create Together</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className={`grid md:grid-cols-1 lg:grid-cols-12 gap-12 bg-card border border-border p-6 md:p-8 rounded-2xl shadow-lg ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}>
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <div key={contact.title} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">{contact.title}</h4>
                      <a
                        href={contact.href}
                        target={contact.title !== 'Email' ? '_blank' : undefined}
                        rel={contact.title !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-input"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-input"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-input"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full resize-vertical bg-input"
                  placeholder="How can I help you?"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
