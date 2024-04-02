import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.8182 1.81818C13.8182 0.814027 13.0042 0 12 0C10.9959 0 10.1818 0.814026 10.1818 1.81818V10.1818H1.81818C0.814027 10.1818 0 10.9958 0 12C0 13.0041 0.814026 13.8182 1.81818 13.8182H10.1818V22.1818C10.1818 23.186 10.9959 24 12 24C13.0042 24 13.8182 23.186 13.8182 22.1818V13.8182H22.1818C23.186 13.8182 24 13.0041 24 12C24 10.9958 23.186 10.1818 22.1818 10.1818H13.8182V1.81818Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
