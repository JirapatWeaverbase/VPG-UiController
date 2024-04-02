import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component5.module.css';
import { TdesignSaveIcon } from './TdesignSaveIcon.js';
import { ApiClient } from '../../../ApiTest01/Apitest001';
import { Desktop1 } from '../Desktop1';

async function getTest(load : number , 
  load02 : number , 
  load04 : number , 
  load05 : string , 
  load06 : number , 
  load07 : number , 
  load08 : number , 
  load09 : number , 
  load10 : number , 
  load11 : number ,
  load12 : number
  ) {
  try {
    const response = await ApiClient.get(`/loadcellvalue/${load}`);
    console.log(response);
    const response1 = await ApiClient.get(`/totalpig/${load02}`);
    console.log(response1);
    const response3 = await ApiClient.get(`/fanspeed/${load04}`);
    console.log(response3);
    const response4 = await ApiClient.get(`/systemctrl/${load05}`);
    console.log(response4);
    const response5 = await ApiClient.get(`/deadpig/${load06}`);
    console.log(response5);
    const response6 = await ApiClient.get(`/livepig/${load07}`);
    console.log(response6);
    const response7 = await ApiClient.get(`/targettemp/${load08}`);
    console.log(response7);
    const response8 = await ApiClient.get(`/waterpumpon/${load09}`);
    console.log(response8);
    const response9 = await ApiClient.get(`/waterpumpoff/${load10}`);
    console.log(response9);
    const response10 = await ApiClient.get(`/loadcellnumber/${load11}`);
    console.log(response10);
    const response11 = await ApiClient.get(`/daycount/${load12}`);
    console.log(response11);
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function getTestDate(load03:Date) {

  const response2 = await ApiClient.get(`/startdate/${load03}`);
  console.log(response2);
  
}

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  loadValue?:Number;
  loadValue01?:number;
  loadValueDate?: Date;
  loadValueFan?: Number;
  loadValueAuto?: boolean;
  loadValuePigdie?: Number;
  loadValuePignurture?: Number;
  loadValueTargetTemp?: Number;
  loadValueOnTime?: Number;
  loadValueOffTime?: Number;
  loadQuantity?: Number;
  loadValueDaynurture?: Number;

}
const handleAutoChange = (valueauto: boolean | undefined) => {
  if (valueauto !== undefined) {
    if (valueauto === true) {
      return 'Auto';
    } else {
      return 'Manual';
    }
  }
  return 'Manual'; 
}

export const Component5: FC<Props> = memo(function Component5(props = {}) {
  return (
<button onClick={() => { 
    getTest(
        Number(props.loadValue), 
        Number(props.loadValue01), 
        Number(props.loadValueFan), 
        handleAutoChange(props.loadValueAuto),
        Number(props.loadValuePigdie), 
        Number(props.loadValuePignurture),
        Number(props.loadValueTargetTemp),
        Number(props.loadValueOnTime),
        Number(props.loadValueOffTime),
        Number(props.loadQuantity),
        Number(props.loadValueDaynurture)
    );
    if (props.loadValueDate) {
        getTestDate(new Date(props.loadValueDate));
    }
}}

      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle21}></div>
      <div className={classes.sAVE}>SAVE</div>
      <div className={classes.tdesignSave}>
        <TdesignSaveIcon className={classes.icon} />
      </div>
    </button>
  );
});



