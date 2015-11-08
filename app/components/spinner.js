import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';
import { Checkbox, Col, Row, Spinner } from '../../lib';

@State({
  spinner: ['demos', 'spinner']
})
export default class SpinnerDemo extends Component {

  static displayName = 'Spinner';

  static propTypes = {
    signals: PropTypes.object,
    spinner: PropTypes.object
  };

  render() {
    const {
      signals,
      spinner
    } = this.props;

    return (
      <div>
        <Example code={`
import { Spinner } from 'material-components';
        `}/>
        <Example code={`
// inline spinners
<Spinner size={25} inline/>
<Spinner size={50} inline primary/>
<Spinner size={75} inline secondary/>

// page spinner
<Spinner isOpen={isLoading}/>
        `}/>
        <div style={{ margin: '24px 0' }} className="paper1 padded">
          <Row>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={25} inline/></Col>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={25} inline primary/></Col>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={25} inline secondary/></Col>
          </Row>
          <Row>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={50} inline/></Col>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={50} inline primary/></Col>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={50} inline secondary/></Col>
          </Row>
          <Row>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={75} inline/></Col>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={75} inline primary/></Col>
            <Col type="sm-4"><Spinner style={{ margin: '10px auto' }} size={75} inline secondary/></Col>
          </Row>
        </div>
        <div style={{ margin: '24px 0' }}>
          <Checkbox label="Page is loading" value={spinner.isLoading} onChange={(e) => signals.isLoadingChanged({ value: e.target.value })}/>
        </div>
        <Spinner isOpen={spinner.isLoading}/>
      </div>
    );
  }
}
