import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import '../vendor/prism.css';
import '../vendor/prism';

export default class Example extends Component {

  static displayName = 'Example';

  static propTypes = {
    code: PropTypes.string
  };

  componentDidMount() {
    window.Prism.highlightElement(ReactDOM.findDOMNode(this.refs.code), false);
  }

  render() {
    const {
      code
    } = this.props;

    return (
      <pre>
        <code ref="code" className="language-jsx">
          {code.trim()}
        </code>
      </pre>
    );
  }
}
