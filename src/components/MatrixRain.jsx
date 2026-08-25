import { useEffect, useRef } from "react";

const CHARS = "0123456789";
const FONT_SIZE = 15;

export const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let drops = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.ceil(canvas.width / FONT_SIZE);
      drops = new Array(columns)
        .fill(0)
        .map(() => Math.random() * (canvas.height / FONT_SIZE));
    };

    setup();
    window.addEventListener("resize", setup);

    let frameId;

    const draw = () => {
      ctx.fillStyle = "rgba(10, 12, 15, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        const alpha = 0.3 + Math.random() * 0.45;
        ctx.fillStyle = `rgba(65, 200, 137, ${alpha})`;
        ctx.fillText(char, x, y);

        drops[i] -= 1;

        if (y < -FONT_SIZE && Math.random() > 0.975) {
          drops[i] = canvas.height / FONT_SIZE + Math.random() * 20;
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
      } else {
        frameId = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", setup);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};
