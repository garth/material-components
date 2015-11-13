import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Spinner extends Component {

  static displayName = 'Spinner';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    className: PropTypes.string,
    inline: PropTypes.bool,
    isOpen: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.number,
    style: PropTypes.object
  };

  static defaultProps = {
    className: '',
    inline: false,
    isOpen: false,
    primary: false,
    secondary: false,
    size: 30,
    style: {}
  };

  render() {
    const {
      primaryColor,
      secondaryColor
    } = this.context.componentStyle;
    const {
      className,
      inline,
      isOpen,
      primary,
      secondary,
      size,
      style
    } = this.props;

    const spinner = (
      <div
        className={className}
        style={Object.assign({
          position: 'relative',
          margin: '0 auto',
          width: `${size}px`,
          height: `${size}px`
        }, style)}>
        <svg
          style={{
            animation: 'spinner-rotate 2s linear infinite',
            position: 'relative',
            zoom: size / 100,
            width: '100px',
            height: '100px'
          }}>
          <circle
            style={{
              strokeDasharray: '1,400',
              strokeDashoffset: 0,
              animation: 'spinner-dash 1.5s ease-in-out infinite' +
                (!primary && !secondary ? ', spinner-color 6s ease-in-out infinite' : ''),
              strokeLinecap: 'round'
            }}
            fill="none"
            stroke={primary ? primaryColor : secondary ? secondaryColor : null}
            cx="50"
            cy="50"
            r="48"
            strokeWidth="4"
            strokeMiterlimit="10"/>
        </svg>
      </div>
    );

    return inline ? spinner : (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        transitionName="popup"
        style={{ zIndex: 1100 }}>
        {isOpen ? (
          <div key="spinner">
            <div
              className="paper1 transition"
              style={{
                zIndex: 1100,
                position: 'fixed',
                top: '100px',
                left: '50%',
                marginLeft: `-${(size / 2) + 6}px`,
                width: `${size + 12}px`,
                height: `${size + 12}px`,
                borderRadius: '50%',
                padding: '6px'
              }}>
              {spinner}
            </div>
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }

}

export default Spinner;
