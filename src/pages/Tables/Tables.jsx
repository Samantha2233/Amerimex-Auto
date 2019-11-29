import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './Tables.scss';

class Tables extends Component {
  state = {
    cars: []
  }

  render() {
    return (
      <div>
        Tables Component
        <Table size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Purchase Date</th>
              <th>Purchase Description</th>
              <th>Vehicle Cost</th>
              <th>Regist & Tax</th>
              <th>Repair & Init. Exp.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.cars.map((car, idx) => {
                return (
                  <div key={car._id}>
                    <tr>
                      <th scope='row'>{car._id}</th>
                      <td>{car.purchaseDate}</td>
                      <td>{car.purchaseDescription}</td>
                      <td>{car.vehicleCost}</td>
                      <td>{car.regAndTax}</td>
                      <td>{car.repairAndInitExpense}</td>
                      <td>TODO: total</td>
                    </tr>
                  </div>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Tables;