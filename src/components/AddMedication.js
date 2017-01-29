import React from 'react';
import Header from './Header';
import { Form, Button, Input, Label, Select, Icon, Checkbox } from 'semantic-ui-react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class AddMedication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      date: null,
      schedulingMethod: null
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.clearDate = this.clearDate.bind(this);
    this.setSchedulingMethod = this.setSchedulingMethod.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  clearDate(event) {
    event.preventDefault();
    this.setState({ date: null });
  }

  setSchedulingMethod(event, method) {
    event.preventDefault();
    this.setState({ schedulingMethod: method });
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
            <label>End Date</label>
            <div className="align">
              <SingleDatePicker
                {...this.props}
                id="date_input"
                date={date}
                focused={focused}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange}
              />
              { this.state.date &&
                <Button icon onClick={e => this.clearDate(e)}>
                  <Icon name="delete"/>
                </Button>}
            </div>
          </Form.Field>
          <Form.Field>
            <label>Scheduling Method</label>
            <Button.Group>
              <Button
                active={this.state.schedulingMethod === 'distributed'}
                onClick={e =>this.setSchedulingMethod(e, 'distributed')}>
                Distributed
              </Button>
              <Button.Or />
              <Button
                active={this.state.schedulingMethod === 'interval'}
                onClick={e => this.setSchedulingMethod(e, 'interval')}>
                Interval
              </Button>
            </Button.Group>
          </Form.Field>
          {/* <IntervalSchedule/>
          <DistributedSchedule/> */}
          { this.state.schedulingMethod === 'distributed' ?
            <DistributedSchedule/> :
            this.state.schedulingMethod === 'interval' ?
              <IntervalSchedule/> :
            null
          }
          <Button positive>Submit</Button>
        </Form>
      </div>
    );
  }
}

class DistributedSchedule extends React.Component {
  render() {
    return (
      <Form.Field>
        <label>Distributed Schedule</label>
        <Input labelPosition='right' type='text' placeholder='#'>
          <Label basic>Remind me</Label>
          <input />
          <Select compact options={[
            { key: 'day', text: 'times per day', value: 'day' },
            { key: 'week', text: 'times per week', value: 'week' },
            { key: 'month', text: 'times per month', value: 'month' },
            { key: 'year', text: 'times per year', value: 'year'}
          ]} defaultValue='week' />
        </Input>
      </Form.Field>
    );
  }
}

class IntervalSchedule extends React.Component {
  render() {
    return (
      <Form.Field>
        <label>Interval Schedule</label>
        <div className="align">
          <table className="intervalTable">
            <tbody>
              <tr>
                <td>Mon</td>
                <td>Tue</td>
                <td>Wed</td>
                <td>Thu</td>
                <td>Fri</td>
                <td>Sat</td>
                <td>Sun</td>
              </tr>
              <tr>
                <td><Checkbox value='Monday'/></td>
                <td><Checkbox value='Tuesday'/></td>
                <td><Checkbox value='Wednesday'/></td>
                <td><Checkbox value='Thursday'/></td>
                <td><Checkbox value='Friday'/></td>
                <td><Checkbox value='Saturday'/></td>
                <td><Checkbox value='Sunday'/></td>
              </tr>
            </tbody>
          </table>
          <input type="time" value='test' className='intervalTime'/>
          <Button icon='save' />
          <table className='intervalSaved'></table>
        </div>
      </Form.Field>
    );
  }
}

export default AddMedication;
