import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Arrow_TypeOutlineDirectionRigh.module.css';
import { IconStrokeIcon } from './IconStrokeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    iconStroke?: ReactNode;
  };
}
/* @figmaId 104:5412 */
export const Arrow_TypeOutlineDirectionRigh: FC<Props> = memo(function Arrow_TypeOutlineDirectionRigh(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.iconStroke}>{props.swap?.iconStroke || <IconStrokeIcon className={classes.icon} />}</div>
    </div>
  );
});
