import gql from "graphql-tag"

// Update Monitoring status
export const TOGGLE_STATE = gql`
  mutation toggleState($id: ID!, $completed: Boolean) {
    updateMonitoring(where: { id: $id }, data: { completed: $completed }) {
      status
    }
  }
`
