import gql from "graphql-tag"

// Update Monitoring status
export const UPDATE_MONITORING_STATE = gql`
  mutation toggleState($id: ID!) {
    updateMonitoring(where: { id: $id }, data: { completed: true }) {
      status
    }
  }
`

// Update Sample status
export const UPDATE_SAMPLE_STATE = gql`
  mutation toggleSampleState($id: ID!) {
    updateSample(where: { id: $id }, data: { completed: true }) {
      status
    }
  }
`

// Add parameter to a single sample
export const ADD_PARAMETER = gql`
  mutation addParameter($sampleID: ID!, $parameterID: ID!) {
    updateSample(
      where: { id: $sampleID }
      data: { parameters: { connect: { id: $parameterID } } }
    ) {
      parameters {
        name
      }
    }
  }
`

// Remove parameter from a single sample
export const REMOVE_PARAMETER = gql`
  mutation removeParameter($sampleID: ID!, $parameterID: ID!) {
    updateSample(
      where: { id: $sampleID }
      data: { parameters: { disconnect: { id: $parameterID } } }
    ) {
      parameters {
        name
      }
    }
  }
`
