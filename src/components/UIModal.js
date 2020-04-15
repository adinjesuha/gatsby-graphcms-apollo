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
  Row,
  UncontrolledAlert
} from 'reactstrap';
import classNames from 'classnames';
import { useMutation, useQuery } from '@apollo/react-hooks'

import { removeDash } from '../utils/removeDash'
import { REMOVE_PARAMETER, ADD_PARAMETER, UPDATE_SAMPLE_STATE } from './operations/mutations'
import { ALL_MONITORINGS, ALL_PARAMETERS } from './operations/queries'

const AllParameters = ({sampleID, parameter}) => {
  const [addParameterMutation, { loading }] = useMutation(
    ADD_PARAMETER,
    {
      variables: { sampleID, parameterID: parameter.id },
      refetchQueries: [{ query: ALL_MONITORINGS }],
      awaitRefetchQueries: true,
    }
  )
  return(
    <div 
      className='custom-check-box active-check-box border border-success bg-soft-success rounded mb-3'
    >
      <input 
        type="checkbox"
        value={parameter.name}
        onClick={() => addParameterMutation()}
        id={`check-for-${parameter.name}`}
        className="custom-input"
      />
      {loading ? (
        <label 
        className="custom-label text-success" 
        htmlFor={`check-for-${parameter.name}`}
      >
        <span className="mr-2 mb-1 spinner-border spinner-border-sm text-success" role="status" aria-hidden="true" />
        Agregando...
      </label>
      ) : (
        <label  
          className="custom-label text-success" 
          htmlFor={`check-for-${parameter.name}`}
        >
          {parameter.name}
          <span className="text-success font-size-13 mt-1">Prueba {parameter.testType}</span>
        </label>
      )}
    </div>
  )
}

const Params = ({sampleID, actualParams}) => {

  const [ activeTab, setActiveTab ] = useState('indicadores')

  const { loading, error, data } = useQuery(ALL_PARAMETERS)

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.error(error)
    return <div>Error!</div>
  }

  let filteredParameters = data.parameters.filter(
    parameter =>
      !actualParams.find(
        actualParams => actualParams.id === parameter.id
      )
  )

  let parameters = filteredParameters

  if(activeTab === "indicadores"){
    parameters = filteredParameters.filter(
      parameter => parameter.parameterType === "Indicador"
    )
  }else if (activeTab === "patogenos"){
    parameters = filteredParameters.filter(
      parameter => parameter.parameterType === "Patogeno"
    )
  }else {
    parameters = filteredParameters.filter(
      parameter => parameter.parameterType === "Micotoxina"
    )
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
              className={classNames({ active: activeTab === 'patogenos' })}
              onClick={() => { toggleTab('patogenos'); }}
            >
              Patógenos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classNames({ active: activeTab === 'micotoxinas' })}
              onClick={() => { toggleTab('micotoxinas'); }}
            >
              Micotoxinas
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="indicadores">
            <div className="row">
            {parameters.map(parameter => (
              <div className="col-xl-6 col-md-6 col-sm-6" key={parameter.id}>
                <AllParameters 
                  parameter={parameter}
                  sampleID={sampleID}
                />
              </div>
            ))}
            </div>
          </TabPane>
          <TabPane tabId="patogenos">
            <div className="row">
            {parameters.map(parameter => (
              <div className="col-xl-6 col-md-6 col-sm-6" key={parameter.id}>
                <AllParameters 
                  parameter={parameter}
                  sampleID={sampleID}
                />
              </div>
            ))}
            </div>
          </TabPane>
          <TabPane tabId="micotoxinas">
            <div className="row">
            {parameters.map(parameter => (
              <div className="col-xl-6 col-md-6 col-sm-6" key={parameter.id}>
                <AllParameters 
                  parameter={parameter}
                  sampleID={sampleID}
                />
              </div>
            ))}
            </div>
          </TabPane>
        </TabContent>
        
      </CardBody>
    </Card>
  )
}

const ActualParameters = ({parameter, editParams, sampleID, disabledButton}) => {
  const [removeParameterMutation, { loading }] = useMutation(
    REMOVE_PARAMETER,
    {
      variables: { sampleID, parameterID: parameter.id },
      refetchQueries: [{ query: ALL_MONITORINGS }],
      awaitRefetchQueries: true,
    }
  )
  return(
    <div 
      className={classNames(
        'custom-check-box rounded mb-3 border',
        { 'active-check-box border-danger bg-soft-danger': editParams }
      )}
    >
      <input 
        type="checkbox"
        value={parameter.name}
        onClick={() => removeParameterMutation()}
        id={`check-for-${parameter.name}`}
        className="custom-input"
        disabled={disabledButton}
      />
      {loading ? (
        <label 
        className="custom-label text-danger" 
        htmlFor={`check-for-${parameter.name}`}
      >
        <span class="mr-2 mb-1 spinner-border spinner-border-sm text-danger" role="status" aria-hidden="true" />
        Eliminando...
      </label>
      ) : (
        <label 
          className={classNames(
            'custom-label',
            { 'text-danger': editParams }
          )}
          htmlFor={`check-for-${parameter.name}`}
        >
          {parameter.name}
          <span 
            className={classNames(
              'text-danger font-size-13 mt-1',
              { 'text-muted': !editParams }
            )}
          >Prueba {parameter.testType}</span>
        </label>
      )}
    </div>
  )
}

const UIModal = ({btnTitle, sample }) => {
  const [ modal, setModal ] = useState(false)
  const [ otherProps, setOtherProps ] = useState({
    size: null,
    className: null
  })
  const [ editParams, setEditParams ] = useState(false);

  const [toggleCompletedMutation, { loading }] = useMutation(
    UPDATE_SAMPLE_STATE,
    {
      variables: { id: sample.id },
      refetchQueries: [{ query: ALL_MONITORINGS }],
      awaitRefetchQueries: true,
    }
  )

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
        <span 
          className="border-left pl-2 ml-2 text-muted font-size-14"
        >
          {removeDash(sample.sampleType)}
        </span> 
      </ModalHeader>
      <ModalBody>
        <Row className="justy-content-center mb-3">
          <Col  className="col-xl-12 col-md-12">
            <h5 className="mt-2">{editParams ? 'Eliminar Parametros' : 'Parametros'}</h5>
          </Col>
        </Row>
        <div className="row">
          {sample.parameters.map((param, i) => (
            <div className="col-xl-6 col-md-6 col-sm-6" key={param.id}>
              <ActualParameters 
                parameter={param}
                editParams={editParams}
                sampleID={sample.id}
                disabledButton={sample.parameters.length === 1}
              />
            </div>
          ))}
          {editParams && sample.parameters.length === 1 && (
            <div className="col-xl-12 col-md-12 col-sm-12">
              <UncontrolledAlert color='danger' style={{color: 'white'}}>
                <strong>Muestra </strong> debe tener al menos un parametro
              </UncontrolledAlert>
            </div>
          )}
        </div>

        {otherProps.className 
          && otherProps.className === 'modal-dialog-scrollable' 
          && editParams && (
          <React.Fragment>
            <h5 className="mt-2">Agregar Parametros</h5>
            <Params 
              sampleID={sample.id}
              actualParams={sample.parameters}
            />
          </React.Fragment>
          )
        }

        </ModalBody>
        <ModalFooter>
          {!sample.completed && (
            <Button 
                color="danger"
                onClick={() => setEditParams(!editParams)}
              >
              {editParams ? 'Cerrar edición' : 'Editar muestra'}
            </Button>
          )}
          <Button 
            disabled={sample.completed}
            color="primary"
            onClick={() => toggleCompletedMutation()}
          >
          {loading ? (
            <React.Fragment>
              <span 
                role="status" 
                className="mr-2 mb-1 spinner-border spinner-border-sm" 
                aria-hidden="true" />
              Procesando...
            </React.Fragment>
          ) : sample.completed ? "Muestra procesada" : "Procesar muestra"}
          </Button>
        </ModalFooter>
      </Modal> 
    </React.Fragment>
  );
}

export default UIModal;