import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input variant
   */
  variant?: 'primary' | 'outline';
  /**
   * Input size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is input full width
   */
  fullWidth?: boolean;
  /**
   * Is input disabled
   */
  disabled?: boolean;
  /**
   * Input type
   */
  type?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Left icon
   */
  leftIcon?: ReactNode;
  /**
   * Right icon
   */
  rightIcon?: ReactNode;
  /**
   * Additional CSS class names
   */
  className?: string;
}

/**
 * Input component for user text input
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  ...props
}, ref) => {
  // Base styles
  const baseStyles = 'font-sans rounded focus:outline-none transition-colors';

  // Variant styles
  const variantStyles = {
    primary: 'bg-white border border-gray-300 focus:border-blue-500 text-gray-900',
    outline: 'bg-transparent border border-gray-300 focus:border-blue-500 text-gray-900',
  };

  // Size styles
  const sizeStyles = {
    small: 'text-sm py-1 px-3 h-8',
    medium: 'text-base py-2 px-4 h-10',
    large: 'text-lg py-3 px-6 h-12',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Error styles
  const errorStyles = error ? 'border-red-500 focus:border-red-500' : '';

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'cursor-text';

  // Combine all styles
  const inputStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${errorStyles} ${disabledStyles} ${className || ''}`;

  // Container styles for icons
  const containerStyles = 'relative';

  // Icon styles
  const leftIconStyles = leftIcon ? 'pl-10' : '';
  const rightIconStyles = rightIcon ? 'pr-10' : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className={containerStyles}>
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={`${inputStyles} ${leftIconStyles} ${rightIconStyles}`}
          disabled={disabled}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
