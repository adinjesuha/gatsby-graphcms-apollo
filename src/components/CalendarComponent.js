import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

const CalendarComponent = () => {
  const events = [
    {
      id: 1,
      title: 'Lacthosa Norte',
      start: new Date().setDate(new Date().getDate() + 1),
      end: new Date().setDate(new Date().getDate() + 2),
      className: 'bg-warning text-white',
    },
    {
      id: 2,
      title: 'Empacadora San Lorenzo',
      start: new Date(),
      end: new Date(),
      className: 'bg-success text-white',
    },
    {
      id: 3,
      title: 'Alimentos Maravilla',
      start: new Date().setDate(new Date().getDate() + 8),
      className: 'bg-info text-white',
    },
    {
      id: 4,
      title: 'Industrial de Alimentos',
      start: new Date().setDate(new Date().getDate() + 7),
      className: 'bg-primary text-white',
    },
    {
      id: 5,
      title: 'Panificadora Tabora',
      start: new Date(),
      end: new Date(),
      className: 'bg-primary text-white',
    },
    {
      id: 6,
      title: 'Panificadora Tabora',
      start: new Date(),
      end: new Date(),
      className: 'bg-primary text-white',
    },
    {
      id: 7,
      title: 'Panificadora Tabora',
      start: new Date(),
      end: new Date(),
      className: 'bg-primary text-white',
    },
  ];
  return(
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
      slotDuration='00:15:00'
      minTime='08:00:00' maxTime='19:00:00' themeSystem='bootstrap'
      handleWindowResize={true}
      bootstrapFontAwesome={false}
      buttonText={{today: 'Hoy', month: 'Mes', week: 'Semana', day: 'Dia', list: 'Lista', prev: 'Anterior', next: 'Siguente' }}
      header={{
          left: 'prev, next today',
          center: 'title',
          right: 'dayGridMonth, timeGridWeek,timeGridDay, listMonth'
      }}
      droppable={true}
      editable={true}
      eventLimit={true}  
      selectable={true}
      events={events}
      id="calendar"
    />
  )
}

export default CalendarComponent;