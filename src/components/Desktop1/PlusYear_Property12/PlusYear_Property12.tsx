
import { memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import resets from '../../_resets.module.css';
import { Group7Icon } from './Group7Icon.js';
import classes from './PlusYear_Property12.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    group7?: ReactNode;
  };
  isActive?: boolean;
  setvaluecom3?: (newValuecom3: number) => void;
  value1?: number;
}


export const PlusYear_Property12: FC<Props> = memo(function PlusYear_Property12(props = {}) {
  const [count, setCount] = useState(props.value1 || 0); 
  
  useEffect(() => {
    if (props.value1 != null) {setCount(Number(props.value1));}
  }, [props.value1]);

  const decrement = () => {
    if (props.setvaluecom3 != null)  {
      props.setvaluecom3(count - 1)
      console.log('set prop')
    } 
    else {setCount(prevCount => prevCount + 1);console.log('set value')};
  };

  return (
    <button className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div onClick={decrement} className={classes.group7}>{props.swap?.group7 || <Group7Icon className={classes.icon} />}</div>
    </button>
  );
});