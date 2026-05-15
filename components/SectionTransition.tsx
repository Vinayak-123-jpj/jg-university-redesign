export default function SectionTransition() {
  return (
    <div className="relative h-32 overflow-hidden">
      {/* TOP FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-transparent" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-40 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[120px]" />
    </div>
  );
}
