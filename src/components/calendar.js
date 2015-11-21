import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Waves from './helpers/waves';
import moment from 'moment';

function getMoment (date, locale) {
  let value = moment(date);
  value.locale(locale);
  return value;
}

export default class Calendar extends Component {

  static displayName = 'Calendar';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    className: PropTypes.string,
    locale: PropTypes.string,
    month: PropTypes.number,
    onChange: PropTypes.func,
    onNavigate: PropTypes.func,
    style: PropTypes.object,
    titleFormat: PropTypes.string,
    validDays: PropTypes.array,
    value: PropTypes.any,
    year: PropTypes.number
  };

  static defaultProps = {
    className: '',
    locale: 'en',
    month: (new Date()).getMonth(),
    style: {},
    titleFormat: 'MMMM YYYY',
    validDays: null,
    value: null,
    year: (new Date()).getFullYear()
  };

  componentDidMount() {
    if (this.props.onNavigate) {
      Waves.attach(ReactDOM.findDOMNode(this.refs.previous));
      Waves.attach(ReactDOM.findDOMNode(this.refs.next));
    }
  }

  onChange(day, validDay) {
    const {
      month,
      onChange,
      year
    } = this.props;
    if (onChange && validDay) {
      onChange({ target: { value: new Date(year, month, day) } });
    }
  }

  render() {
    const {
      secondaryColor,
      secondaryFontColor,
      typographyColor
    } = this.context.componentStyle;
    const {
      className,
      locale,
      month,
      onNavigate,
      onChange,
      value,
      style,
      titleFormat,
      validDays,
      year
    } = this.props;

    const date = getMoment({ year, month, day: 1 }, locale);
    const localeData = moment.localeData(locale);
    const previousMonth = date.clone().subtract(1, 'months');
    const nextMonth = date.clone().add(1, 'months');
    const firstDayOfWeek = localeData.firstDayOfWeek();

    let weekdays = [];
    for (let i = 0; i < 7; i++) {
      weekdays.push(localeData.weekdaysShort({ day: () => i })[0]);
    }
    if (firstDayOfWeek > 0) {
      weekdays = [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
    }

    const colWidth = 14.28571428;
    const today = getMoment(new Date(), locale).startOf('day');

    let days = [];
    for (let day = 1; day <= date.daysInMonth(); day++) {
      let date = new Date(year, month, day);
      let validDay = !Array.isArray(validDays) || validDays.includes(day);
      let selectedDay = value && getMoment(value, locale).startOf('day').isSame(date);
      days.push(
        <div
          key={day}
          style={{
            display: 'inline-block',
            width: `${colWidth}%`,
            textAlign: 'center',
            color: selectedDay
              ? secondaryFontColor
              : !validDay
                ? '#3e3e3e'
                : today.isSame(date)
                  ? secondaryColor
                  : 'inherit',
            cursor: onChange && validDay ? 'pointer' : 'inherit'
          }}
          onTouchTap={() => this.onChange(day, validDay)}>
          <div
            style={{
              width: '30px',
              margin: '0 auto',
              backgroundColor: selectedDay ? secondaryColor : 'inherit',
              borderRadius: '50%'
            }}>
            {day}
          </div>
        </div>
      );
    }

    let navigation = onNavigate ? [(
      <div
        key="previous"
        ref="previous"
        className="waves-circle"
        style={{
          float: 'left',
          cursor: 'pointer',
          height: '48px',
          width: '48px',
          marginLeft: '-5px'
        }}
        onTouchTap={() => onNavigate({ target: { value: {
          year: previousMonth.get('year'),
          month: previousMonth.get('month')
        }}})}>
        <svg fill={typographyColor} height="24" viewBox="0 0 24 24" width="24" style={{margin: '12px 9px 6px 9px'}}>
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    ), (
      <div
        key="next"
        ref="next"
        className="waves-circle"
        style={{
          float: 'right',
          cursor: 'pointer',
          height: '48px',
          width: '48px',
          marginRight: '-5px'
        }}
        onTouchTap={() => onNavigate({ target: { value: {
          year: nextMonth.get('year'),
          month: nextMonth.get('month')
        }}})}>
        <svg fill={typographyColor} height="24" viewBox="0 0 24 24" width="24" style={{margin: '12px 9px 6px 9px'}}>
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    )] : null;

    let padding = date.weekday() ? (
      <div
        style={{
          display: 'inline-block',
          width: `${colWidth * date.weekday()}%`,
          height: '9px'
        }}
      />
    ) : null;

    return (
      <div
        className={className}
        style={Object.assign({
          lineHeight: '30px',
          fontSize: '12px',
          width: '280px'
        }, style)}>
        <div>
          {navigation}
          <div
            style={{
              color: '#3e3e3e',
              textAlign: 'center',
              fontSize: '14px',
              lineHeight: '48px'
            }}>
            {date.format(titleFormat)}
          </div>
        </div>
        <div
          style={{
            color: '#9e9e9e',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
          {weekdays.map((day, index) => (
            <div
              key={index}
              style={{
                display: 'inline-block',
                width: `${colWidth}%`,
                textAlign: 'center'
              }}>
              {day}
            </div>
          ))}
        </div>
        <div>
          {padding}
          {days}
        </div>
      </div>
    );
  }
}
