import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './AtomsWeekDey_WeekendNo.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 90:3449 */
export const AtomsWeekDey_WeekendNo: FC<Props> = memo(function AtomsWeekDey_WeekendNo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Day</div>}
    </div>
  );
});
