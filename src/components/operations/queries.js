import gql from "graphql-tag"

// Query all Monitorings pendings
export const ALL_MONITORING = gql`
  query {
    monitorings {
      id
      completed
      correlative
      company {
        name
      }
      samples {
        name
        sampleType
        parameters {
          id
          name
          parameterType
        }
      }
    }
  }
`

// Query all Monitorings done
export const MONITORING_DONE = gql`
  query {
    monitorings(where: { done: true }) {
      id
      done
      correlative
      company {
        name
      }
      samples {
        name
        sampleType
        parameters {
          id
          name
          parameterType
        }
      }
    }
  }
`
