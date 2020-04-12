import React, { useState } from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Col,
  CardBody,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row
} from 'reactstrap';
import classNames from 'classnames';

const Params = () => {
  
  const [ activeTab, setActiveTab ] = useState('indicadores')

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      console.log(activeTab)
    }
  }

  return (
    <Card>
      <CardBody className="pt-1 pl-0 pr-0">
        <Nav className="nav-pills navtab-bg">
          <NavItem>
            <NavLink
              href="#"
              className={classNames({ active: activeTab === 'indicadores' })}
              onClick={() => { toggleTab('indicadores') }}
            >
              Indicadores
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classNames({ active: activeTab === 'patógenos' })}
              onClick={() => { toggleTab('patógenos'); }}
            >
              Patogenos
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="indicadores">
            <p>Indicadores: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta, aliquid impedit corporis explicabo perspiciatis ea aliquam quisquam, perferendis, exercitationem velit quae nam voluptatibus nihil eligendi. Ex eligendi debitis ea?</p>
          </TabPane>
          <TabPane tabId="patógenos">
            <p>Patogenos: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error at expedita vero, ipsa officiis consequuntur quibusdam et voluptatem pariatur est dolore repellendus. Quod quis veritatis iusto. Tenetur, ad vero!</p>
          </TabPane>
        </TabContent>
        
      </CardBody>
    </Card>
  )
}

const UIModal = ({btnTitle, sample }) => {
  const [ modal, setModal ] = useState(false)
  const [ otherProps, setOtherProps ] = useState({
    size: null,
    className: null
  })
  const [ editParams, setEditParams ] = useState(false);
  /**
   * Show/hide the modal
   */
  const toggle = () => {
    setModal(!modal)
    setEditParams(false)
  }
  /**
   * Opens modal with custom class
   */
  const openModalWithClass = className => {
    setOtherProps({ 
      className: className, 
      size: null 
    });
    toggle();
  };
  return (
    <React.Fragment>
      <Button color="light" onClick={() => openModalWithClass('modal-dialog-scrollable')}>
        {btnTitle}
      </Button>    
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={otherProps.className}
        size={otherProps.size}
      >
      <ModalHeader toggle={toggle}>
        {sample.name} 
        <span className="border-left pl-2 ml-2 text-muted font-size-14 ">{sample.type}</span> 
      </ModalHeader>
      <ModalBody>
        <Row className="justy-content-center mb-3">
          <Col  className="col-xl-6 col-md-6 col-6">
            <h5 className="mt-2">{editParams ? 'Eliminar Parametros' : 'Parametros'}</h5>
          </Col>
          <Col className="col-xl-6 col-md-6 col-6">
            <button 
              className="btn btn-danger float-right"
              onClick={() => setEditParams(!editParams)}
            >
              {editParams ? 'Cerrar edición' : 'Editar muestra'}
            </button>
          </Col>
        </Row>
        <div className="row">
          {sample.parameters.map((param, i) => (
            <div className="col-xl-6 col-md-6 col-sm-6" key={param.id}>
              <div 
                className={classNames(
                  'custom-check-box border rounded mb-3',
                  { 'active-check-box': editParams }
                )}
              >
                <input 
                  type="checkbox"
                  value={param.name}
                  onClick={e => console.log(e.target.value)}
                  id={`check-for-${param.name}`}
                  className="custom-input"
                />
                <label 
                  className="custom-label" 
                  htmlFor={`check-for-${param.name}`}
                >
                  {param.name}
                  <span className="text-muted font-size-13 mt-1" style={{
                    display: 'block',
                  }}>{param.testType}</span>
                </label>
              </div>
            </div>
          ))}
        </div>

        {otherProps.className 
          && otherProps.className === 'modal-dialog-scrollable' 
          && editParams && (
          <React.Fragment>
            <h5 className="mt-2">Agregar Parametros</h5>
            <Params />
          </React.Fragment>
          )
        }

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Procesar muestra</Button>
          <Button 
              color="success"
              onClick={() => setEditParams(!editParams)}
            >
            {editParams ? 'Cerrar edición' : 'Editar muestra'}
          </Button>
          <Button color="secondary" className="ml-1" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal> 
    </React.Fragment>
  );
}

export default UIModal;