import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { watches } from "@/data/content";
import { useToast } from "@/hooks/use-toast";
import { Section } from "../Section";
import { Reveal } from "../Reveal";
import { WatchDial } from "./WatchDial";

const field =
  "w-full border-0 border-b border-foreground bg-transparent px-0 py-3 text-lg placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-0";

export const Watches = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    setSending(true);
    try {
      const res = await fetch("/api/watches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          watch: fd.get("watch"),
          link: fd.get("link"),
          name: fd.get("name"),
          note: fd.get("note"),
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send suggestion");
      toast({ title: "Suggestion received", description: "Thanks — I'll add it to my research list." });
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
    <Section id="watches" index="05 — Off the clock" title="The watch list.">
      <Reveal className="grid items-center gap-8 md:grid-cols-[1fr_9rem]">
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Outside of data, I&rsquo;m into watches. These are the ones I&rsquo;m eyeing right now — and I&rsquo;d love
          your suggestions on what else deserves a spot.
        </p>
        <WatchDial className="hidden w-36 text-foreground md:block" />
      </Reveal>

      <ul className="mt-12 border-t border-foreground">
        {watches.map((w, i) => {
          const body = (
            <>
              <span className="label md:pt-2">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-3xl leading-tight transition-colors group-hover:text-primary md:text-4xl">
                  {w.brand} <span className="italic">{w.model}</span>
                </h3>
                <p className="mt-2 text-muted-foreground">{w.title}. {w.detail}</p>
                {w.source && <p className="label mt-3">{w.source}</p>}
              </div>
              {w.href && (
                <ArrowUpRight
                  size={26}
                  className="hidden shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:block"
                />
              )}
            </>
          );
          const cls = "group grid gap-3 py-7 md:grid-cols-[3rem_1fr_auto] md:gap-6";
          return (
            <Reveal as="li" key={w.model} delay={i * 80} className="border-b border-border">
              {w.href ? (
                <a href={w.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {body}
                </a>
              ) : (
                <div className={cls}>{body}</div>
              )}
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-16">
        <h3 className="text-3xl md:text-4xl">Suggest a watch</h3>
        <p className="mt-2 text-muted-foreground">Know one I should look at? Send it over.</p>
        <form onSubmit={onSubmit} className="mt-6 max-w-xl space-y-6">
          <label className="block">
            <span className="label">Watch (brand & model)</span>
            <input name="watch" type="text" required maxLength={200} className={field} placeholder="e.g. Seiko 5 SNK809" />
          </label>
          <label className="block">
            <span className="label">Link (optional)</span>
            <input name="link" type="url" maxLength={500} className={field} placeholder="https://…" />
          </label>
          <label className="block">
            <span className="label">Why it&rsquo;s good (optional)</span>
            <textarea name="note" rows={3} maxLength={1000} className={`${field} resize-none`} />
          </label>
          <label className="block">
            <span className="label">Your name (optional)</span>
            <input name="name" type="text" maxLength={100} autoComplete="name" className={field} />
          </label>
          <button type="submit" disabled={sending} className="btn-primary">
            {sending ? "Sending…" : "Send suggestion"} <Send size={14} />
          </button>
        </form>
      </Reveal>
    </Section>
  );
};
