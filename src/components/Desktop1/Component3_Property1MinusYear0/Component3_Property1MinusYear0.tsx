
import { memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component3_Property1MinusYear0.module.css';
import { Group8Icon } from './Group8Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    group8?: ReactNode;
  };
  isActive?: boolean;
  setvaluecom3?: (newValuecom3: number) => void;
  value1?: number; 
}
// /* @figmaId 90:5178 */
export const Component3_Property1MinusYear0: FC<Props> = memo(function Component3_Property1MinusYear0(props = {}) {
  const [count1, setCount] = useState(props.value1 || 0); 
  
  useEffect(() => {
    if (props.value1 != null) {setCount(Number(props.value1));}
  }, [props.value1]);

  const increment = () => {
    if (props.setvaluecom3 != null)  {
      props.setvaluecom3(count1 + 1)
      console.log('set prop')
    } 
    else {setCount(prevCount => prevCount + 1);console.log('set value')};
  };

  return (
    <button className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
       <div onClick={increment}> <Group8Icon className={classes.icon} /></div>
    </button>
  );
});




