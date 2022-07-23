import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    description: '',
    amount: '',
    input: '',
    output: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createTask(this.state.description, this.state.amount, this.state.input.split(',').map(Number), this.state.output.split(',').map(Number))
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Task</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Amount</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.amount}
              onChange={event =>
                this.setState({ amount: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Input (Cases separated by ',')</label>
            <Input
              value={this.state.input}
              onChange={event =>
                this.setState({ input: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Output (Cases separated by ',')</label>
            <Input
              value={this.state.output}
              onChange={event =>
                this.setState({ output: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Post Task
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
