import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const task = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      result = await task.methods.solve().send();

      if (result == 1) {
        Router.replaceRoute(`/tasks/${this.props.address}`);
      } else {
        this.setState({ errorMessage: "Task already completed" });
      }
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Code to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Validate & Submit
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
