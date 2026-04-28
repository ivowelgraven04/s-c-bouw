type Props = { rating?: number; size?: number };

export function Stars({ rating = 5, size = 18 }: Props) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} van 5 sterren`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < rating ? "#F4BD14" : "transparent"}
          stroke="#F4BD14"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
