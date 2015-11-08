import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';
import { Calendar, Col, Row } from '../../lib';

@State({
  calendar: ['demos', 'calendar']
})
export default class CalendarDemo extends Component {

  static displayName = 'Calendar';

  static propTypes = {
    signals: PropTypes.object,
    calendar: PropTypes.object
  };

  render() {
    const {
      signals,
      calendar
    } = this.props;

    return (
      <div>
        <Example code={`
import { Calendar } from 'material-components';
        `}/>
        <p>
          The <code>Calendar</code> component uses the internationalisation from moment.js, to change the
          locale settings <a href="http://momentjs.com/docs/#/i18n/">configure moment</a> with your
          desired locale.
        </p>
        <Example code={`
// Non interactive calendar of the current month
<Calendar/>

// Non interactive calendar of given month
<Calendar titleFormat="MMM" year={2010} month={0} value={new Date(2010, 0, 5)}/>
        `}/>
        <Row>
          <Col type="sm-6">
            <Calendar className="paper1" style={{ margin: '24px auto', padding: '12px' }}/>
          </Col>
          <Col type="sm-6">
            <Calendar titleFormat="MMM" year={2010} month={0} value={new Date(2010, 0, 5)} className="paper1" style={{ margin: '24px auto', padding: '12px' }}/>
          </Col>
        </Row>
        <Example code={`
// Interactive calendar
<Calendar
  year={year}
  month={month}
  value={selectedDate}
  onChange={setDate}
  onNavigate={updateCalendar}/>
        `}/>
        <Calendar
          year={calendar.calendar.year}
          month={calendar.calendar.month}
          value={calendar.selectedDate}
          onChange={e => signals.calendarChanged({ value: e.target.value })}
          onNavigate={e => signals.calendarNavigate({ value: e.target.value })}
          className="paper1"
          style={{ margin: '24px auto', padding: '12px' }}/>
      </div>
    );
  }
}
