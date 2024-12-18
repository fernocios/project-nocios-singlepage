import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  leftIcon?: string;
  rightIcon?: string;
  leftBackground?: string;
  rightBackground?: string;
}

export default function Toggle({
  checked,
  onChange,
  leftIcon,
  rightIcon,
  leftBackground,
  rightBackground,
}: ToggleProps) {
  return (
    <div className="relative inline-block w-14 h-7 rounded-full shadow-inner">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`absolute inset-0 rounded-full transition-colors duration-300 cursor-pointer
          ${checked ? rightBackground : leftBackground}`}
        onClick={onChange}
      >
        <div
          className={`absolute w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 flex items-center justify-center
            ${checked ? 'translate-x-8' : 'translate-x-1'} top-1`}
        >
          {checked ? rightIcon && (
            <img src={rightIcon} alt="" className="w-4 h-4 rounded-full object-cover" />
          ) : leftIcon && (
            <img src={leftIcon} alt="" className="w-4 h-4 rounded-full object-cover" />
          )}
        </div>
      </div>
    </div>
  );
}