import React, { useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import ProjectStats from '../../components/ProjectDetails/Stats';
import About from '../../components/ProjectDetails/About';
import Activities from '../../components/ProjectDetails/Activities';

const analysisData=[
  {
    sampleName: 'Pizza Congelada',
    sampleType: 'Alimento',
    parameters: [
      { id: 1, parameter: 'E. coli', results: 'valor', username: 'valor' },
      { id: 2, parameter: 'Coliformes totales', results: 'valor', username: 'valor' },
      { id: 3, parameter: 'Mohos y Levaduras', results: 'valor', username: 'valor' },
      { id: 4, parameter: 'Salmonella spp.', results: 'valor', username: 'valor' },
      { id: 5, parameter: 'Listeria Monocytogenes', results: 'valor', username: 'valor' },
    ]
  },
  {
    sampleName: 'Jugo de Naranja',
    sampleType: 'Materia Prima',
    parameters: [
      { id: 1, parameter: 'E. coli', results: 'valor', username: 'valor' },
      { id: 2, parameter: 'Coliformes totales', results: 'valor', username: 'valor' },
      { id: 3, parameter: 'Coliformes fecales', results: 'valor', username: 'valor' },
      { id: 4, parameter: 'Enterobacterias', results: 'valor', username: 'valor' },
      { id: 5, parameter: 'Bacterias Lácticas', results: 'valor', username: 'valor' },
      { id: 6, parameter: 'Listeria monocytogenes', results: 'valor', username: 'valor' },
      { id: 7, parameter: 'E. coli O157:H7', results: 'valor', username: 'valor' },
    ]
  },
]


const Analysis = () => {

  const [ data, setData ] = useState({
    reportNumber: '001-01-2020',
    client: 'Lacthosa Centro',
  })
  return (
    <Layout>
      <SEO title="Calendario" />
      <Row className="page-title">
        <Col sm={8} xl={6}>
          <h4 className="mb-1 mt-0">{`Informe No. ${data.reportNumber}`}</h4>
        </Col>
        <Col sm={4} xl={6} className="text-md-right">
          <div className="btn-group ml-2 d-none d-sm-inline-block">
            <button type="button" className="btn btn-soft-primary btn-md">Edit</button>
          </div>
          <div className="btn-group ml-1 d-none d-sm-inline-block">
            <button type="button" className="btn btn-soft-danger btn-md">Delete</button>
          </div>
        </Col>
      </Row>

      <ProjectStats {...data} />

      <Row>
        <Col xl={8}>

          {analysisData.map((sample, i) => (
            <About key={i} {...sample}/>
          ))}

        </Col>
        <Col xl={4}>
          <Card>
            <CardBody>
              <Activities />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Analysis;