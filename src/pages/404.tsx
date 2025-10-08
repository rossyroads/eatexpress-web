function NotFoundPage() {
  return (
    <>
      <div className="w-full">
        <svg viewBox="0 0 900 380" role="img" aria-labelledby="titleDesc">
          <g transform="translate(80,80) scale(1)">
            <path
              d="M40 0 L120 160 L-40 160 Z"
              fill="#FCE6B2"
              stroke="#E8B86A"
              stroke-width="6"
              stroke-linejoin="round"
            />
            <circle cx="40" cy="70" r="12" fill="#D94B2B" />
            <circle cx="20" cy="110" r="10" fill="#D94B2B" />
            <circle cx="70" cy="110" r="9" fill="#D94B2B" />
            <ellipse
              cx="40"
              cy="40"
              rx="50"
              ry="30"
              fill="rgba(255,255,255,0.08)"
            />
            <path d="M-10 160 Q40 120 90 160" fill="#E69A4A" />
          </g>

          <g transform="translate(260,40)">
            <text
              x="0"
              y="120"
              font-family="Inter, Arial, sans-serif"
              font-size="140"
              font-weight="700"
              fill="#2B2B2B"
            >
              404
            </text>
            <text
              x="0"
              y="200"
              font-family="Inter, Arial, sans-serif"
              font-size="32"
              fill="#555"
            >
              Not Found
            </text>
          </g>

          <g transform="translate(580,70) scale(1)">
            <path
              d="M20 0 C80 -10 140 -10 200 0 C180 40 40 40 20 0 Z"
              fill="#F4B66A"
              stroke="#D99A4B"
              stroke-width="4"
            />

            <ellipse cx="60" cy="6" rx="6" ry="3" fill="#FFF3D9" />
            <ellipse cx="120" cy="2" rx="6" ry="3" fill="#FFF3D9" />
            <ellipse cx="150" cy="10" rx="6" ry="3" fill="#FFF3D9" />

            <path
              d="M15 40 C40 30 80 50 120 35 C160 20 190 45 200 50 L5 60 Z"
              fill="#9EDB73"
            />

            <rect x="10" y="58" width="190" height="28" rx="8" fill="#6B3A2F" />

            <path
              d="M20 52 L80 68 L140 50 L200 68 L200 78 L10 78 Z"
              fill="#F2C94C"
              opacity="0.95"
            />

            <path
              d="M0 82 C30 110 170 110 200 82 L200 102 C140 120 60 120 0 102 Z"
              fill="#F0A95F"
              stroke="#D99A4B"
              stroke-width="3"
            />
          </g>

          <g transform="translate(740,20) scale(0.9)">
            <rect
              x="0"
              y="40"
              width="80"
              height="70"
              rx="12"
              fill="#FFF"
              stroke="#C8B6A6"
              stroke-width="3"
            />
            <path
              d="M80 52 A18 18 0 0 1 80 88"
              fill="none"
              stroke="#C8B6A6"
              stroke-width="6"
            />
            <rect x="12" y="46" width="56" height="18" rx="6" fill="#6B4026" />
            <g fill="#6B4026" opacity="0.9">
              <path d="M24 52 C36 48 44 48 56 52 C44 56 36 56 24 52 Z" />
            </g>
            <ellipse cx="40" cy="110" rx="34" ry="6" fill="rgba(0,0,0,0.06)" />
          </g>

          <g transform="translate(260,250)">
            <text
              x="0"
              y="20"
              font-family="Inter, Arial, sans-serif"
              font-size="16"
              fill="#666"
            >
              We couldn't find that page — maybe grab a snack and try again?
            </text>
          </g>

          <g opacity="0.9" transform="translate(0,0)">
            <circle cx="520" cy="40" r="6" fill="#F4B66A" />
            <rect
              x="500"
              y="320"
              width="10"
              height="6"
              rx="2"
              fill="#9EDB73"
              transform="rotate(30 505 323)"
            />
            <circle cx="120" cy="300" r="5" fill="#D94B2B" />
            <rect x="760" y="320" width="8" height="8" rx="2" fill="#6B4026" />
          </g>
        </svg>
      </div>
    </>
  );
}

export default NotFoundPage;
