import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Button, DatePicker } from '../../lib';
import { state, signal } from 'cerebral/tags';

const DatePickerDemo = ({
  locale,
  datePicker,
  datePickerOpened,
  datePickerChanged,
  datePickerNavigate,
  datePickerSelected,
  datePickerCanceled
}) => (
  <div>
    <Example
      code={`
import { DatePicker } from 'material-components';
        `}
    />
    <Example
      code={`
<DatePicker
  locale={locale}
  isOpen={showDatePicker}
  year={year}
  month={month}
  pickingValue={pickingDate}
  onChange={onChange}
  onNavigate={onNavigate}
  onOk={onOk}
  onCancel={onCancel}/>
        `}
    />
    <p>
      The locale will default to <code>en</code>, to use any other locale you must ensure that you have first{' '}
      <a href="http://momentjs.com/docs/#/i18n/loading-into-browser/">loaded the locale</a> into moment.js.
    </p>
    <Button primary onClick={e => datePickerOpened({ value: datePicker.pickedDate })}>
      Pick Date
    </Button>
    Picked Date: {datePicker.pickedDate ? datePicker.pickedDate.toDateString() : 'none'}
    <DatePicker
      locale={locale}
      isOpen={datePicker.showDatePicker}
      year={datePicker.pickedCalendar.year}
      month={datePicker.pickedCalendar.month}
      pickingValue={datePicker.pickingDate}
      onChange={e => datePickerChanged({ value: e.target.value })}
      onNavigate={e => datePickerNavigate({ value: e.target.value })}
      onOk={e => datePickerSelected({ value: e.target.value })}
      onCancel={e => datePickerCanceled()}
    />
  </div>
);

export default connect(
  {
    locale: state`locale`,
    datePicker: state`demos.datePicker`,
    datePickerOpened: signal`datePickerOpened`,
    datePickerChanged: signal`datePickerChanged`,
    datePickerNavigate: signal`datePickerNavigate`,
    datePickerSelected: signal`datePickerSelected`,
    datePickerCanceled: signal`datePickerCanceled`
  },
  DatePickerDemo
);
