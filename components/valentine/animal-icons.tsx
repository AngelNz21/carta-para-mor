"use client"

export function PenguinIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="32" cy="38" rx="18" ry="22" fill="#0d3b4d" />
      {/* Belly */}
      <ellipse cx="32" cy="42" rx="12" ry="16" fill="#e0f7fa" />
      {/* Head */}
      <circle cx="32" cy="18" r="14" fill="#0d3b4d" />
      {/* Eyes */}
      <circle cx="26" cy="16" r="3" fill="#ffffff" />
      <circle cx="38" cy="16" r="3" fill="#ffffff" />
      <circle cx="27" cy="15.5" r="1.5" fill="#0a2530" />
      <circle cx="37" cy="15.5" r="1.5" fill="#0a2530" />
      {/* Beak */}
      <path d="M29 22 L32 27 L35 22 Z" fill="#ff9800" />
      {/* Cheeks */}
      <circle cx="23" cy="20" r="2.5" fill="#4dd0e1" opacity="0.5" />
      <circle cx="41" cy="20" r="2.5" fill="#4dd0e1" opacity="0.5" />
      {/* Feet */}
      <ellipse cx="25" cy="58" rx="5" ry="3" fill="#ff9800" />
      <ellipse cx="39" cy="58" rx="5" ry="3" fill="#ff9800" />
      {/* Wings */}
      <path d="M14 32 Q8 42 14 52" stroke="#0d3b4d" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M50 32 Q56 42 50 52" stroke="#0d3b4d" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Heart on belly */}
      <path d="M29 38 C29 36 32 33 32 36 C32 33 35 36 35 38 C35 41 32 43 32 43 C32 43 29 41 29 38Z" fill="#00e5ff" opacity="0.6" />
    </svg>
  )
}

export function WolfIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Outer ear – left */}
      <path d="M11 4 L8 26 L22 18 Z" fill="#14505e" />
      {/* Outer ear – right */}
      <path d="M53 4 L56 26 L42 18 Z" fill="#14505e" />
      {/* Inner ear – left */}
      <path d="M13.5 9 L12 23 L21 17 Z" fill="#1a6b7a" />
      {/* Inner ear – right */}
      <path d="M50.5 9 L52 23 L43 17 Z" fill="#1a6b7a" />
      {/* Ear tufts */}
      <path d="M13 22 Q16 19 19 22" stroke="#b2ebf2" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M45 22 Q48 19 51 22" stroke="#b2ebf2" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Head – main shape */}
      <ellipse cx="32" cy="33" rx="19" ry="21" fill="#1a5c6b" />

      {/* Fur ruff – left cheek */}
      <path d="M13 34 Q9 38 11 44 Q14 48 18 46 Q15 42 14 38 Z" fill="#18525f" />
      {/* Fur ruff – right cheek */}
      <path d="M51 34 Q55 38 53 44 Q50 48 46 46 Q49 42 50 38 Z" fill="#18525f" />
      {/* Fur ruff – bottom */}
      <path d="M20 50 Q24 57 28 53 Q30 56 32 54 Q34 56 36 53 Q40 57 44 50 Q40 54 36 52 Q34 55 32 53 Q30 55 28 52 Q24 54 20 50 Z" fill="#b2ebf2" />

      {/* Face lighter patch */}
      <ellipse cx="32" cy="36" rx="13" ry="15" fill="#26808f" />

      {/* Forehead chevron marking */}
      <path d="M24 22 L32 16 L40 22" stroke="#0e4450" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Muzzle */}
      <ellipse cx="32" cy="42" rx="9" ry="8" fill="#b2ebf2" />
      {/* Muzzle highlight */}
      <ellipse cx="32" cy="40" rx="6" ry="4" fill="#d4f5f7" opacity="0.5" />

      {/* Nose */}
      <path d="M29 37.5 Q32 34 35 37.5 Q32 40 29 37.5 Z" fill="#0a2530" />
      {/* Nose shine */}
      <ellipse cx="30.8" cy="36.8" rx="1.2" ry="0.8" fill="#1a5c6b" opacity="0.6" />
      {/* Nose-to-mouth line */}
      <line x1="32" y1="39.5" x2="32" y2="42" stroke="#0a2530" strokeWidth="1.2" strokeLinecap="round" />

      {/* Mouth – gentle smile */}
      <path d="M27.5 43 Q29.5 46 32 44 Q34.5 46 36.5 43" stroke="#0a2530" strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* Left eye white */}
      <ellipse cx="23.5" cy="28" rx="4.5" ry="5" fill="#e0f7fa" />
      {/* Right eye white */}
      <ellipse cx="40.5" cy="28" rx="4.5" ry="5" fill="#e0f7fa" />
      {/* Left iris */}
      <circle cx="24.5" cy="28" r="2.8" fill="#00bcd4" />
      {/* Right iris */}
      <circle cx="39.5" cy="28" r="2.8" fill="#00bcd4" />
      {/* Left pupil */}
      <circle cx="25" cy="27.5" r="1.4" fill="#0a2530" />
      {/* Right pupil */}
      <circle cx="39" cy="27.5" r="1.4" fill="#0a2530" />
      {/* Left eye sparkle */}
      <circle cx="26" cy="26.8" r="1" fill="#ffffff" />
      <circle cx="23.5" cy="29" r="0.5" fill="#ffffff" opacity="0.7" />
      {/* Right eye sparkle */}
      <circle cx="40" cy="26.8" r="1" fill="#ffffff" />
      <circle cx="37.5" cy="29" r="0.5" fill="#ffffff" opacity="0.7" />

      {/* Eyebrow hints */}
      <path d="M19 23 Q23.5 20 27 23" stroke="#14505e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M37 23 Q40.5 20 45 23" stroke="#14505e" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Cheek blush */}
      <circle cx="17" cy="36" r="3.5" fill="#4dd0e1" opacity="0.35" />
      <circle cx="47" cy="36" r="3.5" fill="#4dd0e1" opacity="0.35" />

      {/* Whisker dots */}
      <circle cx="23" cy="41" r="0.7" fill="#90a4ae" opacity="0.5" />
      <circle cx="21" cy="43" r="0.7" fill="#90a4ae" opacity="0.5" />
      <circle cx="41" cy="41" r="0.7" fill="#90a4ae" opacity="0.5" />
      <circle cx="43" cy="43" r="0.7" fill="#90a4ae" opacity="0.5" />
    </svg>
  )
}

export function RaccoonIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Ears */}
      <circle cx="16" cy="12" r="8" fill="#37474f" />
      <circle cx="48" cy="12" r="8" fill="#37474f" />
      <circle cx="16" cy="12" r="5" fill="#b2ebf2" />
      <circle cx="48" cy="12" r="5" fill="#b2ebf2" />
      {/* Head */}
      <ellipse cx="32" cy="32" rx="20" ry="22" fill="#546e7a" />
      {/* Face */}
      <ellipse cx="32" cy="34" rx="16" ry="17" fill="#b0bec5" />
      {/* Eye masks */}
      <ellipse cx="22" cy="28" rx="8" ry="6" fill="#263238" />
      <ellipse cx="42" cy="28" rx="8" ry="6" fill="#263238" />
      {/* Eyes */}
      <circle cx="22" cy="28" r="3.5" fill="#e0f7fa" />
      <circle cx="42" cy="28" r="3.5" fill="#e0f7fa" />
      <circle cx="23" cy="27.5" r="2" fill="#0a2530" />
      <circle cx="41" cy="27.5" r="2" fill="#0a2530" />
      <circle cx="23.8" cy="27" r="0.8" fill="#ffffff" />
      <circle cx="41.8" cy="27" r="0.8" fill="#ffffff" />
      {/* Nose */}
      <ellipse cx="32" cy="36" rx="3.5" ry="2.5" fill="#263238" />
      {/* Nose shine */}
      <ellipse cx="31" cy="35.5" rx="1" ry="0.7" fill="#546e7a" opacity="0.5" />
      {/* Mouth */}
      <path d="M32 38.5 L32 41" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 42 Q32 45 36 42" stroke="#263238" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Forehead stripe */}
      <path d="M32 12 L32 24" stroke="#37474f" strokeWidth="3" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="18" cy="38" r="3" fill="#4dd0e1" opacity="0.3" />
      <circle cx="46" cy="38" r="3" fill="#4dd0e1" opacity="0.3" />
    </svg>
  )
}

export function RatIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Ears */}
      <circle cx="18" cy="14" r="10" fill="#546e7a" />
      <circle cx="46" cy="14" r="10" fill="#546e7a" />
      <circle cx="18" cy="14" r="7" fill="#80deea" />
      <circle cx="46" cy="14" r="7" fill="#80deea" />
      {/* Head */}
      <ellipse cx="32" cy="34" rx="16" ry="18" fill="#78909c" />
      {/* Face */}
      <ellipse cx="32" cy="36" rx="12" ry="14" fill="#b0bec5" />
      {/* Eyes */}
      <circle cx="25" cy="30" r="4" fill="#0a2530" />
      <circle cx="39" cy="30" r="4" fill="#0a2530" />
      <circle cx="26.5" cy="29" r="1.5" fill="#ffffff" />
      <circle cx="40.5" cy="29" r="1.5" fill="#ffffff" />
      {/* Nose */}
      <ellipse cx="32" cy="40" rx="3" ry="2.5" fill="#f48fb1" />
      {/* Whiskers */}
      <line x1="10" y1="38" x2="24" y2="40" stroke="#90a4ae" strokeWidth="1" />
      <line x1="10" y1="42" x2="24" y2="42" stroke="#90a4ae" strokeWidth="1" />
      <line x1="10" y1="46" x2="24" y2="44" stroke="#90a4ae" strokeWidth="1" />
      <line x1="54" y1="38" x2="40" y2="40" stroke="#90a4ae" strokeWidth="1" />
      <line x1="54" y1="42" x2="40" y2="42" stroke="#90a4ae" strokeWidth="1" />
      <line x1="54" y1="46" x2="40" y2="44" stroke="#90a4ae" strokeWidth="1" />
      {/* Mouth */}
      <path d="M29 44 Q32 47 35 44" stroke="#546e7a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="21" cy="38" r="3" fill="#4dd0e1" opacity="0.3" />
      <circle cx="43" cy="38" r="3" fill="#4dd0e1" opacity="0.3" />
      {/* Teeth */}
      <rect x="30" y="44" width="2" height="3" rx="0.5" fill="#ffffff" />
      <rect x="33" y="44" width="2" height="3" rx="0.5" fill="#ffffff" />
    </svg>
  )
}

export function HeartIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function SpiralIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M24 24 C24 20 28 16 32 16 C38 16 40 22 40 24 C40 32 32 38 24 38 C14 38 8 30 8 24 C8 14 16 6 24 6 C36 6 44 16 44 24" />
    </svg>
  )
}
