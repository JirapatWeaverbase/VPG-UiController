import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CalendarDay_TypeCurrentMonthSt } from '../CalendarDay_TypeCurrentMonthSt/CalendarDay_TypeCurrentMonthSt';
import classes from './Week1.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    calendarDay?: ReactNode;
    calendarDay2?: ReactNode;
    calendarDay3?: ReactNode;
    calendarDay4?: ReactNode;
  };
  text?: {
    day?: ReactNode;
    day2?: ReactNode;
    day3?: ReactNode;
    day4?: ReactNode;
    day5?: ReactNode;
    day6?: ReactNode;
    day7?: ReactNode;
  };
}
/* @figmaId 104:5430 */
export const Week1: FC<Props> = memo(function Week1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.calendarDay || (
        <CalendarDay_TypeCurrentMonthSt
          className={classes.calendarDay}
          text={{
            day: props.text?.day5 || <div className={classes.day}>26</div>,
          }}
        />
      )}
      {props.swap?.calendarDay2 || (
        <CalendarDay_TypeCurrentMonthSt
          className={classes.calendarDay2}
          text={{
            day: props.text?.day6 || <div className={classes.day2}>27</div>,
          }}
        />
      )}
      {props.swap?.calendarDay3 || (
        <CalendarDay_TypeCurrentMonthSt
          className={classes.calendarDay3}
          text={{
            day: props.text?.day7,
          }}
        />
      )}
      <CalendarDay_TypeCurrentMonthSt
        className={classes.calendarDay4}
        text={{
          day: props.text?.day || <div className={classes.day3}>29</div>,
        }}
      />
      <CalendarDay_TypeCurrentMonthSt
        className={classes.calendarDay5}
        text={{
          day: props.text?.day2 || <div className={classes.day4}>30</div>,
        }}
      />
      <CalendarDay_TypeCurrentMonthSt
        className={classes.calendarDay6}
        text={{
          day: props.text?.day3 || <div className={classes.day5}>31</div>,
        }}
      />
      {props.swap?.calendarDay4 || (
        <CalendarDay_TypeCurrentMonthSt
          className={classes.calendarDay7}
          text={{
            day: props.text?.day4 || <div className={classes.day6}>1</div>,
          }}
        />
      )}
    </div>
  );
});
