import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_195_1446)'>
      <rect x={0.953094} y={0.489209} width={34.0938} height={36.259} rx={2} fill='white' />
    </g>
    <path d='M12.3177 18.7261L22.3627 8.04317' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M12.3177 18.6184L22.3627 29.3013' stroke='#666666' strokeWidth={1.5} strokeLinecap='round' />
    <defs>
      <filter
        id='filter0_d_195_1446'
        x={-1.04691}
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_195_1446' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_195_1446' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
