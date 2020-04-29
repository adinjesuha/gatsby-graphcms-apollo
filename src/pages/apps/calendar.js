import React from "react"
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

// import PageTitle from '../../components/PageTitle';

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const IndexPage = () => {
  const events = [
    {
      id: 1,
      title: 'Meeting with Mr. Shreyu!',
      start: new Date().setDate(new Date().getDate() + 1),
      end: new Date().setDate(new Date().getDate() + 2),
      className: 'bg-warning text-white',
    },
    {
      id: 2,
      title: 'See John Deo',
      start: new Date(),
      end: new Date(),
      className: 'bg-success text-white',
    },
    {
      id: 3,
      title: 'Meet John Deo',
      start: new Date().setDate(new Date().getDate() + 8),
      className: 'bg-info text-white',
    },
    {
      id: 4,
      title: 'Buy a Theme',
      start: new Date().setDate(new Date().getDate() + 7),
      className: 'bg-primary text-white',
    },
  ];
  return(
    <Layout>
      <SEO title="Calendario" />
      <Row className="page-title align-items-center">
        <Col sm={4} xl={6}>
          <h4 className="mb-1 mt-0">Calendario</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              {/* fullcalendar control */}
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage