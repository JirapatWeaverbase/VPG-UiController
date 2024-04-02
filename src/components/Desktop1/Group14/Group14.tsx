import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AtomsWeekDey_WeekendNo } from '../AtomsWeekDey_WeekendNo/AtomsWeekDey_WeekendNo';
import { AtomsWeekDey_WeekendYes } from '../AtomsWeekDey_WeekendYes/AtomsWeekDey_WeekendYes';
import { Calendar } from '../Calendar/Calendar';
import { Component3_Property1MinusYear0 } from '../Component3_Property1MinusYear0/Component3_Property1MinusYear0';
import { Component4_Property1Default } from '../Component4_Property1Default/Component4_Property1Default';
import { PlusYear_Property12 } from '../PlusYear_Property12/PlusYear_Property12';
import { Group2Icon } from './Group2Icon.js';
import { Group3Icon } from './Group3Icon.js';
import { Group7Icon } from './Group7Icon.js';
import { Group8Icon } from './Group8Icon.js';
import classes from './Group14.module.css';
import {MuiDateRangePicker} from '../CalendarNew002/MuiDateRangePicker';

interface Props {
  className?: string;
  classes?: {
    week5?: string;
    line?: string;
    group2?: string;
    group3?: string;
    root?: string;
  };
  swap?: {
    group2?: ReactNode;
    group3?: ReactNode;
    group8?: ReactNode;
    group7?: ReactNode;
  };
  hide?: {
    month?: boolean;
    weekdays?: boolean;
  };
  valuedateinput?: Date;
  setvaluedateinput?: (newValuedate: Date) => void;
}
/* @figmaId 170:48707 */
export const Group14: FC<Props> = memo(function Group14(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle18}></div>
      <MuiDateRangePicker 
        valuedateinput2 = {props.valuedateinput}
        setvaluedateinput2={props.setvaluedateinput}
        className={classes.calendar}
      />
    </div>
  );
});
