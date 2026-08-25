import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { TerminalWindow } from "./TerminalWindow";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      e.target.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="h-screen py-8 px-4 relative bg-card/30 flex flex-col items-center justify-center overflow-y-auto snap-start snap-always">
      <div className="container mx-auto max-w-5xl w-full">
        <Reveal className="text-center mb-3">
          <span className="eyebrow text-center">Connect</span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal">Get In Touch</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I&apos;m always open to discussing new opportunities.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <Reveal className="text-left">
            <TerminalWindow title="aman@bhamboo — ~/contact">
              <p className="text-primary mb-4">
                <span className="mr-2">$</span>cat contact.txt
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="p-3 border border-primary/30 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground">email:</h4>
                    <a
                      href="mailto:amankumarbhamboo14022005@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      amankumarbhamboo14022005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 border border-primary/30 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground">phone:</h4>
                    <a
                      href="tel:+916367755376"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 63677 55376
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 border border-primary/30 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground">location:</h4>
                    <span className="text-muted-foreground">
                      Jhunjhunu, India
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-primary mt-3 mb-3">
                <span className="mr-2">$</span>ls -la ./socials
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/aman1402/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/__aman___1402/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://github.com/AmanKumarBhamboo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </TerminalWindow>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={150} className="text-left">
            <TerminalWindow title="aman@bhamboo — ~/contact">
              <p className="text-primary mb-4">
                <span className="mr-2">$</span>./send-message.sh
              </p>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">
                    <span className="text-primary mr-1">?</span>your name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-input bg-background focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    placeholder="jane_doe"
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">
                    <span className="text-primary mr-1">?</span>your email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-input bg-background focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">
                    <span className="text-primary mr-1">?</span>your message:
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-input bg-background focus:outline-none focus:border-primary transition-colors resize-none font-mono text-sm"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn("btn-solid w-full")}
                >
                  {isSubmitting ? "sending..." : "send_message()"}
                  <Send size={16} />
                </button>
              </form>
            </TerminalWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
