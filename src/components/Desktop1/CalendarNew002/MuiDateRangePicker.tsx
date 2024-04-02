
////////////////////////////////////////////////////////////////////////

import { memo } from 'react';
import type { FC } from 'react';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'; // import TextField เพื่อใช้เป็น input ในการ render


interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  valuedateinput2?: Date;
  setvaluedateinput2?: (newValuedate2: Date) => void;
}

export const MuiDateRangePicker: FC<Props> = memo(function MuiDateRangePicker(props = {}) {
  const [selectedDate, handleDateChange] = React.useState<Date | null>(null); // สร้าง state เพื่อเก็บวันที่ที่เลือก
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={props.valuedateinput2 !== undefined ? props.valuedateinput2 : null}  
        onChange={(newValuedate2) => {
          if (newValuedate2 !== null) {
            props.setvaluedateinput2?.(newValuedate2);
            handleDateChange(newValuedate2);
          }
        }}
        renderInput={(props) => <TextField {...props} />} 
      />
    </LocalizationProvider>
  );
});


