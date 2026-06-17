import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      const size = Math.random() * 4.5 + 2;
      el.className = "star animate-star-fall";
      el.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation-duration:${Math.random() * 8 + 6}s;
        animation-delay:${Math.random() * 10}s;
        opacity:${Math.random() * 0.3 + 0.1};
      `;
      frag.appendChild(el);
    }

    container.appendChild(frag);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
};
