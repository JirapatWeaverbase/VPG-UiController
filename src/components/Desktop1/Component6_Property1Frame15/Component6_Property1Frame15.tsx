
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component6_Property1Frame15.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle22?: string;
    root?: string;
  };
  setvalue?: () => void; 
}
/* @figmaId 104:8383 */
export const Component6_Property1Frame15: FC<Props> = memo(function Component6_Property1Frame15(props = {}) {
  
  return (
    <button onClick={props.setvalue} className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle22 || ''} ${classes.rectangle22}`}></div>
      <div className={classes.sETZERO}>SET ZERO</div>
    </button>
  );
});



