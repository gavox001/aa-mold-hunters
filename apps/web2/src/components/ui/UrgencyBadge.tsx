export function UrgencyBadge({ slots = 3 }: { slots?: number }) {
  return (
    <div className="flex justify-center mb-6 animate-fade-in">
      <span className="badge-urgency">
        <span className="animate-pulse text-lg">🔥</span>
        Only {slots} FREE inspections left this week
      </span>
    </div>
  );
}
