import React from "react"
import { Row, Col } from "reactstrap"
import classNames from 'classnames'

const MonitoringFilter = ({ monitorings, currentFilter, filterResultsFn }) => {
  
  const filterResultsHandler = filter => {
    return () => {
      filterResultsFn(filter)
    }
  }

  const activeMonitorings = monitorings.filter(
    monitoring => monitoring.completed !== true
  )

  let itemCount = monitorings.length

  if (currentFilter === "active") {
    itemCount = activeMonitorings.length
  } else if (currentFilter === "completed") {
    itemCount = monitorings.length - activeMonitorings.length
  }

  return (
    <Row className="page-title">
      <Col md={3} xl={4}>
        <h4 className="mb-1 mt-0">
          <span>{itemCount}</span>{' '} 
          Monitoreo{itemCount !== 1 ? "s" : ""}
        </h4>
      </Col>
      <Col md={9} xl={8} className="text-md-right">
        <div className="mt-4 mt-md-0">
          <button type="button" className="btn btn-danger mr-4 mb-3  mb-sm-0">Crear monitoreo</button>
          <div className="btn-group mb-3 mb-sm-0">
            <button 
              type="button" 
              className={classNames('btn',
                {'btn-white': currentFilter !== 'all'},
                {'btn-primary': currentFilter === 'all'}
              )}
              onClick={filterResultsHandler("all")}
            >
              Todos
            </button>
          </div>
          <div className="btn-group ml-1">
            <button 
              type="button" 
              onClick={filterResultsHandler("active")} 
              className={classNames('btn',
                {'btn-white': currentFilter !== 'active'},
                {'btn-primary': currentFilter === 'active'}
              )}
            >
              En progreso
            </button>
            <button 
              type="button" 
              onClick={filterResultsHandler("completed")}
              className={classNames('btn',
                {'btn-white': currentFilter !== 'completed'},
                {'btn-primary': currentFilter === 'completed'}
              )}
            >
              Finalizadas
            </button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default MonitoringFilter
