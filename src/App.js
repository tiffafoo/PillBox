import React from 'react';
import { Table } from 'semantic-ui-react';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="wrapper">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Medication</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Next Dosage</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
