import { memo, SVGProps } from 'react';

const MdiPumpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.41666 46.375V33.125H7.72916C7.00006 30.9922 6.62702 28.754 6.625 26.5C6.625 21.2288 8.71896 16.1735 12.4463 12.4463C16.1735 8.71897 21.2288 6.625 26.5 6.625H48.5833V19.875H45.2708C45.9775 21.9508 46.375 24.1812 46.375 26.5C46.375 31.7712 44.281 36.8265 40.5537 40.5537C36.8265 44.281 31.7712 46.375 26.5 46.375H4.41666ZM11.0417 26.5C11.0417 29.3267 11.7925 31.9546 13.1175 34.2292L20.7583 29.8125C20.2062 28.8408 19.875 27.7146 19.875 26.5C19.875 25.0646 20.3387 23.7396 21.1117 22.6575L13.9125 17.5121C12.1458 20.0517 11.0417 23.1875 11.0417 26.5ZM26.5 41.9583C32.2196 41.9583 37.2104 38.8446 39.8825 34.2292L32.2417 29.8125C31.0933 31.8 28.9512 33.125 26.5 33.125H25.8596L25.0204 41.8921L26.5 41.9583ZM26.5 19.875C29.1721 19.875 31.4908 21.465 32.5287 23.7617L40.5671 20.0958C39.3395 17.3951 37.3601 15.1049 34.8655 13.4993C32.3709 11.8937 29.4667 11.0405 26.5 11.0417V19.875ZM26.5 24.2917C25.2854 24.2917 24.2917 25.2854 24.2917 26.5C24.2917 27.7146 25.2854 28.7083 26.5 28.7083C27.7146 28.7083 28.7083 27.7146 28.7083 26.5C28.7083 25.2854 27.7146 24.2917 26.5 24.2917Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(MdiPumpIcon);
export { Memo as MdiPumpIcon };
