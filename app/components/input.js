import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Row, Col, Input } from '../../lib';
import { state, signal } from 'cerebral/tags';

const InputDemo = ({ input, emailChanged, passwordChanged }) => (
  <div>
    <Example
      code={`
import { Input } from 'material-components';
        `}
    />
    <Example
      code={`
<Input label="Email" value={email} onChange={onEmailChange}/>
<Input label="Password" type="password" value={password} onChange={onPasswordChange}/>
<Input label="Success" value={email} isSuccess onChange={onEmailChange}/>
<Input label="Error" value={email} isError message="fix me" onChange={onEmailChange}/>
        `}
    />
    <div style={{ margin: '16px 0' }}>
      <Row>
        <Col type="md-6">
          <Input label="Email" value={input.email} onChange={e => emailChanged({ value: e.target.value })} />
        </Col>
        <Col type="md-6">
          <Input
            label="Password"
            type="password"
            value={input.password}
            onChange={e => passwordChanged({ value: e.target.value })}
          />
        </Col>
      </Row>
      <Row>
        <Col type="md-6">
          <Input
            label="Success"
            value={input.email}
            isSuccess
            onChange={e => emailChanged({ value: e.target.value })}
          />
        </Col>
        <Col type="md-6">
          <Input
            label="Error"
            value={input.email}
            isError
            message="fix me"
            onChange={e => emailChanged({ value: e.target.value })}
          />
        </Col>
      </Row>
    </div>
  </div>
);

export default connect(
  {
    input: state`demos.input`,
    emailChanged: signal`emailChanged`,
    passwordChanged: signal`passwordChanged`
  },
  InputDemo
);
