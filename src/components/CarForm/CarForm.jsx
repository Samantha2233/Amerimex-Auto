import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader } from 'reactstrap';
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
        <Modal
          isOpen={this.props.carFormIsOpen}
        >
          <ModalHeader>Add a Car</ModalHeader>
          <Form id='car-form' onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label for='purchaseDate' sm={2}>Purchase Date</Label>
              <Col sm={10}>
                <Input
                  value={this.state.formData.purchaseDate}
                  onChange={this.handleChange}
                  type='date'
                  name='purchaseDate'
                  id='purchaseDate'
                  placeholder='Purchase Date'
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row >
              <Label for='purchaseDescription' sm={2}>Purchase Description</Label>
              <Col sm={10}>
                <Input
                  value={this.state.formData.purchaseDescription}
                  onChange={this.handleChange}
                  type='text'
                  name='purchaseDescription'
                  id='purchaseDescription'
                  placeholder='Eg. Toyota Sequoia 2003 Silver 6384'
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='vehicleCost' sm={2}>Vehicle Cost</Label>
              <Col sm={10}>
                <Input
                  value={this.state.formData.vehicleCost}
                  onChange={this.handleChange}
                  type='number'
                  name='vehicleCost'
                  id='vehicleCost'
                  placeholder='Vehicle Cost'
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='regAndTax' sm={2}>Registration & Tax</Label>
              <Col sm={10}>
                <Input
                  value={this.state.formData.regAndTax}
                  onChange={this.handleChange}
                  type='number'
                  name='regAndTax'
                  id='regAndTax'
                  placeholder='Registration & Tax'
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='repairAndInitExpense' sm={2}>Repair & Initial Expenses</Label>
              <Col sm={10}>
                <Input
                  value={this.state.formData.repairAndInitExpense}
                  onChange={this.handleChange}
                  type='number'
                  name='repairAndInitExpense'
                  id='repairAndInitExpense'
                  placeholder='Repair and Init Expense'
                  required
                />
              </Col>
            </FormGroup>
            <Button
              type='submit'
              onClick={this.props.toggleCarForm}
            >Add Car</Button>
            <Button
              onClick={this.props.toggleCarForm}
            >Cancel</Button>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default CarForm;