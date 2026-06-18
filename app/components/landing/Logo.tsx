type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * SPD Biotech emblem — green circle with a DNA double-helix and the
 * "SPD biotech" wordmark. Recreated as SVG so it stays crisp at any size.
 */
export default function Logo({ size = 40, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="SPD Biotech"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="#1a8a4e" strokeLinecap="round">
        <circle cx="100" cy="100" r="92" strokeWidth="4" />
        <g transform="rotate(-45 100 100)">
          {/* two intertwining strands */}
          <path
            strokeWidth="4"
            d="M100,32 C128,42 128,55 100,65 C72,75 72,88 100,98 C128,108 128,121 100,131 C72,141 72,154 100,164"
          />
          <path
            strokeWidth="4"
            d="M100,32 C72,42 72,55 100,65 C128,75 128,88 100,98 C72,108 72,121 100,131 C128,141 128,154 100,164"
          />
          {/* base-pair rungs */}
          <g strokeWidth="2.4">
            <line x1="87" y1="42" x2="113" y2="42" />
            <line x1="82" y1="48" x2="118" y2="48" />
            <line x1="86" y1="55" x2="114" y2="55" />

            <line x1="86" y1="74" x2="114" y2="74" />
            <line x1="82" y1="81" x2="118" y2="81" />
            <line x1="86" y1="89" x2="114" y2="89" />

            <line x1="87" y1="107" x2="113" y2="107" />
            <line x1="82" y1="114" x2="118" y2="114" />
            <line x1="86" y1="121" x2="114" y2="121" />

            <line x1="87" y1="140" x2="113" y2="140" />
            <line x1="82" y1="147" x2="118" y2="147" />
            <line x1="86" y1="154" x2="114" y2="154" />
          </g>
        </g>
      </g>
      <g
        fill="#1a8a4e"
        stroke="#ffffff"
        strokeWidth="2.5"
        paintOrder="stroke"
        fontFamily="Georgia, 'Times New Roman', serif"
        textAnchor="middle"
      >
        <text x="84" y="103" fontSize="46" fontWeight="700">
          SPD
        </text>
        <text x="143" y="150" fontSize="25" fontWeight="400">
          biotech
        </text>
      </g>
    </svg>
  );
}
