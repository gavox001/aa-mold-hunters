export function ProcessStep({ number, title, desc, icon }: { number: string; title: string; desc: string; icon: string }) {
  return (
    <div className="relative flex flex-col items-center text-center p-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center text-2xl font-bold text-neutral-text mb-4 shadow-eco-glow">
        {icon}
      </div>
      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-urgent text-neutral-text text-sm font-bold flex items-center justify-center shadow-amber-glow">
        {number}
      </span>
      <h4 className="font-bold text-neutral-text mb-2">{title}</h4>
      <p className="text-neutral-muted text-sm">{desc}</p>
    </div>
  );
}
