import { useState, type ReactNode } from 'react';

interface LoginButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  useExternalHover?: boolean;
  hovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function LoginButton({ 
  onClick = () => {}, 
  disabled = false, 
  children = "로그인",
  className = "",
  backgroundColor,
  hoverBackgroundColor,
  textColor,
  hoverTextColor,
  useExternalHover = false,
  hovered,
  onMouseEnter,
  onMouseLeave,
}: LoginButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled && !useExternalHover) {
      setIsHovered(true);
    }
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    if (!useExternalHover) {
      setIsHovered(false);
    }
    onMouseLeave?.();
  };

  const isEffectivelyHovered = useExternalHover ? !!hovered : isHovered;
  const resolvedBackground = disabled
    ? '#3182F6B2'
    : isEffectivelyHovered
      ? (hoverBackgroundColor ?? '#2263BA')
      : (backgroundColor ?? '#3182f6');
  const resolvedTextColor = disabled
    ? '#ffffff'
    : isEffectivelyHovered
      ? (hoverTextColor ?? '#ffffff')
      : (textColor ?? '#ffffff');

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        box-border 
        content-stretch 
        flex 
        flex-row 
        items-center 
        justify-center 
        px-[12px] 
        py-[9px] 
        relative 
        rounded-[10px] 
        shrink-0
        transition-colors transform 
        duration-[200ms] 
        ease-in-out active:scale-[0.96]
        ${className}
      `}
      style={{ backgroundColor: resolvedBackground }}
    >
      <div className="font-semibold not-italic relative shrink-0 text-[18px] text-left text-nowrap" style={{ color: resolvedTextColor }}>
        {children}
      </div>
    </button>
  );
}