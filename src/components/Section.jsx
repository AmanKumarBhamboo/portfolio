import { Reveal } from "./Reveal";

export const Section = ({ id, index, title, children }) => (
  <section id={id} className="border-t border-border py-20 md:py-28">
    <div className="wrap">
      <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12">
        <p className="label md:col-span-3 md:pt-4">{index}</p>
        <h2 className="text-5xl leading-[1.02] md:col-span-9 md:text-7xl">{title}</h2>
      </Reveal>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-9 md:col-start-4">{children}</div>
      </div>
    </div>
  </section>
);
