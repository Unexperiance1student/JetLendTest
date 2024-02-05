import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './button.css';
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}>
      {children}
    </button>
  );
};
