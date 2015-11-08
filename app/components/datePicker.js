import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';
import { Button, DatePicker } from '../../lib';

@State({
  datePicker: ['demos', 'datePicker']
})
export default class DatePickerDemo extends Component {

  static displayName = 'DatePicker';

  static propTypes = {
    signals: PropTypes.object,
    datePicker: PropTypes.object
  };

  render() {
    const {
      signals,
      datePicker
    } = this.props;

    return (
      <div>
        <Example code={`
import { DatePicker } from 'material-components';
        `}/>
        <Example code={`
<DatePicker
  isOpen={showDatePicker}
  year={year}
  month={month}
  pickingValue={pickingDate}
  onChange={onChange}
  onNavigate={onNavigate}
  onOk={onOk}
  onCancel={onCancel}/>
        `}/>
        <Button primary onTouchTap={e => signals.datePickerOpened({ value: datePicker.pickedDate })}>Pick Date</Button>
        Picked Date: {datePicker.pickedDate ? datePicker.pickedDate.toDateString() : 'none'}
        <DatePicker
          isOpen={datePicker.showDatePicker}
          year={datePicker.pickedCalendar.year}
          month={datePicker.pickedCalendar.month}
          pickingValue={datePicker.pickingDate}
          onChange={e => signals.datePickerChanged({ value: e.target.value })}
          onNavigate={e => signals.datePickerNavigate({ value: e.target.value })}
          onOk={e => signals.datePickerSelected({ value: e.target.value })}
          onCancel={e => signals.datePickerCanceled()}/>
      </div>
    );
  }
}
