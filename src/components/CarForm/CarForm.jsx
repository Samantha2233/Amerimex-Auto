import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './CarForm.scss';

class CarForm extends Component {
  state = {
    formData: {
      purchaseDate: '',
      purchaseDescription: '',
      vehicleCost: '',
      regAndTax: '',
      repairAndInitExpense: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.handleCarSubmission(this.state.formData);
    // Clear form if successful 
    // this.setState(state => ({
    //   formData: { name: '', email: '' }
    // }))
  };

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData
    });
  }

  render() {
    return (
      <div>
        <Form id='car-form' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              value={this.state.formData.purchaseDate}
              onChange={this.handleChange}
              type='date'
              name='purchaseDate'
              id='purchaseDate'
              placeholder='Purchase Date'
              required
            />
            <Input
              value={this.state.formData.purchaseDescription}
              onChange={this.handleChange}
              type='text'
              name='purchaseDescription'
              id='purchaseDescription'
              placeholder='Eg. Toyota Sequoia 2003 Silver 6384'
              required
            />
            <Input
              value={this.state.formData.vehicleCost}
              onChange={this.handleChange}
              type='number'
              name='vehicleCost'
              id='vehicleCost'
              placeholder='Vehicle Cost'
              required
            />
            <Input
              value={this.state.formData.regAndTax}
              onChange={this.handleChange}
              type='number'
              name='regAndTax'
              id='regAndTax'
              placeholder='Registration & Tax'
              required
            />
            <Input
              value={this.state.formData.repairAndInitExpense}
              onChange={this.handleChange}
              type='number'
              name='repairAndInitExpense'
              id='repairAndInitExpense'
              placeholder='Repair and Init Expense'
              required
            />
          </FormGroup>
          <Button type='submit'>Add Car</Button>
        </Form>
      </div>
    )
  }
}

export default CarForm;