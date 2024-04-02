import { memo, SVGProps } from 'react';

const Group7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_195_1424)'>
      <rect
        width={14.9979}
        height={14.9979}
        rx={2}
        transform='matrix(0.000139609 -1 -1 -0.000139609 14.9978 15.0001)'
        fill='white'
      />
    </g>
    <path d='M7.45483 9.99986L11.8743 5.58168' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M7.49927 9.99986L3.08108 5.58045' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <defs>
      <filter
        id='filter0_d_195_1424'
        x={-1.99982}
        y={-1.99963}
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1424' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1424' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Group7Icon);
export { Memo as Group7Icon };
