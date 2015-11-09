import React, { Component } from 'react';
import Example from './example';
import { Col, Row } from '../../lib';

export default class GridSystem extends Component {

  static displayName = 'GridSystem';

  render() {
    return (
      <div>
        <Example code={`
import { Col, Row } from 'material-components';
        `}/>
        <p>
          material-components borrows the reponsive <a href="http://getbootstrap.com/css/#grid">grid
          system from bootstrap</a>. Simply omit the <code>col-</code> class name prefix and pass all
          parameters via the <code>type</code> attribute.
        </p>
        <Example code={`
<Row>
  <Col type="md-5 md-offset-1"></Col>
  <Col type="md-5"></Col>
</Row>
        `}/>
        <div style={{ padding: '16px 0' }}>
          <Row>
            <Col type="md-5 md-offset-1"><div className="paper1 padded">md-5 md-offset-1</div></Col>
            <Col type="md-5"><div className="paper1 padded">md-5</div></Col>
          </Row>
        </div>
      </div>
    );
  }
}
