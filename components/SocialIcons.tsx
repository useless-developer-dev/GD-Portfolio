"use client";

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function BehanceIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6.9 11.3h2.3c1.3 0 2.2-.6 2.2-1.8 0-1.1-.8-1.7-2-1.7H6.9v3.5zm0 2.1v4h2.5c1.4 0 2.4-.7 2.4-2 0-1.4-1-2-2.5-2H6.9zM3 5h6.5c3.2 0 5.2 1.6 5.2 4.1 0 1.5-.8 2.7-2 3.3 1.6.6 2.6 2 2.6 3.8 0 2.8-2.2 4.8-5.7 4.8H3V5zm15.4 3.2h4.4V6.9h-4.4v1.3zm4.5 6.6c-.1-2.4-1.9-4.2-4.4-4.2-2.7 0-4.6 2-4.6 4.7 0 2.8 1.9 4.8 4.7 4.8 2.2 0 3.8-1.2 4.3-3.1h-2.1c-.4.8-1.2 1.2-2.2 1.2-1.3 0-2.3-.9-2.4-2.2h6.7v-1.2zm-4.4-2.4c1.1 0 2 .7 2.2 1.8h-4.4c.2-1.1 1.1-1.8 2.2-1.8z" />
    </svg>
  );
}
