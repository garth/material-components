import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Col, Row, Select } from '../../lib';
import { state, signal } from 'cerebral/tags';

const options = [
  { value: 0, label: 'Option 1' },
  { value: 1, label: 'Option 2' },
  { value: 2, label: 'Option 3' },
  { value: 3, label: 'Option 4' }
];

const SelectDemo = ({
  select,
  selectOpened,
  selectChanged,
  selectClosed,
  selectSuccessOpened,
  selectSuccessClosed,
  selectErrorOpened,
  selectErrorClosed,
  selectLargeOpened,
  selectLargeChanged,
  selectLargeClosed
}) => (
  <div>
    <Example
      code={`
import { Select } from 'material-components';
        `}
    />
    <Example
      code={`
let options = [
  { value: 0, label: 'Option 1' },
  { value: 1, label: 'Option 2' },
  { value: 2, label: 'Option 3' }
];

<Select
  label="option"
  selected={selectedObject}
  options={options}
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onClose={setClosedState}/>

<Select
  label="Success option"
  selected={selectedObject}
  options={options}
  isSuccess
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onClose={setClosedState}/>

// note that this version uses value instead of a selected object
<Select
  label="Error option"
  value={selectedObject.value}
  options={options}
  isError
  message="fix me"
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onClose={setClosedState}/>
        `}
    />
    <div style={{ margin: '16px 0' }}>
      <Row>
        <Col type="md-4">
          <Select
            label="option"
            selected={select.selected}
            options={options}
            isOpen={select.selectOpen}
            onOpen={e => selectOpened()}
            onChange={e => selectChanged({ value: e.target })}
            onClose={e => selectClosed()}
          />
        </Col>
        <Col type="md-4">
          <Select
            label="Success option"
            selected={select.selected}
            options={options}
            isSuccess
            isOpen={select.selectSuccessOpen}
            onOpen={e => selectSuccessOpened()}
            onChange={e => selectChanged({ value: e.target })}
            onClose={e => selectSuccessClosed()}
          />
        </Col>
        <Col type="md-4">
          <Select
            label="Error option"
            value={select.selected && select.selected.value}
            options={options}
            isError
            message="fix me"
            isOpen={select.selectErrorOpen}
            onOpen={e => selectErrorOpened()}
            onChange={e => selectChanged({ value: e.target })}
            onClose={e => selectErrorClosed()}
          />
        </Col>
      </Row>
      <Row>
        <Col type="md-4 md-offset-4">
          <Select
            label="large list of items"
            value={select.largeSelectedValue}
            options={(() => {
              let options = [];
              for (let i = 0; i < 100; i++) {
                options.push({ value: i, label: `Option ${i + 1}` });
              }
              return options;
            })()}
            isOpen={select.largeSelectOpen}
            onOpen={e => selectLargeOpened()}
            onChange={e => selectLargeChanged({ value: e.target.value })}
            onClose={e => selectLargeClosed()}
          />
        </Col>
      </Row>
    </div>
  </div>
);

export default connect(
  {
    select: state`demos.select`,
    selectOpened: signal`selectOpened`,
    selectChanged: signal`selectChanged`,
    selectClosed: signal`selectClosed`,
    selectSuccessOpened: signal`selectSuccessOpened`,
    selectSuccessClosed: signal`selectSuccessClosed`,
    selectErrorOpened: signal`selectErrorOpened`,
    selectErrorClosed: signal`selectErrorClosed`,
    selectLargeOpened: signal`selectLargeOpened`,
    selectLargeChanged: signal`selectLargeChanged`,
    selectLargeClosed: signal`selectLargeClosed`
  },
  SelectDemo
);
