import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const hoverRef = useRef("none");

  useEffect(() => {
    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;

    const interactive = "a, button, input, textarea, [role='button']";
    const textTags = "p, h1, h2, h3, h4, h5, h6, span, li, label";

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      cx += (mx - cx) * 0.2;
      cy += (my - cy) * 0.2;

      const el = document.elementFromPoint(mx, my);
      const onInteractive = el && el.closest(interactive);
      const onText = el && el.closest(textTags);

      if (onInteractive && hoverRef.current !== "interactive") {
        hoverRef.current = "interactive";
        if (dotRef.current) dotRef.current.style.opacity = "0.25";
        if (ringRef.current) ringRef.current.style.opacity = "0.25";
      } else if (onText && !onInteractive && hoverRef.current !== "text") {
        hoverRef.current = "text";
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "0.1";
      } else if (!onInteractive && !onText && hoverRef.current !== "none") {
        hoverRef.current = "none";
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${cx}px`;
        ringRef.current.style.top = `${cy}px`;
      }
      requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", move);
    requestAnimationFrame(tick);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-opacity duration-200 ease-out" />
      <div ref={ringRef} className="pointer-events-none fixed top-0 left-0 z-[9998] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black transition-opacity duration-200 ease-out" />
    </>
  );
};
