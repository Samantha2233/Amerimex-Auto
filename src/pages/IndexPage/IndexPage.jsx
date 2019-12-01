
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import './IndexPage.scss';

class IndexPage extends Component {
  state = {
    cars: []
  }

  render() {
    return (
      <div>
        IndexPage Component
        <Table size='sm' striped bordered hover responsive>
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
                  <tr key={car._id}>
                    <th scope='row'>{car._id}</th>
                    <td>{moment(car.purchaseDate).format("MMM DD YYYY")}</td>
                    <td>{car.purchaseDescription}</td>
                    <td>${car.vehicleCost}</td>
                    <td>${car.regAndTax}</td>
                    <td>${car.repairAndInitExpense}</td>
                    <td>${car.vehicleCost + car.regAndTax + car.repairAndInitExpense}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default IndexPage;