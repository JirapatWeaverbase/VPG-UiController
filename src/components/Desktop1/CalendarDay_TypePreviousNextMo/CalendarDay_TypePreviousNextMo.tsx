import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CalendarDay_TypePreviousNextMo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    day?: ReactNode;
  };
}
/* @figmaId 104:5490 */
export const CalendarDay_TypePreviousNextMo: FC<Props> = memo(function CalendarDay_TypePreviousNextMo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.day != null ? props.text?.day : <div className={classes.day}>28</div>}
    </div>
  );
});
