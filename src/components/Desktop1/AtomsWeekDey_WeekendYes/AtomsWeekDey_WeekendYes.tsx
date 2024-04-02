import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './AtomsWeekDey_WeekendYes.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 90:3451 */
export const AtomsWeekDey_WeekendYes: FC<Props> = memo(function AtomsWeekDey_WeekendYes(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Day</div>}
    </div>
  );
});
