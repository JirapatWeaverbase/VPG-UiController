
import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';

import resets from '../../_resets.module.css';
import {Component3_Property1MinusYear0} from '../Component3_Property1MinusYear0/Component3_Property1MinusYear0';
import { PlusYear_Property12 } from '../PlusYear_Property12/PlusYear_Property12';
import classes from './quantity.module.css';


interface Props {
    className?: string;
    classes?: {
      root?: string;
    };
    isActive?: boolean;
    setvaluecom3?: (newValuecom3: number) => void;
    value?: number; 
}






export const Quantity: FC<Props> = memo(function Quantity(props = {}) {
    const [countcom3, setCountcom3] = useState(props.value || 0); 
    
    useEffect(() => {
      if (props.value != null) {setCountcom3(Number(props.value));}
    }, [props.value]);
  
    const increment = () => {
      
      if (props.setvaluecom3 != null)  {
        props.setvaluecom3(countcom3 + 1)
        console.log('set prop')
      }
      else {setCountcom3(prevCount => prevCount + 1);console.log('set value')};
    };
    const decrement = () => {
      if (props.setvaluecom3 != null) {
        props.setvaluecom3(countcom3 - 1) 
        console.log('set prop')
      } 
      else {setCountcom3(prevCount => prevCount - 1);console.log('set value')};
    };
  
    return (
      <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
        <div onClick={decrement}> <PlusYear_Property12 /></div>
        <input 
          value={countcom3} 
          onChange={e => {
            const newValuecom3 = parseInt(e.target.value);
            setCountcom3(isNaN(newValuecom3) ? 0 : newValuecom3);
            if (props.setvaluecom3) props.setvaluecom3(isNaN(newValuecom3) ? 0 : newValuecom3); 
          }} 
          style={{width:"10px"}}
        />
        <div onClick={increment}> <Component3_Property1MinusYear0/></div>
      </div>
    );
  });