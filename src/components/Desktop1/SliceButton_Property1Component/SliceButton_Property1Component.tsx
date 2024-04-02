
import { memo } from 'react';
import { useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Ellipse4Icon } from './Ellipse4Icon.js';
import classes from './SliceButton_Property1Component.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  valueauto?: boolean;
  setvalueauto?: (newValueauto: boolean) => void;

}

export const SliceButton_Property1Component: FC<Props> = memo(function SliceButton_Property1Component(props = {}) {
  const [toggled, setToggled] = useState(props.valueauto);

  return (
    <div className='toggle'>
      <button
        className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
        onClick={() => {
          setToggled(!toggled);
          if (props.setvalueauto) { 
            props.setvalueauto(!toggled);
          }
        }}
      >
        <div className={toggled ? classes.rectangle3_active : classes.rectangle3}></div>
        <div className={toggled ? classes.ellipse4_active : classes.ellipse4}>
          <Ellipse4Icon className={classes.icon} />
        </div>
      </button>
    </div>
  );
});










