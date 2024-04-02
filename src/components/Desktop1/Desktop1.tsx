import { memo,useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BiFanIcon } from './BiFanIcon.js';
import { Component3_Property1MinusYear0 } from './Component3_Property1MinusYear0/Component3_Property1MinusYear0';
import { Component5 } from './Component5/Component5';
import { Component6_Property1Frame15 } from './Component6_Property1Frame15/Component6_Property1Frame15';
import { Counter } from './Counter/Counter';
import classes from './Desktop1.module.css';
import { FanLevel_Property1Component1 } from './FanLevel_Property1Component1/FanLevel_Property1Component1';
import { GameIconsWeightIcon } from './GameIconsWeightIcon.js';
import { Group2Icon } from './Group2Icon.js';
import { Group3Icon } from './Group3Icon.js';
import { Group7Icon2 } from './Group7Icon2.js';
import { Group7Icon } from './Group7Icon.js';
import { Group8Icon2 } from './Group8Icon2.js';
import { Group8Icon } from './Group8Icon.js';
import { Group14 } from './Group14/Group14';
import { HeroiconsCpuChipSolidIcon } from './HeroiconsCpuChipSolidIcon.js';
import { IconParkOutlinePigIcon } from './IconParkOutlinePigIcon.js';
import { MdiPumpIcon } from './MdiPumpIcon.js';
import { PlusYear_Property12 } from './PlusYear_Property12/PlusYear_Property12';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import { Rectangle18Icon } from './Rectangle18Icon.js';
import { SliceButton_Property1Component } from './SliceButton_Property1Component/SliceButton_Property1Component';
import { Quantity } from './Quantity/quantitycomponents';


//Test calendar
import { render } from '@fullcalendar/core/preact';
import { setDate } from 'date-fns';





interface Props {
  className?: string;
  hide?: {
    month?: boolean;
    weekdays?: boolean;
  };
}

/* @figmaId 5:6 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  const handleFanSpeedChange = (index: number) => {
    const newFanSpeed = [...fanSpeed]; // 
    newFanSpeed.fill(false); 
    newFanSpeed[index] = true; 
    setFanSpeed(newFanSpeed);
  }
  const handleCounterChange = (value: number) => {
    setcounter(value); 
  }
  const handleQuantityChange = (value: number) => {
    setcounterquantity(value); 
  }
  const handlePigliveChange = (value: number) => {
    setcounterpiglive(value); 
  }
  const handlePigdieChange = (value: number) => {
    setcounterpigdie(value); 
  }
  const handlePignurtureChange = (value: number) => {
    setcounterpignurture(value); 
  }
  const handleTargetTempChange = (value: number) => {
    setcountertargettemp(value); 
  }
  const handleOnTimeChange = (value: number) => {
    setcounterontime(value); 
  }
  const handleOffTimeChange = (value: number) => {
    setcounterofftime(value); 
  }
  const handleDaynurtureChange = (value: number) => {
    setcounterdaynurture(value); 
  }
  const handleDateChange = (value: Date) => {
    setvaluedateinput(value); 
  }
  const handleAutoChange = (valueauto: boolean) => {
    setautomanual(valueauto);
  }
  const handleFanChange = (fanSpeed: boolean[]) => {
    const speedValues = [0, 25, 50, 75, 100];
  
    const truePositions = fanSpeed.reduce<number[]>((acc, isTrue, index) => {
      if (isTrue) {
        acc.push(speedValues[index]);
      }
      return acc;
    }, []);
  
    return truePositions;
  };


  const [fanSpeed, setFanSpeed] = useState([false, false, false, false, false]);
  const [counter, setcounter] = useState(0);
  const [counterquantity, setcounterquantity] = useState(0);
  const [counterpiglive, setcounterpiglive] = useState(0);
  const [counterpigdie, setcounterpigdie] = useState(0);
  const [countertargettemp, setcountertargettemp] = useState(0);
  const [counterpignurture, setcounterpignurture] = useState(0);
  const [counterontime, setcounterontime] = useState(0);
  const [counterofftime, setcounterofftime] = useState(0);
  const [counterdaynurture, setcounterdaynurture] = useState(0);
  const [valuedateinput, setvaluedateinput] = useState(new Date());
  const [automanual, setautomanual] = useState(false);

  return (
    // ตัวอย่างการใช้งาน


// เรียกใช้งานฟังก์ชัน getTest()
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon7} />
      </div>
      <div className={classes.rectangle18}>
        <Rectangle18Icon className={classes.icon8} />
      </div>
      <div className={classes.biFan}>
        <BiFanIcon className={classes.icon9} />
      </div>
      <div className={classes.sYSTEMCONTROLAutoManual}>SYSTEM CONTROL(Auto / Manual)</div>
      <div className={classes.lOADCELLCALIBRATION}>LOADCELL &amp; CALIBRATION</div>
      <div className={classes.fANSPEEDCONTROL}>FAN SPEED CONTROL</div>
      <div className={classes.wATERPUMPCONTROLOnTimeOffTime}>WATER PUMP CONTROL (On time / Off time)</div>
      <div className={classes.frame252}>
        <FanLevel_Property1Component1
          className={classes.fanLevel}
          classes={{ frame2: classes.frame2 }}
          text={{
            unnamed: <div className={classes.unnamed}>0</div>,
          }}
          isActive = {fanSpeed[0]}
          onClick={() => handleFanSpeedChange(0)}
        />
        <FanLevel_Property1Component1
          className={classes.fanLevel1}
          classes={{ frame2: classes.frame22 }}
          text={{
            unnamed: <div className={classes.unnamed2}>25</div>,
          }}
          isActive = {fanSpeed[1]}
          onClick={() => handleFanSpeedChange(1)}
        />
        <FanLevel_Property1Component1
          className={classes.fanLevel2}
          classes={{ frame2: classes.frame23 }}
          text={{
            unnamed: <div className={classes.unnamed3}>50</div>,
          }}
          isActive = {fanSpeed[2]}
          onClick={() => handleFanSpeedChange(2)}
        />
        <FanLevel_Property1Component1
          className={classes.fanLevel3}
          classes={{ frame2: classes.frame24 }}
          text={{
            unnamed: <div className={classes.unnamed4}>75</div>,
          }}
          isActive = {fanSpeed[3]}
          onClick={() => handleFanSpeedChange(3)}
        />
        <FanLevel_Property1Component1
          className={classes.fanLevel4}
          classes={{ frame2: classes.frame25 }}
          text={{
            unnamed: <div className={classes.unnamed5}>100</div>,
          }}
          isActive = {fanSpeed[4]}
          onClick={() => handleFanSpeedChange(4)}
        />
      </div>

      <div className={classes.mdiPump}>
        <MdiPumpIcon className={classes.icon10} />
      </div>
      <Counter className={classes.counter} value={counterontime} setvalue={(newValue) => handleOnTimeChange(newValue)}/>
      <Counter className={classes.counter2} value={counterofftime} setvalue={(newValue) => handleOffTimeChange(newValue)} />
      <div className={classes.frame222}>
        <div className={classes.frame14}>
          <div className={classes.tARGETTEMP}>TARGET TEMP</div>
          <Counter className={classes.counter3} value={countertargettemp} setvalue={(newValue) => handleTargetTempChange(newValue)} />
        </div>
        <div className={classes.frame21}>
          <div className={classes.unnamed6}>จำนวนหมูที่เลี้ยง</div>
          <Counter value={counterpignurture} setvalue={(newValue) => handlePignurtureChange(newValue)} />
        </div>
        <div className={classes.frame20}>
          <div className={classes.unnamed7}>จำนวนหมูที่ตาย</div>
          <Counter value={counterpigdie} setvalue={(newValue) => handlePigdieChange(newValue)} />
        </div>
        <div className={classes.frame19}>
          <div className={classes.unnamed8}>จำนวนหมูที่เหลือ</div>
          <Counter value={counterpiglive} setvalue={(newValue) => handlePigliveChange(newValue)}/>
        </div>
      </div>
      <div className={classes.heroiconsCpuChipSolid}>
        <HeroiconsCpuChipSolidIcon className={classes.icon11} />
      </div>
      <div className={classes.gameIconsWeight}>
        <GameIconsWeightIcon className={classes.icon12} />
      </div>
      <Counter className={classes.counter4} value={counter} setvalue={(newValue) => handleCounterChange(newValue)} />
      <SliceButton_Property1Component
        className={classes.sliceButton}
        valueauto={automanual}
        setvalueauto={(newValueauto) => handleAutoChange(newValueauto)}
      />
      <div className={classes.unnamed9}>วันที่เริ่มเลี้ยงหมู</div>
      <div className={classes.unnamed10}>จำนวนวันที่เลี้ยง</div>
      <div className={classes.iconParkOutlinePig}>
        <IconParkOutlinePigIcon className={classes.icon13} />
      </div>
      <Counter className={classes.counter5} value={counterdaynurture} setvalue={(newValue) => handleDaynurtureChange(newValue)} />
      <Component5 className={classes.component5} 
      loadValue={counter}
      loadValuePigdie={counterpigdie}
      loadValuePignurture={counterpignurture} 
      loadValue01 = {counterpiglive} 
      loadValueDate = {valuedateinput} 
      loadValueFan={Number(handleFanChange(fanSpeed))} 
      loadValueAuto={automanual}
      loadValueTargetTemp={countertargettemp}
      loadQuantity={counterquantity}
      loadValueOnTime={counterontime}
      loadValueOffTime={counterofftime}
      loadValueDaynurture={counterdaynurture}
      />
      <div className={classes.frame18}>
        <Component6_Property1Frame15 className={classes.component6} setvalue={() => handleCounterChange(0)} classes={{ rectangle22: classes.rectangle22 }} />
      </div>
      <div className={classes.frame232}>
        <div className={classes.unnamed11}>น้ำหนักที่ใส่ใหม่ครั้งที่</div>
        <div className={classes.frame16}>
          <div className={classes.frame17}>
            <div className={classes.frame142}>
              <div className={classes.unnamed12}>{counterquantity}</div>
            </div>
            <div className={classes.frame15}>
              <Component3_Property1MinusYear0 
                value1={counterquantity} 
                setvaluecom3={(newValuecom3) => handleQuantityChange(newValuecom3)}
                />
              <PlusYear_Property12
                value1={counterquantity} 
                setvaluecom3={(newValuecom3) => handleQuantityChange(newValuecom3)}
              />
            </div>
          </div>
        </div>
      </div>
      <Group14
        valuedateinput={valuedateinput}
        setvaluedateinput={(newValuedate) => handleDateChange(newValuedate)}
        className={classes.group14}
      />

    </div>
  
  );
});
