import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Calendar, Col, Row } from '../../lib';
import { state, signal } from 'cerebral/tags';

const CalendarDemo = ({ locale, calendar, calendarChanged, calendarNavigate }) => (
  <div>
    <Example
      code={`
import { Calendar } from 'material-components';
        `}
    />
    <p>
      The locale will default to <code>en</code>, to use any other locale you must ensure that you have first{' '}
      <a href="http://momentjs.com/docs/#/i18n/loading-into-browser/">loaded the locale</a> into moment.js.
    </p>
    <Example
      code={`
// Non interactive calendar of the current month
<Calendar locale={locale}/>

// Non interactive calendar of given month
<Calendar locale={locale} titleFormat="MMM" year={2010} month={0} value={new Date(2010, 0, 5)}/>
        `}
    />
    <Row>
      <Col type="sm-6">
        <Calendar locale={locale} className="paper1" style={{ margin: '24px auto', padding: '12px' }} />
      </Col>
      <Col type="sm-6">
        <Calendar
          locale={locale}
          titleFormat="MMM"
          year={2010}
          month={0}
          value={new Date(2010, 0, 5)}
          className="paper1"
          style={{ margin: '24px auto', padding: '12px' }}
        />
      </Col>
    </Row>
    <Example
      code={`
// Interactive calendar
<Calendar
  locale={locale}
  year={year}
  month={month}
  value={selectedDate}
  onChange={setDate}
  onNavigate={updateCalendar}/>
        `}
    />
    <Calendar
      locale={locale}
      year={calendar.calendar.year}
      month={calendar.calendar.month}
      value={calendar.selectedDate}
      onChange={e => calendarChanged({ value: e.target.value })}
      onNavigate={e => calendarNavigate({ value: e.target.value })}
      className="paper1"
      style={{ margin: '24px auto', padding: '12px' }}
    />
  </div>
);

export default connect(
  {
    locale: state`locale`,
    calendar: state`demos.calendar`,
    calendarChanged: signal`calendarChanged`,
    calendarNavigate: signal`calendarNavigate`
  },
  CalendarDemo
);
