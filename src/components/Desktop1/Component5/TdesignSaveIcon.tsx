import { memo, SVGProps } from 'react';

const TdesignSaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 57 57' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.75 4.75H38.9832L52.25 18.0167V52.25H4.75V4.75ZM9.5 9.5V47.5H14.25V33.25H42.75V47.5H47.5V19.9832L37.0168 9.5H30.875V19H14.25V9.5H9.5ZM19 9.5V14.25H26.125V9.5H19ZM38 47.5V38H19V47.5H38Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(TdesignSaveIcon);
export { Memo as TdesignSaveIcon };
