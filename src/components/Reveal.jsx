import { forwardRef, useEffect, useRef, useState } from "react";

export const Reveal = forwardRef(
  ({ children, className = "", delay = 0, as: Tag = "div", ...rest }, forwardedRef) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    const setRefs = (node) => {
      ref.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    return (
      <Tag
        ref={setRefs}
        className={`transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

Reveal.displayName = "Reveal";
