import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { added: false };
    this.addData = this.addData.bind(this);
  }

  addData() {
    this.setState({ added: true });
  }

  render() {
    return (
      <div>
        <Header addData={ this.addData }></Header>
        <div className="wrapper">
          <h2>My Pillbox</h2>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Medication</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Next Dosage</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.added && <NewData/>}
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>3:00pm</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>6:00pm</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Marvelon</Table.Cell>
                <Table.Cell>0.15mg</Table.Cell>
                <Table.Cell>8:30pm</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bacopa Monnieri</Table.Cell>
                <Table.Cell>300mg</Table.Cell>
                <Table.Cell>12:00pm</Table.Cell>
                <Table.Cell positive>
                  <Icon name='checkmark' />
                  Taken On Time
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Marvelon</Table.Cell>
                <Table.Cell>0.15mg</Table.Cell>
                <Table.Cell>11:30am</Table.Cell>
                <Table.Cell positive>
                  <Icon name='checkmark' />
                  Taken On Time
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>10:00am</Table.Cell>
                <Table.Cell positive>
                  <Icon name='checkmark' />
                  Taken On Time
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>9:30am</Table.Cell>
                <Table.Cell warning>
                  <Icon name='attention' />
                  Taken 2 hours late
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bacopa Monnieri</Table.Cell>
                <Table.Cell>300mg</Table.Cell>
                <Table.Cell>7:00am</Table.Cell>
                <Table.Cell error>
                  <Icon name='close' />
                  Skipped
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

class NewData extends React.Component {
  render() {
    return (
        <Table.Row className="new">
          <Table.Cell>Tylenol</Table.Cell>
          <Table.Cell>500mg</Table.Cell>
          <Table.Cell>2:00pm</Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
    );
  }
}

export default App;
