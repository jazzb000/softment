import { useState } from 'react';
import type { ChangeEvent } from 'react';

interface InputProps {
  type?: 'email' | 'password' | 'text';
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  className?: string;
}

export function Input({ 
  type = 'text',
  value = "", 
  onChange = () => {}, 
  onBlur = () => {},
  error = "",
  className = ""
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasBeenTouched, setHasBeenTouched] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasBeenTouched(true);
    onBlur();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const getBorderClass = () => {
    if (error && hasBeenTouched) {
      return "border-[#F04452] border-[2px]";
    }
    if (isFocused) {
      return "border-[#3182F6] border-[2px]";
    }
    if (isHovered) {
      return "border-[#3182F6B2] border-[2px]";
    }
    return "border-[#e5e8eb] border-[2px]";
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            bg-[#ffffff] 
            h-[48px] 
            w-full 
            rounded-[12px] 
            px-[14px] 
            py-[0px] 
            font-normal 
            text-[16px] 
            text-[#333333] 
            outline-none 
            transition-all 
            duration-[200ms] 
            ease-in-out
            ${getBorderClass()}
          `}
        />
      </div>
      {error && hasBeenTouched && (
        <div className="mt-[8px]">
          <p className="font-normal text-[14px] text-[#F04452] leading-[150%] text-left">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}