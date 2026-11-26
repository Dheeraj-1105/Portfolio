// Pure CSS background — no images, no GSAP, no heavy parallax.
// Just a beautiful gradient + twinkling stars rendered as DOM nodes.
export default function Background() {
  // Generate a fixed set of stars with varied sizes, positions, durations
  const stars = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    size: i % 5 === 0 ? 2.5 : i % 3 === 0 ? 1.8 : 1.2,
    top: ((i * 37 + 11) % 97).toFixed(1),
    left: ((i * 53 + 7) % 99).toFixed(1),
    dur: (2.5 + (i % 7) * 0.6).toFixed(1),
    delay: ((i * 0.31) % 4).toFixed(2),
  }));

  return (
    <>
      {/* Gradient radial background */}
      <div className="site-bg" aria-hidden="true" />

      {/* Twinkling star dots */}
      <div className="stars-layer" aria-hidden="true">
        {stars.map((s) => (
          <div
            key={s.id}
            className="star"
            style={{
              width: s.size,
              height: s.size,
              top: `${s.top}%`,
              left: `${s.left}%`,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
