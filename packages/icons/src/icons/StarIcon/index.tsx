import { SVGProps } from 'react';

export interface StarIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Icon color
   */
  color?: string;
}

/**
 * Star icon component
 */
export const StarIcon = ({
  size = 'medium',
  color = 'currentColor',
  className,
  ...props
}: StarIconProps) => {
  // Size mapping
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
  };

  // Calculate dimensions
  const dimension = sizeMap[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
