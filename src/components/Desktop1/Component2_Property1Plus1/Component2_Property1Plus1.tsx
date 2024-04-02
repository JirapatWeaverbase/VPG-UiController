import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component2_Property1Plus1.module.css';
import { Ellipse8Icon } from './Ellipse8Icon.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 52:573 */
export const Component2_Property1Plus1: FC<Props> = memo(function Component2_Property1Plus1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon} />
      </div>
      <div className={classes.union}>
        <UnionIcon className={classes.icon2} />
      </div>
    </div>
  );
});
