import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';
import { Row, Col, Input } from '../../lib';

@State({
  input: ['demos', 'input']
})
export default class InputDemo extends Component {

  static displayName = 'Input';

  static propTypes = {
    signals: PropTypes.object,
    input: PropTypes.object
  };

  render() {
    const {
      signals,
      input
    } = this.props;

    return (
      <div>
        <Example code={`
import { Input } from 'material-components';
        `}/>
        <Example code={`
<Input label="Email" value={email} onChange={onEmailChange}/>
<Input label="Password" type="password" value={password} onChange={onPasswordChange}/>
<Input label="Success" value={email} isSuccess onChange={onEmailChange}/>
<Input label="Error" value={email} isError message="fix me" onChange={onEmailChange}/>
        `}/>
        <div style={{ margin: '16px 0' }}>
          <Row>
            <Col type="md-6">
              <Input
                label="Email"
                value={input.email}
                onChange={e => signals.emailChanged.sync({ value: e.target.value })}/>
            </Col>
            <Col type="md-6">
              <Input
                label="Password"
                type="password"
                value={input.password}
                onChange={e => signals.passwordChanged.sync({ value: e.target.value })}/>
            </Col>
          </Row>
          <Row>
            <Col type="md-6">
              <Input
                label="Success"
                value={input.email}
                isSuccess
                onChange={e => signals.emailChanged.sync({ value: e.target.value })}/>
            </Col>
            <Col type="md-6">
              <Input
                label="Error"
                value={input.email}
                isError
                message="fix me"
                onChange={e => signals.emailChanged.sync({ value: e.target.value })}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
