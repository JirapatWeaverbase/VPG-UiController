import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component4_Property1Default.module.css';
import { Group2Icon } from './Group2Icon.js';
import { Group3Icon } from './Group3Icon.js';

interface Props {
  className?: string;
  classes?: {
    group2?: string;
    group3?: string;
    root?: string;
  };
  swap?: {
    group2?: ReactNode;
    group3?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 104:5716 */
export const Component4_Property1Default: FC<Props> = memo(function Component4_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>January</div>}
      <div className={`${props.classes?.group2 || ''} ${classes.group2}`}>
        {props.swap?.group2 || <Group2Icon className={classes.icon} />}
      </div>
      <div className={`${props.classes?.group3 || ''} ${classes.group3}`}>
        {props.swap?.group3 || <Group3Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
