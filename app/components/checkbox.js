import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';
import { Checkbox } from '../../lib';

@State({
  checkbox: ['demos', 'checkbox']
})
export default class CheckboxDemo extends Component {

  static displayName = 'Checkbox';

  static propTypes = {
    signals: PropTypes.object,
    checkbox: PropTypes.object
  };

  render() {
    const {
      signals,
      checkbox
    } = this.props;

    return (
      <div>
        <Example code={`
import { Checkbox } from 'material-components';
        `}/>
        <Example code={`
<Checkbox label="Checkbox" value={checked} onChange={setChecked}/>
        `}/>
        <div>
          <Checkbox label="Checkbox" value={checkbox.checked} onChange={(e) => signals.checkboxChanged({ value: e.target.value })}/>
        </div>
        <div>
          <Checkbox label="Opposite" value={!checkbox.checked} onChange={(e) => signals.checkboxChanged({ value: !e.target.value })}/>
        </div>
      </div>
    );
  }
}
