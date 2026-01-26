export function LowPolyBackground() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-black">
      <svg
        className="h-full w-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a192f">
                <animate attributeName="stop-color" values="#0a192f; #1e3a5f; #0a192f" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#1e3a5f">
                 <animate attributeName="stop-color" values="#1e3a5f; #0a192f; #1e3a5f" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64ffda">
                 <animate attributeName="stop-color" values="#64ffda; #0a192f; #64ffda" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#1e3a5f">
                 <animate attributeName="stop-color" values="#1e3a5f; #64ffda; #1e3a5f" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0a192f">
                 <animate attributeName="stop-color" values="#0a192f; #3a5a8a; #0a192f" dur="12s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#3a5a8a">
                 <animate attributeName="stop-color" values="#3a5a8a; #0a192f; #3a5a8a" dur="12s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <polygon points="0,0 100,0 50,50" fill="url(#grad1)" />
        <polygon points="0,100 100,100 50,50" fill="url(#grad1)" />
        <polygon points="0,0 0,100 50,50" fill="url(#grad2)" />
        <polygon points="100,0 100,100 50,50" fill="url(#grad3)" />

        <polygon points="0,25 25,0 50,25 25,50" fill="url(#grad2)" opacity="0.5" />
        <polygon points="50,25 75,0 100,25 75,50" fill="url(#grad3)" opacity="0.5" />
        <polygon points="0,75 25,50 50,75 25,100" fill="url(#grad3)" opacity="0.5" />
        <polygon points="50,75 75,50 100,75 75,100" fill="url(#grad2)" opacity="0.5" />
      </svg>
    </div>
  );
}
