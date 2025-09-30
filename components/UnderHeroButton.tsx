import { useState } from "react";

interface UnderHeroButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "white";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function UnderHeroButton({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
  onMouseEnter,
  onMouseLeave,
}: UnderHeroButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundColor = () => {
    if (variant === "primary") {
      if (disabled) return "#3182F6B2";
      if (isHovered) return "#2272EB";
      return "#3182f6";
    }
    // white variant
    if (isHovered) return "#e5e8eb";
    return "#ffffff";
  };

  const getTextColor = () => {
    if (variant === "primary") {
      return "#ffffff";
    }
    // white variant
    return isHovered ? "#b0b8c1" : "#8b95a1";
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => { if (!disabled) setIsHovered(true); onMouseEnter?.(); }}
      onMouseLeave={() => { setIsHovered(false); onMouseLeave?.(); }}
      className={`relative rounded-[12px] shrink-0 transition-all duration-200 ease-in-out ${
        disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"
      } ${className}`}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="flex items-center justify-center relative size-full px-[14px] py-[11px]">
        <div
          className="font-semibold not-italic relative shrink-0 text-[17px] text-nowrap"
          style={{ color: getTextColor() }}
        >
          {children}
        </div>
      </div>
    </button>
  );
}


