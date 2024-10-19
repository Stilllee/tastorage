import React from "react";

export default function LS({ className = "", size = 200, color = "#00c471" }) {
  const letters = "TASTORAGE";

  return (
    <div
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="h-full w-full"
      >
        <style>
          {`
            @keyframes fillLetter {
              0%, 100% { fill: transparent; }
              50% { fill: ${color}; }
            }
            .letter {
              animation: fillLetter 2s linear infinite;
            }
          `}
        </style>
        <text
          fontFamily="Arial"
          fontSize="16"
          fontWeight="bold"
          fill="none"
          dy="0.38em"
          textAnchor="middle"
          y="50"
          x="50"
        >
          {letters.split("").map((letter, index) => (
            <tspan
              key={index}
              className="letter"
              style={{ animationDelay: `${(index / letters.length) * 2}s` }}
            >
              {letter}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
  );
}
