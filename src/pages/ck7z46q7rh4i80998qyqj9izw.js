import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const SINGLE_MONITORING = gql`
  query {
    monitoring(where: { id: "ck7z46q7rh4i80998qyqj9izw" }) {
      status
      company {
        name
      }
      samplingDate
      samples {
        id
        name
        sampleType
        parameters {
          id
          name
          parameterType
          testType
        }
      }
    }
  }
`

const ItemPage = () => {
  const { loading, error, data } = useQuery(SINGLE_MONITORING)
  return (
    <Layout>
      <SEO title="Page two" />
      <p>Now go build something great.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <span>{data.monitoring.status}</span>
          <h3>{data.monitoring.company.name}</h3>
          <p>{data.monitoring.samplingDate}</p>
          {data.monitoring.samples.map(
            ({ sampleType, name, id, parameters }) => (
              <div
                key={id}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                  backgroundColor: "rgba(0,0,0,0.09)",
                  marginBottom: "15px",
                  padding: "20px",
                }}
              >
                <p>
                  Muestra: <span>{name}</span> <span>({sampleType})</span>
                </p>
                {parameters.map(({ id, name, parameterType, testType }) => (
                  <div
                    key={id}
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "rgba(0,0,0,0.2)",
                      marginBottom: "10px",
                      padding: "10px",
                    }}
                  >
                    <p>
                      Nombre: <span>{name}</span> <span>({parameterType})</span>
                    </p>
                    <p>Metodo: {testType}</p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      )}
      {error && <p>Error: ${error.message}</p>}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ItemPage
