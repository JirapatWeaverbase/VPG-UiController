import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CalendarDay_TypeCurrentMonthSt.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    day?: ReactNode;
  };
}
/* @figmaId 104:5460 */
export const CalendarDay_TypeCurrentMonthSt: FC<Props> = memo(function CalendarDay_TypeCurrentMonthSt(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.day != null ? props.text?.day : <div className={classes.day}>28</div>}
    </div>
  );
});
