import React, { useState, useEffect } from 'react';

interface DotCardProps {
  target?: number;
  duration?: number;
  label?: string;
  icon?: React.ReactNode;
  dotColor?: string;
  glowColor?: string;
}

export default function DotCard({
  target = 777000,
  duration = 2000,
  label = 'Views',
  icon,
  dotColor,
  glowColor,
}: DotCardProps) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    let start = 0;
    const end = target;
    const range = end - start;
    if (range <= 0) return;
    const increment = Math.ceil(end / (duration / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration, mounted]);

  const display =
    count < 1000
      ? count.toString()
      : count < 1000000
        ? `${Math.floor(count / 1000)}k`
        : `${(count / 1000000).toFixed(1)}M`;

  return (
    <div
      className="dot-card-outer"
      style={
        {
          '--dot-color': dotColor || 'hsl(var(--primary))',
          '--glow-color': glowColor || 'hsl(var(--primary) / 0.4)',
        } as React.CSSProperties
      }
    >
      <div className="dot-card-dot" />
      <div className="dot-card">
        <div className="dot-card-ray" />
        {icon && <div className="dot-card-icon">{icon}</div>}
        <div className="dot-card-text" suppressHydrationWarning>{display}</div>
        <div className="dot-card-label">{label}</div>
        <div className="dot-card-line dot-card-line-top" />
        <div className="dot-card-line dot-card-line-left" />
        <div className="dot-card-line dot-card-line-bottom" />
        <div className="dot-card-line dot-card-line-right" />
      </div>
    </div>
  );
}
