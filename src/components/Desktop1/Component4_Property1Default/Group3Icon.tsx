import { memo, SVGProps } from 'react';

const Group3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_195_1437)'>
      <rect width={24} height={24} rx={2} fill='white' />
    </g>
    <g filter='url(#filter1_d_195_1437)'>
      <rect width={24} height={24} rx={2} fill='white' />
    </g>
    <path d='M15.0713 12.0711L8.00022 5' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M15.0713 11.9998L8.00022 19.0708' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <defs>
      <filter
        id='filter0_d_195_1437'
        x={-2}
        y={-2}
        width={32}
        height={32}
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1437' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1437' result='shape' />
      </filter>
      <filter
        id='filter1_d_195_1437'
        x={-2}
        y={-2}
        width={32}
        height={32}
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1437' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1437' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Group3Icon);
export { Memo as Group3Icon };