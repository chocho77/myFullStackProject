import React from 'react'
import { Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const Schedule = () => {
  return (
    <div>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </div>
  )
}

export default Schedule
