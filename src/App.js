import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
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
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>3:30pm</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>3:30pm</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Marvelon</Table.Cell>
                <Table.Cell>0.15mg</Table.Cell>
                <Table.Cell>12:30pm</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bacopa Monnieri</Table.Cell>
                <Table.Cell>300mg</Table.Cell>
                <Table.Cell>5:00pm</Table.Cell>
                <Table.Cell positive>
                  <Icon name='checkmark' />
                  Taken On Time
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Marvelon</Table.Cell>
                <Table.Cell>0.15mg</Table.Cell>
                <Table.Cell>12:30pm</Table.Cell>
                <Table.Cell positive>
                  <Icon name='checkmark' />
                  Taken On Time
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>3:30pm</Table.Cell>
                <Table.Cell positive>
                  <Icon name='checkmark' />
                  Taken On Time
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Lyrica</Table.Cell>
                <Table.Cell>100mg</Table.Cell>
                <Table.Cell>3:30pm</Table.Cell>
                <Table.Cell warning>
                  <Icon name='attention' />
                  Taken 2 hours late
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bacopa Monnieri</Table.Cell>
                <Table.Cell>300mg</Table.Cell>
                <Table.Cell>5:00pm</Table.Cell>
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

export default App;
