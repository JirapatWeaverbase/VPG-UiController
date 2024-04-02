import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={17.5} cy={17.5} r={17.5} fill='#262FFF' />
  </svg>
);
const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
