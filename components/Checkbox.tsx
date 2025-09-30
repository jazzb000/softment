import { useState } from "react";

interface CheckboxProps {
  checked: boolean;
  onToggle?: () => void;
  className?: string;
  size?: number; // pixel size of the square
  activeBackgroundColor?: string; // when checked
  activeBorderColor?: string; // when checked
  hoverBackgroundColor?: string; // when hovered and not checked
  hoverBorderColor?: string; // when hovered and not checked
  defaultBackgroundColor?: string; // when idle and not checked
  defaultBorderColor?: string; // when idle and not checked
}

export function Checkbox({
  checked,
  onToggle,
  className = "",
  size = 20,
  activeBackgroundColor = "#3182f6",
  activeBorderColor = "#3182f6",
  hoverBackgroundColor = "#2272EB1F",
  hoverBorderColor = "#3182f6",
  defaultBackgroundColor = "#ffffff",
  defaultBorderColor = "#d1d6db",
}: CheckboxProps) {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundColor = checked
    ? activeBackgroundColor
    : isHovered
      ? hoverBackgroundColor
      : defaultBackgroundColor;

  const borderColor = checked
    ? activeBorderColor
    : isHovered
      ? hoverBorderColor
      : defaultBorderColor;

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onToggle?.();
    }
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={() => setIsHovered(true)}
      onPointerUp={() => setIsHovered(false)}
      onPointerCancel={() => setIsHovered(false)}
      onPointerLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchCancel={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
      className={`relative rounded shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        border: `1.5px solid ${borderColor}`,
        WebkitTapHighlightColor: 'transparent',
        outline: 'none',
      }}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path
              d="M1 4.5L4.5 8L11 1.5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}


