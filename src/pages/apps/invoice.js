import React from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';

// import logo from '../../assets/images/logo.png';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

const Invoice = () => {
  const invoiceDetail = {
    customer: 'Lacthosa Centro',
    notes: 'All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above',
    invoice_date: 'Abril 26, 2020',
    due_date: 'Mayo 20, 2020',
    invoice_id: '100-04-01',
    address: {
      line_1: 'Edificio Santa Bárbara 726. 3 Ave, 7 y 8 Calles, frente a La Policlínica',
      city: 'Tegucigalpa',
      state: 'Fco. Morazan',
      zip: 504,
      phone: '(504) 2238-0872',
    },
    billing_address: {
      line_1: 'Anillo Periferico',
      city: 'Tegucigalpa',
      state: 'Fco. Morazan',
      zip: 504,
      phone: '(504) 456-7890',
    },
    items: [
      {
        id: 1,
        name: 'Análisis de Indicadores',
        description: 'Coliformes totales',
        qty: 2,
        unit_cost: 'L. 230.00',
        total: 'L. 460.00',
      },
      {
        id: 2,
        name: 'Análisis de Patogenos',
        description: "Salmonella spp.",
        qty: 1,
        unit_cost: 'L. 560.00',
        total: 'L. 560.00',
      },
    ],
    sub_total: 'L. 1020.00',
    discount: 'L. 0.00',
    total: 'L. 1020.00',
  };
  return (
    <Layout>
      <SEO title="Dashboard" />
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="clearfix">
                <div className="float-sm-right">
                  {/*<img src={logo} alt="" height="48" />*/}
                  <h4 className="m-0 d-inline align-middle">AgroBioTek Laboratorios</h4>
                  <address className="pl-2 mt-2">
                    {invoiceDetail.address.line_1}<br />
                    {invoiceDetail.address.city}, {invoiceDetail.address.state} {invoiceDetail.address.zip}<br />
                    <abbr title="Phone">P:</abbr> {invoiceDetail.address.phone}
                  </address>
                </div>
                <div className="float-sm-left">
                  <h4 className="m-0 d-print-none">Factura</h4>
                  <dl className="row mb-2 mt-3">
                    <dt className="col-sm-3 font-weight-normal">Factura número:</dt>
                    <dd className="col-sm-9 font-weight-normal">020-04-20</dd>

                    <dt className="col-sm-3 font-weight-normal">Fecha de factura :</dt>
                    <dd className="col-sm-9 font-weight-normal">Abril 26, 2020</dd>

                    <dt className="col-sm-3 font-weight-normal">Feacha de vencimiento :</dt>
                    <dd className="col-sm-9 font-weight-normal">Mayo 20, 2020</dd>
                  </dl>
                </div>
              </div>
              <Row className="mt-4">
                <Col md={6}>
                  <h6 className="font-weight-normal">A nombre de:</h6>
                  <h6 className="font-size-16">{invoiceDetail.customer}</h6>
                  <address>
                    {invoiceDetail.billing_address.line_1}<br />
                    {invoiceDetail.billing_address.city}, {invoiceDetail.billing_address.state} {invoiceDetail.billing_address.zip}<br />
                    <abbr title="Phone">P:</abbr> {invoiceDetail.billing_address.phone}
                  </address>
                </Col>
                <Col md={6}>
                  <div className="text-md-right">
                    <h6 className="font-weight-normal">Total</h6>
                    <h2>{invoiceDetail.total}</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="table-responsive">
                    <table className="table mt-4 table-centered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th>Q</th>
                          <th>Valor</th>
                          <th className="text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                      {invoiceDetail.items.map((item, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>
                              <h5 className="font-size-16 mt-0 mb-2">{item.name}</h5>
                              <p className="text-muted mb-0">{item.description}</p>
                            </td>
                            <td>{item.qty}</td>
                            <td>{item.unit_cost}</td>
                            <td className="text-right">{item.total}</td>
                          </tr>
                        );
                      })}
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <div className="clearfix pt-5">
                    <h6 className="text-muted">Notas:</h6>

                    <small className="text-muted">
                      {invoiceDetail.notes}
                    </small>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="float-right mt-4">
                    <p>
                      <span className="font-weight-medium">Sub-total:</span>
                      <span className="float-right">{invoiceDetail.sub_total}</span>
                    </p>
                    <p>
                      <span className="font-weight-medium">Descuento (10%):</span> 
                      <span className="float-right"> &nbsp;&nbsp;&nbsp; {invoiceDetail.discount}</span>
                    </p>
                    <h3>{invoiceDetail.total}</h3>
                  </div>
                  <div className="clearfix"></div>
                </Col>
              </Row>
              <div className="mt-5 mb-1">
                <div className="text-right d-print-none">
                  <Button color="primary" onClick={e => {window.print()}}>
                    <i className="uil uil-print mr-1"></i> Print
                  </Button>
                  <a href="/" className="btn btn-info ml-1">Submit</a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Invoice;
