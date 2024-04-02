import { memo, SVGProps } from 'react';

const IconStrokeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.292893 15.7071C-0.0976311 15.3166 -0.0976312 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976317 1.31658 -0.0976318 0.683417 0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071Z'
      fill='#0A1811'
    />
  </svg>
);
const Memo = memo(IconStrokeIcon2);
export { Memo as IconStrokeIcon2 };
