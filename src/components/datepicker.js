import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Dialog from './dialog';
import Calendar from './calendar';
import screen from './helpers/screen';

class DatePicker extends Component {

  static displayName = 'DatePicker';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    locale: PropTypes.string,
    month: PropTypes.number,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onNavigate: PropTypes.func,
    onOk: PropTypes.func,
    pickingValue: PropTypes.object,
    style: PropTypes.object,
    validDays: PropTypes.array,
    year: PropTypes.number
  };

  static defaultProps = {
    className: '',
    isOpen: false,
    locale: 'en',
    month: (new Date()).getMonth(),
    style: {},
    validDays: null,
    year: (new Date()).getFullYear()
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize = () => this.forceUpdate());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  render() {
    const {
      secondaryColor,
      secondaryFontColor
    } = this.context.componentStyle;
    const {
      className,
      isOpen,
      locale,
      month,
      onCancel,
      onChange,
      onNavigate,
      onOk,
      pickingValue,
      style,
      validDays,
      year
    } = this.props;

    const { width, height } = screen.getSize();
    const isPortrait = height > width;
    const displayDate = pickingValue ? moment(pickingValue) : moment({ year, month, day: 1 });
    displayDate.locale(locale);

    let dateLines = null;
    if (!pickingValue) {
      dateLines = [displayDate.format('MMM')];
    } else if (isPortrait) {
      dateLines = [displayDate.format('ddd MMM D')];
    } else {
      dateLines = [
        displayDate.format('ddd'),
        displayDate.format('MMM D')
      ];
    }

    return (
      <Dialog
        isOpen={isOpen}
        onOk={pickingValue ? e => onOk({ target: { value: this.props.pickingValue } }) : null}
        okLabel="OK"
        onCancel={onCancel}
        cancelLabel="Cancel"
        width={isPortrait ? 328 : 496}
        height={isPortrait ? 388 : 292}
        hideDivider
        noPadding
        ignoreResizeEvents
        className={className}
        style={Object.assign({ overflow: 'hidden' }, style)}>
        <div
          style={{
            width: isPortrait ? '100%' : '168px',
            height: isPortrait ? '96px' : '322px',
            marginBottom: isPortrait ? 0 : '-56px',
            backgroundColor: secondaryColor,
            color: secondaryFontColor,
            padding: isPortrait ? '16px 24px' : '16px',
            position: 'absolute'
          }}>
          <div style={{ fontSize: '15px', marginBottom: '2px' }}>
            {displayDate.get('year')}
          </div>
          <div style={{ fontSize: '36px', fontWeight: 600, lineHeight: '40px' }}>
            {dateLines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
        <Calendar
          locale={locale}
          month={month}
          onChange={onChange}
          onNavigate={onNavigate}
          validDays={validDays}
          value={pickingValue}
          year={year}
          style={{
            margin: isPortrait ? '104px 24px 0' : '8px 24px 0 192px'
          }}/>
      </Dialog>
    );
  }
}

export default DatePicker;
