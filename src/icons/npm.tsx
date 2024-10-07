import React from 'react';
export type IconProps = {
  color?: string;
  size?: string | number;
} & React.SVGAttributes<SVGElement>;

const Npm: React.FC<IconProps> = ({
  size = '24',
  color = 'currentColor',
  ...attributes
}) => (
  <svg
    stroke={color}
    fill={color}
    stroke-width='0'
    version='1.1'
    viewBox='0 0 16 16'
    height={size}
    width={size}
    xmlns='http://www.w3.org/2000/svg'
    {...attributes}
  >
    <path d='M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z'></path>
  </svg>
);

export default Npm;
