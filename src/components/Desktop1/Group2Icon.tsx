import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_195_1383)'>
      <rect x={0.0591908} y={0.232374} width={39.8816} height={42.423} rx={2} fill='white' />
    </g>
    <path d='M13.3531 21.5695L25.1033 9.0705' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M13.3531 21.4435L25.1033 33.9425' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <defs>
      <filter
        id='filter0_d_195_1383'
        x={-1.94081}
        y={-1.76763}
        width={47.8816}
        height={50.423}
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1383' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1383' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
