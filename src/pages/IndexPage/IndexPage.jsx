
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import moment from 'moment';
import './IndexPage.scss';

import SearchField from '../../components/SearchField/SearchField';

class IndexPage extends Component {
  render() {
    return (
      <div id='index-page'>
        <SearchField
          handleSearch={this.props.handleSearch}
          placeholder='search cars'
        />
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
                  <tr key={car._id} onClick={() => this.props.history.push(`${this.props.match.url}/${car._id}`)}>
                    <th scope='row'>{car._id}</th>
                    <td>{moment(car.purchaseDate).format("MMM DD YYYY")}</td>
                    <td>{car.purchaseDescription}</td>
                    <td>${car.vehicleCost}</td>
                    <td>${car.regAndTax}</td>
                    <td>${car.repairAndInitExpense}</td>
                    <td>${car.vehicleCost + car.regAndTax + car.repairAndInitExpense}</td>
                    <td onClick={this.props.toggleCarForm}><i class="fas fa-pencil-alt"></i></td>
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

export default withRouter(IndexPage);