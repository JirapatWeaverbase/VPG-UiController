import { memo, SVGProps } from 'react';

const Group8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_195_1419)'>
      <rect
        x={14.9978}
        y={-0.0000953674}
        width={14.9979}
        height={14.9979}
        rx={2}
        transform='rotate(89.992 14.9978 -9.53674e-05)'
        fill='white'
      />
    </g>
    <path d='M7.45483 5.00014L11.8743 9.41832' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M7.49927 5.00014L3.08108 9.41956' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <defs>
      <filter
        id='filter0_d_195_1419'
        x={-1.99982}
        y={-1.99982}
        width={22.9994}
        height={22.9994}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1419' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1419' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Group8Icon);
export { Memo as Group8Icon };
