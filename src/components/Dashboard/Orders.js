import React from 'react';
import { Card, CardBody, Table, Button } from 'reactstrap';

const Orders = () => (
  <Card>
    <CardBody className="pb-0">
      <Button className="float-right" size={'sm'} color="primary">Export</Button>

      <h5 className="card-title mt-0 mb-0 header-title">Facturas Recientes</h5>

      <Table hover responsive className="mt-4">
        <thead>
          <tr>
            <th scope="col">Orden #</th>
            <th scope="col">Cliente</th>
            <th scope="col">Contácto</th>
            <th scope="col">Valor</th>
            <th scope="col">Estatus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#98754</td>
            <td>Lacthosa Centro</td>
            <td>Otto B</td>
            <td>$79.49</td>
            <td>
              <span className="badge badge-soft-warning py-1">Pendiente</span>
            </td>
          </tr>
          <tr>
            <td>#98753</td>
            <td>Empacadora San Lorenzo</td>
            <td>Mark P</td>
            <td>$125.49</td>
            <td>
              <span className="badge badge-soft-success py-1">Realizado</span>
            </td>
          </tr>
          <tr>
            <td>#98752</td>
            <td>Alimentos Maravilla</td>
            <td>Dave B</td>
            <td>$35.49</td>
            <td>
              <span className="badge badge-soft-danger py-1">Vencido</span>
            </td>
          </tr>
          <tr>
            <td>#98751</td>
            <td>Hortifruti</td>
            <td>Shreyu N</td>
            <td>$49.49</td>
            <td>
              <span className="badge badge-soft-success py-1">Realizado</span>
            </td>
          </tr>
          <tr>
            <td>#98750</td>
            <td>Walmart</td>
            <td>Rik N</td>
            <td>$69.49</td>
            <td>
              <span className="badge badge-soft-danger py-1">Vencido</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default Orders;
