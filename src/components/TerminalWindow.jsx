export const TerminalWindow = ({ title = "bash", children, className = "", bodyClassName = "" }) => (
  <div className={`rounded-lg border border-border/60 bg-card overflow-hidden shadow-lg text-left ${className}`}>
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-secondary/60">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
      <span className="ml-3 text-xs text-muted-foreground font-mono">{title}</span>
    </div>
    <div className={`p-5 font-mono text-sm ${bodyClassName}`}>{children}</div>
  </div>
);
