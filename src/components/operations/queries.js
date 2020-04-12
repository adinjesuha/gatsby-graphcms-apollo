import gql from "graphql-tag"

// All Monitorings
export const ALL_MONITORINGS = gql`
  query {
    monitorings {
      id
      completed
      correlative
      samplingDate
      company {
        name
      }
      samples {
        id
        name
        sampleType
        completed
        parameters(orderBy: parameterType_ASC) {
          id
          name
          parameterType
          testType
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
      parameterType
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

// All parameters for one sample
export const ALL_PARAMETERS_FOR_SAMPLE = gql`
  query allPrametersForSample($sampleID: ID!) {
    sample(where: { id: $sampleID }) {
      parameters{
        id
        name
        testType
        parameterType
      }
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