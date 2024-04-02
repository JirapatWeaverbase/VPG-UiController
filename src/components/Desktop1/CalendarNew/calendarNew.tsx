import { memo } from 'react';
import type { FC } from 'react';
import React, { useState } from 'react'
import { formatDate } from '@fullcalendar/core'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


interface Props {
    className?: string;
}

// function calendarNew() {
//     return(
//         <div>
//             <FullCalendar
//                 plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                 initialView={"timeGridMonth"}
//                 headerToolbar={{
//                     start: "today prev,next",
//                     center:"title",
//                     end:"dayGridMonth,timeGridWeek,timeGridDay",
//                 }}
//             />
//         </div>
//     );
// }

// function CalendarNew() {
export const CalendarNew: FC<Props> = memo(function CalendarNew(props = {}){
    return(
        <div>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center:"title",
                    end:"dayGridMonth,timeGridWeek,timeGridDay",
                }}
            />
        </div>
    );
});

// export default CalendarNew;