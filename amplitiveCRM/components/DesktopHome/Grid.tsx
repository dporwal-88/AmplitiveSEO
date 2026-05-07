export default function Grid() {
  return (
    <>
      {/* MOBILE GRID: Visible by default, hidden on 'sm' screens and up */}
      <div
        className="absolute inset-0 pointer-events-none z-0 block sm:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100px 100px", /* Scaled down for mobile */
          backgroundPosition: "center -15px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />

      {/* DESKTOP GRID: Hidden by default, visible on 'sm' screens and up */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px", /* Original desktop size */
          backgroundPosition: "center -30px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />
    </>
  );
}