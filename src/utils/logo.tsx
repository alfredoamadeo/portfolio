export const Logo = ({ width = 140, height = 100 }: { width?: number; height?: number }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ display: "block" }}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="33%" stopColor="#8B5CF6" />
          <stop offset="66%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0.1" />
        </linearGradient>

        {/* Filters */}
        <filter id="morphGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feColorMatrix in="coloredBlur" values="1 0 1 0 0  0 1 1 0 0  1 0 1 0 0  0 0 0 1 0" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Path for particle animation */}
        <path id="dataFlow" d="M50,85 Q110,55 170,85 Q230,115 290,85" />
      </defs>

      {/* Background */}
      <rect width="280" height="200" fill="url(#bgGrad)" rx="10" />

      {/* Animated Helix */}
      <g transform="translate(50, 50)" opacity="0.8">
        <path
          d="M0,50 Q30,20 60,50 Q90,80 120,50 Q150,20 180,50"
          fill="none"
          stroke="url(#primaryGrad)"
          strokeWidth="4"
          filter="url(#morphGlow)"
        >
          <animate
            attributeName="d"
            values="M0,50 Q30,20 60,50 Q90,80 120,50 Q150,20 180,50;
                    M0,50 Q30,80 60,50 Q90,20 120,50 Q150,80 180,50;
                    M0,50 Q30,20 60,50 Q90,80 120,50 Q150,20 180,50"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M0,50 Q30,80 60,50 Q90,20 120,50 Q150,80 180,50"
          fill="none"
          stroke="url(#accentGrad)"
          strokeWidth="4"
          filter="url(#morphGlow)"
        >
          <animate
            attributeName="d"
            values="M0,50 Q30,80 60,50 Q90,20 120,50 Q150,80 180,50;
                    M0,50 Q30,20 60,50 Q90,80 120,50 Q150,20 180,50;
                    M0,50 Q30,80 60,50 Q90,20 120,50 Q150,80 180,50"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Main Text */}
      <g transform="translate(140, 120)">
        {/* Shadow */}
        <text
          x="2"
          y="2"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Fira Code', monospace"
          fontSize="32"
          fontWeight="800"
          fill="#000"
          opacity="0.1"
        >
          AMA
        </text>

        {/* Glow Text */}
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Fira Code', monospace"
          fontSize="32"
          fontWeight="800"
          fill="url(#primaryGrad)"
          filter="url(#textGlow)"
        >
          AMA
          <animate
            attributeName="fill-opacity"
            values="1;0.7;1"
            dur="4s"
            repeatCount="indefinite"
          />
        </text>

        {/* Subtitle */}
        <text
          x="0"
          y="25"
          textAnchor="middle"
          fontFamily="'SF Pro Display', 'Segoe UI', sans-serif"
          fontSize="14"
          fontWeight="600"
          letterSpacing="3px"
          fill="url(#accentGrad)"
          opacity="0.8"
        >
          DEVELOPER
        </text>
      </g>
    </svg>
  );
};
