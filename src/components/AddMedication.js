import React from 'react';
import Header from './Header';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class AddMedication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      date: null
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused, date } = this.state;

    return (
      <div>
        <Header></Header>
        <Form>
          <Form.Field>
            <label>Medication Name</label>
            <input placeholder="Proctoglyvenol"/>
          </Form.Field>
          <Form.Field>
            <label>Medication Name</label>
            <input placeholder="Proctoglyvenol"/>
          </Form.Field>
          <SingleDatePicker
            {...this.props}
            id="date_input"
            date={date}
            focused={focused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
          />
        </Form>
      </div>
    );
  }
}

export default AddMedication;
