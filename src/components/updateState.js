import React from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import { ALL_MONITORING } from "./operations/queries"
import { TOGGLE_STATE } from "./operations/mutations"

const UpdateState = ({ id, completed }) => {
  const [toggleCompletedMutation, { loading }] = useMutation(TOGGLE_STATE, {
    variables: { id: id, completed: !completed },
    refetchQueries: [{ query: ALL_MONITORING }],
    awaitRefetchQueries: true,
  })
  return <button onClick={() => toggleCompletedMutation()}>Update</button>
}

export default UpdateState
