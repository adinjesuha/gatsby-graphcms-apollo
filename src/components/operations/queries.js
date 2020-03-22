import gql from "graphql-tag"

// Query all Monitorings
export const ALL_MONITORINGS = gql`
  query {
    monitorings {
      id
      completed
      correlative
      company {
        name
      }
      samples {
        id
        name
        sampleType
        parameters(orderBy: parameterType_ASC) {
          id
          name
          parameterType
        }
      }
    }
  }
`

// All parameters
export const ALL_PARAMETERS = gql`
  query {
    parameters {
      id
      name
      testType
    }
  }
`

// Query a Single Monitoring
export const SINGLE_MONITORING = gql`
  query singleMonitoring($id: ID!) {
    monitoring(where: { id: $id }) {
      id
      completed
      correlative
      company {
        name
      }
    }
  }
`

// All samples for one Monitoring
export const ALL_SAMPLES_FOR_MONITORING = gql`
  query allSampleForMonitoring($monitoringID: ID!) {
    samples(where: { monitoring: { id: $monitoringID } }) {
      id
      name
      monitoring {
        id
      }
      parameters {
        id
        name
        testType
      }
    }
  }
`

export const ALL_PARAMETERS_FOR_SAMPLE = gql`
  query allPrametersForSample($sampleID: ID!) {
    parameters(where: { sample: { id: $sampleID } }) {
      id
      name
      testType
    }
  }
`
