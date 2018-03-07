import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Checkbox } from '../../lib';
import { state, signal } from 'cerebral/tags';

const CheckboxDemo = ({ checkbox, checkboxChanged }) => (
  <div>
    <Example
      code={`
import { Checkbox } from 'material-components';
        `}
    />
    <Example
      code={`
<Checkbox label="Checkbox" value={checked} onChange={setChecked}/>
        `}
    />
    <div>
      <Checkbox label="Checkbox" value={checkbox.checked} onChange={e => checkboxChanged({ value: e.target.value })} />
    </div>
    <div>
      <Checkbox
        label="Opposite"
        value={!checkbox.checked}
        onChange={e => checkboxChanged({ value: !e.target.value })}
      />
    </div>
  </div>
);

export default connect(
  {
    checkbox: state`demos.checkbox`,
    checkboxChanged: signal`checkboxChanged`
  },
  CheckboxDemo
);
