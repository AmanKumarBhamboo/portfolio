import { useEffect, useRef } from "react";

const CHARS = "0123456789";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.body.classList.add("custom-cursor-active");

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let mx = -100;
    let my = -100;
    let cx = -100;
    let cy = -100;
    let dragging = false;
    let hovering = false;
    let particles = [];
    let lastSpawn = 0;

    const interactive = "a, button, input, textarea, [role='button']";

    const spawnParticle = (x, y) => {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6 - 0.5,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        life: 0,
        maxLife: 36 + Math.random() * 18,
      });
    };

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (reduceMotion && ringRef.current) {
        ringRef.current.style.left = `${mx}px`;
        ringRef.current.style.top = `${my}px`;
      }

      const el = document.elementFromPoint(mx, my);
      const onInteractive = !!(el && el.closest(interactive));
      if (onInteractive !== hovering) {
        hovering = onInteractive;
        if (ringRef.current) {
          ringRef.current.style.width = hovering ? "44px" : "26px";
          ringRef.current.style.height = hovering ? "44px" : "26px";
          ringRef.current.style.borderColor = hovering
            ? "hsl(var(--primary) / 0.9)"
            : "hsl(var(--primary) / 0.5)";
        }
        if (dotRef.current) {
          dotRef.current.style.opacity = hovering ? "0.3" : "1";
        }
      }

      if (!reduceMotion && dragging) {
        const now = performance.now();
        if (now - lastSpawn > 28) {
          spawnParticle(mx, my);
          lastSpawn = now;
        }
      }
    };

    const down = () => {
      dragging = true;
    };
    const up = () => {
      dragging = false;
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", up);

    let frameId;
    const tick = () => {
      if (!reduceMotion) {
        cx += (mx - cx) * 0.18;
        cy += (my - cy) * 0.18;
        if (ringRef.current) {
          ringRef.current.style.left = `${cx}px`;
          ringRef.current.style.top = `${cy}px`;
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!reduceMotion && particles.length) {
        ctx.font = "13px 'JetBrains Mono', monospace";
        particles = particles.filter((p) => p.life < p.maxLife);
        for (const p of particles) {
          p.life += 1;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.015;
          const alpha = 1 - p.life / p.maxLife;
          ctx.fillStyle = `rgba(65, 200, 137, ${alpha})`;
          ctx.fillText(p.char, p.x, p.y);
        }
      }

      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", up);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 z-[9998] pointer-events-none"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-200 ease-out"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 transition-[width,height,border-color] duration-200 ease-out"
      />
    </>
  );
};
