import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Checkbox, Col, Row, Spinner } from '../../lib';
import { state, signal } from 'cerebral/tags';

const SpinnerDemo = ({ spinner, isLoadingChanged }) => (
  <div>
    <Example
      code={`
import { Spinner } from 'material-components';
        `}
    />
    <Example
      code={`
// inline spinners
<Spinner size={25} inline/>
<Spinner size={50} inline primary/>
<Spinner size={75} inline secondary/>

// page spinner
<Spinner isOpen={isLoading}/>
        `}
    />
    <div style={{ margin: '24px 0' }} className="paper1 padded">
      <Row>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={25} inline />
        </Col>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={25} inline primary />
        </Col>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={25} inline secondary />
        </Col>
      </Row>
      <Row>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={50} inline />
        </Col>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={50} inline primary />
        </Col>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={50} inline secondary />
        </Col>
      </Row>
      <Row>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={75} inline />
        </Col>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={75} inline primary />
        </Col>
        <Col type="sm-4">
          <Spinner style={{ margin: '10px auto' }} size={75} inline secondary />
        </Col>
      </Row>
    </div>
    <div style={{ margin: '24px 0' }}>
      <Checkbox
        label="Page is loading"
        value={spinner.isLoading}
        onChange={e => isLoadingChanged({ value: e.target.value })}
      />
    </div>
    <Spinner isOpen={spinner.isLoading} />
  </div>
);

export default connect(
  {
    spinner: state`demos.spinner`,
    isLoadingChanged: signal`isLoadingChanged`
  },
  SpinnerDemo
);
