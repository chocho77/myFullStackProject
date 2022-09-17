import React from 'react'
import { Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const Schedule = () => {
  return (
    <div>
        <ScheduleComponent currentView='Month' selectedDate={new Date(2019, 0, 11)}>
           <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      
    </div>
  )
}

export default Schedule
