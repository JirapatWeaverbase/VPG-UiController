import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Arrow_TypeOutlineDirectionRigh } from '../Arrow_TypeOutlineDirectionRigh/Arrow_TypeOutlineDirectionRigh';
import { CalendarDay_TypePreviousNextMo } from '../CalendarDay_TypePreviousNextMo/CalendarDay_TypePreviousNextMo';
import { Week1 } from '../Week1/Week1';
import classes from './Calendar.module.css';
import { IconStrokeIcon2 } from './IconStrokeIcon2.js';
import { IconStrokeIcon } from './IconStrokeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    week5?: string;
  };
  hide?: {
    month?: boolean;
    weekdays?: boolean;
  };
}
/* @figmaId 104:5503 */
export const Calendar: FC<Props> = memo(function Calendar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.month && (
        <div className={classes.month}>
          <Arrow_TypeOutlineDirectionRigh
            className={classes.arrow}
            swap={{
              iconStroke: <IconStrokeIcon className={classes.icon} />,
            }}
          />
          <div className={classes.march2022}>March 2022</div>
          <Arrow_TypeOutlineDirectionRigh
            swap={{
              iconStroke: <IconStrokeIcon2 className={classes.icon2} />,
            }}
          />
        </div>
      )}
      {!props.hide?.weekdays && (
        <div className={classes.weekdays}>
          <div className={classes.sUN}>SUN</div>
          <div className={classes.mON}>MON</div>
          <div className={classes.tUE}>TUE</div>
          <div className={classes.wED}>WED</div>
          <div className={classes.tHU}>THU</div>
          <div className={classes.fRI}>FRI</div>
          <div className={classes.sAT}>SAT</div>
        </div>
      )}
      <Week1
        className={classes.week1}
        swap={{
          calendarDay: (
            <CalendarDay_TypePreviousNextMo
              className={classes.calendarDay}
              text={{
                day: <div className={classes.day}>29</div>,
              }}
            />
          ),
          calendarDay2: (
            <CalendarDay_TypePreviousNextMo
              className={classes.calendarDay2}
              text={{
                day: <div className={classes.day2}>30</div>,
              }}
            />
          ),
          calendarDay3: (
            <CalendarDay_TypePreviousNextMo
              className={classes.calendarDay3}
              text={{
                day: <div className={classes.day3}>31</div>,
              }}
            />
          ),
        }}
        text={{
          day: <div className={classes.day4}>1</div>,
          day2: <div className={classes.day5}>2</div>,
          day3: <div className={classes.day6}>3</div>,
          day4: <div className={classes.day7}>4</div>,
        }}
      />
      <Week1
        className={classes.week2}
        text={{
          day5: <div className={classes.day8}>5</div>,
          day6: <div className={classes.day9}>6</div>,
          day7: <div className={classes.day10}>7</div>,
          day: <div className={classes.day11}>8</div>,
          day2: <div className={classes.day12}>9</div>,
          day3: <div className={classes.day13}>10</div>,
          day4: <div className={classes.day14}>11</div>,
        }}
      />
      <Week1
        className={classes.week3}
        text={{
          day5: <div className={classes.day15}>12</div>,
          day6: <div className={classes.day16}>13</div>,
          day7: <div className={classes.day17}>14</div>,
          day: <div className={classes.day18}>15</div>,
          day2: <div className={classes.day19}>16</div>,
          day3: <div className={classes.day20}>17</div>,
          day4: <div className={classes.day21}>18</div>,
        }}
      />
      <Week1
        className={classes.week4}
        text={{
          day5: <div className={classes.day22}>19</div>,
          day6: <div className={classes.day23}>20</div>,
          day7: <div className={classes.day24}>21</div>,
          day: <div className={classes.day25}>22</div>,
          day2: <div className={classes.day26}>23</div>,
          day3: <div className={classes.day27}>24</div>,
          day4: <div className={classes.day28}>25</div>,
        }}
      />
      <Week1
        className={`${props.classes?.week5 || ''} ${classes.week5}`}
        swap={{
          calendarDay4: (
            <CalendarDay_TypePreviousNextMo
              className={classes.calendarDay4}
              text={{
                day: <div className={classes.day29}>1</div>,
              }}
            />
          ),
        }}
      />
    </div>
  );
});
