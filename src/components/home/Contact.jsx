import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/content";
import { useToast } from "@/hooks/use-toast";
import { Section } from "../Section";
import { Reveal } from "../Reveal";

const field =
  "w-full border-0 border-b border-foreground bg-transparent px-0 py-3 text-lg placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-0";

export const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send message");
      toast({ title: "Message sent", description: "Thanks — I'll get back to you soon." });
      form.reset();
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" index="06 — Contact" title="Let's work together.">
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="link-u break-all font-display text-3xl md:text-5xl"
        >
          {profile.email}
        </a>
        <p className="label mt-4">
          {profile.location} ·{" "}
          <a href={profile.phoneHref} className="link-u">{profile.phone}</a>
        </p>

        <form onSubmit={onSubmit} className="mt-14 max-w-xl space-y-6">
          <label className="block">
            <span className="label">Name</span>
            <input name="name" type="text" required autoComplete="name" className={field} />
          </label>
          <label className="block">
            <span className="label">Email</span>
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <label className="block">
            <span className="label">Message</span>
            <textarea name="message" required rows={4} className={`${field} resize-none`} />
          </label>
          <button type="submit" disabled={sending} className="btn-primary">
            {sending ? "Sending…" : "Send message"} <Send size={14} />
          </button>
        </form>
      </Reveal>
    </Section>
  );
};
