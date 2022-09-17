import React from 'react'
import { Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';


class Schedule extends React.Component {
   private localData: EventSettingsModel = {
      dataSource: [{
         EndTime: new Date(2019, 0, 11, 6, 30),
         StartTime: new Date(2019, 0, 11, 4, 0)           
      }]

   };
   
     public render() {
        return <ScheduleComponent currentView='Month' selectedDate={new Date(2019, 0, 11)}
        eventSettings={this.localData}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
         </ScheduleComponent>
      
     }     
    
}

export default Schedule;