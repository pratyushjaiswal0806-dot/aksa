const ACTS = ['ACT I', 'ACT II', 'ACT III', 'FINALE'];

export default function ActRail() {
  return (
    <div
      aria-hidden
      data-rail
      className="m-hide"
      style={{
        position: 'fixed', right: 'clamp(8px,1.4vw,20px)', top: '50%', transform: 'translateY(-50%)', zIndex: 70,
        display: 'flex', flexDirection: 'column', gap: 14, mixBlendMode: 'difference', color: '#fff',
        fontSize: 10, fontWeight: 800, letterSpacing: '.2em', writingMode: 'vertical-rl', textAlign: 'right',
        pointerEvents: 'none',
      }}
    >
      {ACTS.map((a, i) => (
        <span key={a} style={{ opacity: `calc(.3 + var(--act${i + 1},0)*.7)` as unknown as number }}>{a}</span>
      ))}
    </div>
  );
}
