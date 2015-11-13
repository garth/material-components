import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Typ extends Component {

  static displayName = 'Typography';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    display3: PropTypes.bool,
    display2: PropTypes.bool,
    display1: PropTypes.bool,
    headline: PropTypes.bool,
    title: PropTypes.bool,
    subheading: PropTypes.bool,
    caption: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    style: PropTypes.object
  };

  render() {
    const {
      primaryColor,
      secondaryColor,
      typographyColor
    } = this.context.componentStyle;
    const {
      className,
      children,
      display3,
      display2,
      display1,
      headline,
      title,
      subheading,
      caption,
      primary,
      secondary,
      style
    } = this.props;

    return (
      <div
        className={classNames({
          'text-display-3': display3,
          'text-display-2': display2,
          'text-display-1': display1,
          'text-headline': headline,
          'text-title': title,
          'text-subheading': subheading,
          'text-caption': caption
        }, className)}
        style={Object.assign({
          color: primary ? primaryColor : secondary ? secondaryColor : typographyColor
        }, style)}>
        {children}
      </div>
    );
  }
}

export default Typ;
