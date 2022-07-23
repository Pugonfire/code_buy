import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      amount: summary[0],
      description: summary[1],
      inputs: summary[2],
      outputs: summary[3],
      complete: summary[4]
    };
  }

  renderCards() {
    const {
      amount,
      description,
      inputs,
      outputs,
      complete
    } = this.props;

    const items = [
      {
        header: amount,
        meta: 'Wei',
        description:
          'How much you will get paid to develop this code block',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: description,
        meta: '',
        description:
          'About the task'
      },
      {
        header: complete ? 'Complete': 'Not Complete',
        meta: '',
        description:
          'Status of the task'
      }
    ];

    for (var i = 0; i < inputs.length; i++) {
      items.push({
        header: "Input: " + inputs[i] + " | Output: " + outputs[i],
        meta: 'Test case ' + (i + 1),
        description: ''
      })
    }

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Task Details</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
