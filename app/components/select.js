import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';
import { Col, Row, Select } from '../../lib';

@State({
  select: ['demos', 'select']
})
export default class SelectDemo extends Component {

  static displayName = 'Select';

  static propTypes = {
    signals: PropTypes.object,
    select: PropTypes.object
  };

  render() {
    const {
      signals,
      select
    } = this.props;

    const options = [
      { value: 0, label: 'Option 1' },
      { value: 1, label: 'Option 2' },
      { value: 2, label: 'Option 3' },
      { value: 3, label: 'Option 4' }
    ];

    return (
      <div>
        <Example code={`
import { Select } from 'material-components';
        `}/>
        <Example code={`
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
        `}/>
        <div style={{ margin: '16px 0' }}>
          <Row>
            <Col type="md-4">
              <Select
                label="option"
                selected={select.selected}
                options={options}
                isOpen={select.selectOpen}
                onOpen={e => signals.selectOpened()}
                onChange={e => signals.selectChanged({ value: e.target })}
                onClose={e => signals.selectClosed()}/>
            </Col>
            <Col type="md-4">
              <Select
                label="Success option"
                selected={select.selected}
                options={options}
                isSuccess
                isOpen={select.selectSuccessOpen}
                onOpen={e => signals.selectSuccessOpened()}
                onChange={e => signals.selectChanged({ value: e.target })}
                onClose={e => signals.selectSuccessClosed()}/>
            </Col>
            <Col type="md-4">
              <Select
                label="Error option"
                value={select.selected && select.selected.value}
                options={options}
                isError
                message="fix me"
                isOpen={select.selectErrorOpen}
                onOpen={e => signals.selectErrorOpened()}
                onChange={e => signals.selectChanged({ value: e.target })}
                onClose={e => signals.selectErrorClosed()}/>
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
                onOpen={e => signals.selectLargeOpened()}
                onChange={e => signals.selectLargeChanged({ value: e.target.value })}
                onClose={e => signals.selectLargeClosed()}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
