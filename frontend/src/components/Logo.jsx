export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" data-testid="dcx-logo" aria-label="DCX Solutions logo">
      <defs>
        <linearGradient id="dcx-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00F0FF" />
          <stop offset="1" stopColor="#39FF14" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill="#0F0F11" stroke="rgba(255,255,255,0.15)" />
      <path d="M18 16 L32 32 L18 48" fill="none" stroke="url(#dcx-g)" strokeWidth="6" strokeLinecap="square" />
      <path d="M46 16 L32 32 L46 48" fill="none" stroke="url(#dcx-g)" strokeWidth="6" strokeLinecap="square" opacity="0.55" />
      <circle cx="32" cy="32" r="3.5" fill="#00F0FF" />
    </svg>
  );
}
