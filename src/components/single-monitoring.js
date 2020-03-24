import React, { Fragment } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"

import {
  ALL_MONITORINGS,
  SINGLE_MONITORING,
  ALL_PARAMETERS,
  ALL_SAMPLES_FOR_MONITORING,
} from "../components/operations/queries"

import {
  ADD_PARAMETER,
  REMOVE_PARAMETER,
} from "../components/operations/mutations"

const Parameter = ({ sampleId, parameter, monitoringID, ...otherProps }) => {
  const [addParameterMutation, { loading }] = useMutation(ADD_PARAMETER, {
    variables: { parameterID: parameter.id, sampleID: sampleId },
    refetchQueries: [
      {
        query: ALL_SAMPLES_FOR_MONITORING,
        variables: { monitoringID },
      },
      {
        query: ALL_MONITORINGS,
      },
    ],
    awaitRefetchQueries: true,
  })
  const [
    removeParameterMutation,
    { loading: loadingRemoveMutation },
  ] = useMutation(REMOVE_PARAMETER, {
    variables: { parameterID: parameter.id, sampleID: sampleId },
    refetchQueries: [
      {
        query: ALL_SAMPLES_FOR_MONITORING,
        variables: { monitoringID },
      },
      {
        query: ALL_MONITORINGS,
      },
    ],
    awaitRefetchQueries: true,
  })

  return (
    <li>
      {parameter.name} |{" "}
      <span style={{ marginRight: "10px" }}>Prueba {parameter.testType}</span>
      {otherProps.currents ? (
        <button
          disabled={loadingRemoveMutation}
          className={`danger ${loadingRemoveMutation ? "loading" : ""}`}
          onClick={() => removeParameterMutation()}
        >
          -
        </button>
      ) : (
        <button
          disabled={loading}
          className={`primary ${loading ? "loading" : ""}`}
          onClick={() => addParameterMutation()}
        >
          +
        </button>
      )}
    </li>
  )
}

const Parameters = ({ sampleId, currentParameters, monitoringID }) => {
  const { loading, error, data } = useQuery(ALL_PARAMETERS)

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

  return (
    <div style={{ marginTop: "30px" }}>
      <h4>Parametros actuales</h4>
      <ul>
        {currentParameters.map(currentParameter => (
          <Parameter
            currents
            key={currentParameter.id}
            sampleId={sampleId}
            parameter={currentParameter}
            monitoringID={monitoringID}
          />
        ))}
      </ul>
      <h4>Parametros para agregar</h4>
      {filteredParameters.length > 0 ? (
        <ul>
          {filteredParameters.map(parameter => (
            <Parameter
              key={parameter.id}
              sampleId={sampleId}
              parameter={parameter}
              monitoringID={monitoringID}
            />
          ))}
        </ul>
      ) : (
        <p>No hay parametros para agregar</p>
      )}
    </div>
  )
}

const Sample = ({ monitoringID }) => {
  const { loading, error, data } = useQuery(ALL_SAMPLES_FOR_MONITORING, {
    variables: { monitoringID },
  })

  if (loading) return <p>Loading...</p>

  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  return (
    <div>
      {data.samples.map(({ id, name, parameters }) => (
        <div
          key={id}
          style={{
            marginBottom: "40px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <h4>Muestra: {name}</h4>
          <Parameters
            monitoringID={monitoringID}
            sampleId={id}
            currentParameters={parameters}
          />
        </div>
      ))}
    </div>
  )
}

export const SingleMonitoring = ({ id }) => {
  console.log(id)
  const { loading, error, data } = useQuery(SINGLE_MONITORING, {
    variables: { id },
  })
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  return (
    <Fragment>
      <h1>{data.monitoring.company.name}</h1>
      <Sample monitoringID={data.monitoring.id} />
    </Fragment>
  )
}
