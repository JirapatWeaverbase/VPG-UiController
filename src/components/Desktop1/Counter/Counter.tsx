
import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Component1_Property1Minus1 } from '../Component1_Property1Minus1/Component1_Property1Minus1';
import { Component2_Property1Plus1 } from '../Component2_Property1Plus1/Component2_Property1Plus1';
import classes from './Counter.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  isActive?: boolean;
  setvalue?: (newValue: number) => void;
  value?: number; 
}

export const Counter: FC<Props> = memo(function Counter(props = {}) {
  const [count, setCount] = useState(props.value || 0); // ใช้ค่า props.value เป็นค่าเริ่มต้น
  
  useEffect(() => {
    if (props.value != null) {setCount(Number(props.value));}
  }, [props.value]);

  const increment = () => {
    
    if (props.setvalue != null)  {
      props.setvalue(count + 1)
      console.log('set prop')
    } 
    else {setCount(prevCount => prevCount + 1);console.log('set value')};
  };
  const decrement = () => {
    if (props.setvalue != null) {
      props.setvalue(count - 1) 
      console.log('set prop')
    } 
    else {setCount(prevCount => prevCount - 1);console.log('set value')};
  };

  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div onClick={decrement}> <Component1_Property1Minus1 /></div>
      <input 
        className={classes.unnamed} 
        value={count} 
        onChange={e => {
          const newValue = parseInt(e.target.value);
          setCount(isNaN(newValue) ? 0 : newValue);
          if (props.setvalue) props.setvalue(isNaN(newValue) ? 0 : newValue); // เรียกใช้ setvalue จาก props โดยส่งค่า newValue
        }} 
        style={{width:"80px"}}
      />
      <div onClick={increment}> <Component2_Property1Plus1/></div>
    </div>
  );
});
