
import { memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './FanLevel_Property1Component1.module.css';

interface Props {
  className?: string;
  classes?: {
    frame2?: string;
    root?: string;
  };
  text?: {
    unnamed?: ReactNode;
  };
  isActive?: boolean;
  onClick?: () => void;
}

export const FanLevel_Property1Component1: FC<Props> = memo(function FanLevel_Property1Component1(props = {}) {
  const isPressed = props.isActive || false; 

  return (
    <button 
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root} ${isPressed ? classes.bt_active : classes.bt_un_active}`}
      onClick={props.onClick}
    >
      <div className={`${props.classes?.frame2 || ''} ${classes.frame2}`}>
        {props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}>0</div>}
      </div>
    </button>
  );
});

