import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { Tag } from "./monitorings/tag"
import { FaTimes, FaPlus } from "react-icons/fa"
import { removeDash } from '../utils/removeDash'
import {
  ALL_MONITORINGS,
  ALL_PARAMETERS, 
  ALL_PARAMETERS_FOR_SAMPLE,
} from "./operations/queries"
import { 
  REMOVE_PARAMETER, 
  ADD_PARAMETER 
} from './operations/mutations'
import Filters from "./filters"

const Wrapper = styled.div`
  background: white;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  height: 100%;
  height: 80vh;
  border-radius: 8px;
  &.fadeUp-appear {
    opacity: 0;
  }
  &.fadeUp-enter {
    opacity: 0;
  }
  &.fadeUp-enter-done {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  &.fadeUp-exit {
    opacity: 1;
  }
  &.fadeUp-exit-active {
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`

const Header = styled.header`
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  h3,
  p {
    margin: 0;
  }
`

const Body = styled.div`
  padding: 20px;
  overflow: hidden;
  overflow-y: scroll;
  .sample-info{
    margin-bottom: 20px;
    h4 {
      margin-bottom: 4px;
    }
    p{
      font-size: 14px;
      margin: 0;
    }
  }
`

const ParamsWrapper = styled.div`
  margin-bottom: 30px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  .header{
    border-bottom: 1px solid var(--border-color);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      margin: 0;
      font-size: 14px;
    }
  }
  .body{
    padding: 20px;
  }
`

const ParameterWrapper = styled.div`
  background: #f4f6fa;
  color: #9198ac;
  background: ${({addParam}) => addParam ? 'var(--green-rgba)' : 'var(--red-rgba)'  };
    color: ${({addParam}) => addParam ? 'var(--green)' : 'var(--red)'};
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding-right: 0.7em;
  margin: 0 1% 0.5em 0;
  transition: all 0.3s ease;
  button{
    background: ${({addParam}) => addParam ? 'var(--green-rgba)' : 'var(--red-rgba)'  };
    color: ${({addParam}) => addParam ? 'var(--green)' : 'var(--red)'};
    border-radius: 4px 0 0 4px;
    display: inline-flex;
    font-size: 10px;
    margin-right: 0.6em;
    padding: 0.8em 0.7em 0.7em 0.7em;
    cursor: pointer;
    &:hover {
      background: ${({addParam}) => addParam ? 'rgba(56, 195, 163, 0.35);' : 'rgba(206, 38, 51, 0.3);'  };
    }
  }
`



const Parameter = ({sampleID, addParam, ...parameter}) => {
  const [addParameterMutation, { loading }] = useMutation(ADD_PARAMETER, {
    variables: { parameterID: parameter.id, sampleID },
    refetchQueries: [
      {
        query: ALL_PARAMETERS_FOR_SAMPLE,
        variables: { sampleID },
      },
      {
        query: ALL_MONITORINGS
      }
    ],
    awaitRefetchQueries: true,
  })
  const [removeParameterMutation, { loading: loadingRemoveMutation }] = useMutation(REMOVE_PARAMETER, {
    variables: { parameterID: parameter.id, sampleID },
    refetchQueries: [
      {
        query: ALL_PARAMETERS_FOR_SAMPLE,
        variables: { sampleID },
      },
      {
        query: ALL_MONITORINGS,
      },
    ],
    awaitRefetchQueries: true,
  })
  return(
    <ParameterWrapper
      addParam={addParam}
    >
    { addParam 
      ? (
        <React.Fragment>
          <button onClick={() => addParameterMutation()} disbled={loading}>
            { addParam ? <FaPlus /> : <FaTimes />}
          </button>
          { loading ? 'Agregando...' : parameter.name}
        </React.Fragment>
        ) 
      : (
        <React.Fragment>
          <button onClick={() => removeParameterMutation()} disabled={loadingRemoveMutation}>
            { addParam ? <FaPlus /> : <FaTimes />}
          </button>
          { loadingRemoveMutation ? 'Eliminando...' : parameter.name}
        </React.Fragment>
        )
    }
    </ParameterWrapper>
  )
}

const ParameterList = ({sampleID}) => {
  const {loading, error, data} = useQuery(ALL_PARAMETERS_FOR_SAMPLE, {variables: { sampleID }})

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  return(
    <React.Fragment>
      <CurrentParams 
        parameters={data.sample.parameters}
        sampleID={sampleID}
      />
      <FilteredParams 
        sampleID={sampleID}
        currentParameters={data.sample.parameters}
      />
    </React.Fragment>
  )
}

const CurrentParams = ({parameters, sampleID}) => {

  return (
    <ParamsWrapper>
      <div className="header">
        <p>Parametros actuales</p>
      </div>
      <div className="body">
        {parameters.map(parameter => (
          <Parameter 
            key={parameter.id} 
            sampleID={sampleID}
            {...parameter}
          />
        ))}
      </div>
    </ParamsWrapper> 
  )
}



const FilteredParams = ({ sampleID, currentParameters }) => {
  const [ state, setState ] = useState({
    filter: "indicadores"
  })

  const filterResults = filter => {
    setState({
      ...state,
      filter: filter,
    })
  }

  const { loading, error, data } = useQuery(ALL_PARAMETERS);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.error(error)
    return <div>Error!</div>
  }

  let filteredParameters = data.parameters.filter(
    parameter =>
      !currentParameters.find(
        currentParameter => currentParameter.id === parameter.id
      )
  )

  let parameters = filteredParameters

  if(state.filter === "indicadores"){
    parameters = filteredParameters.filter(
      parameter => parameter.parameterType === "Indicador"
    )
  }else if (state.filter === "patogenos"){
    parameters = filteredParameters.filter(
      parameter => parameter.parameterType === "Patogeno"
    )
  }else {
    parameters = filteredParameters.filter(
      parameter => parameter.parameterType === "Micotoxina"
    )
  }

  const parameterList = []
  parameters.forEach((parameter) => {
    parameterList.push(
      <Parameter 
        key={parameter.id} 
        sampleID={sampleID}
        addParam={true}
        {...parameter}
      />
    )
  })

  return (
    <ParamsWrapper>
      <div className="header">
        <p>Agregar parametro</p>
        <Filters 
          currentFilter={state.filter}
          filterResultsFn={filterResults}
        />
      </div>
      <div className="body">
        {parameterList}
      </div>
    </ParamsWrapper>
  )
}

export const Gator = ({ 
  in: inProp, 
  stopProp, 
  sample,
  company,
  correlative,
}) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={{
        appear: 100,
        enter: 0,
        exit: 300,
      }}
      classNames="fadeUp"
      appear
      unmountOnExit
    >
      <Wrapper onClick={stopProp}>
        <Header>
          <h3>{company}</h3>
          <Tag className="correlative">{correlative}</Tag>
        </Header>
        <Body>
          <div className="sample-info">
            <h4>{sample.name}</h4>
            <p>{removeDash(sample.sampleType)}</p>
          </div>
          <ParameterList sampleID={sample.id}/>
        </Body>
      </Wrapper>
    </CSSTransition>
  )
}


