import { memo, SVGProps } from 'react';

const Group3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_195_1451)'>
      <rect x={0.012207} y={0.489209} width={34.0938} height={36.259} rx={2} fill='white' />
    </g>
    <g filter='url(#filter1_d_195_1451)'>
      <rect x={0.012207} y={0.489209} width={34.0938} height={36.259} rx={2} fill='white' />
    </g>
    <path d='M21.4221 18.7261L11.3771 8.04317' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M21.4221 18.6184L11.3771 29.3013' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <defs>
      <filter
        id='filter0_d_195_1451'
        x={-1.98779}
        y={-1.51079}
        width={42.0938}
        height={44.259}
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1451' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1451' result='shape' />
      </filter>
      <filter
        id='filter1_d_195_1451'
        x={-1.98779}
        y={-1.51079}
        width={42.0938}
        height={44.259}
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1451' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1451' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Group3Icon);
export { Memo as Group3Icon };
