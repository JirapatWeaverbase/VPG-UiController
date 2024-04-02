import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _2Icon } from './_2Icon.js';
import classes from './Component1_Property1Minus1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 52:559 */
export const Component1_Property1Minus1: FC<Props> = memo(function Component1_Property1Minus1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <button className={classes._2} >
        <_2Icon className={classes.icon} />
      </button>
      <div className={classes._1}></div>
    </div>
  );
});
