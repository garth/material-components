import React, { Component } from 'react';
import Example from './example';
import { Col, Row, Divider } from '../../lib';

export default class Paper extends Component {

  static displayName = 'Paper';

  render() {
    return (
      <div>
        <Example code={`
import { Divider } from 'material-components';
        `}/>
        <p>
          Add a paper class to an element to lift it from the page. The optional <code>padded</code> class
          gives the paper a default padding. A divider component provides seperation.
        </p>
        <Example code={`
<div className="paper1 padded">Paper 1</div>
<div className="paper2 padded">Paper 2</div>
<div className="paper3 padded">Paper 3</div>
<div className="paper4 padded">Paper 4</div>
<div className="paper5 padded">Paper 5</div>
<Divider/>
        `}/>
        <div style={{ margin: '16px 0' }}>
          <Row>
            <Col type="sm-offset-1 sm-2">
              <div className="paper1 padded" style={{ margin: '16px 0' }}>Paper 1</div>
            </Col>
            <Col type="sm-2">
              <div className="paper2 padded" style={{ margin: '16px 0' }}>Paper 2</div>
            </Col>
            <Col type="sm-2">
              <div className="paper3 padded" style={{ margin: '16px 0' }}>Paper 3</div>
            </Col>
            <Col type="sm-2">
              <div className="paper4 padded" style={{ margin: '16px 0' }}>Paper 4</div>
            </Col>
            <Col type="sm-2">
              <div className="paper5 padded" style={{ margin: '16px 0' }}>Paper 5</div>
            </Col>
          </Row>

          <div className="paper1 padded" style={{ margin: '16px 0' }}>
            Before divider
            <Divider/>
            After divider
          </div>
        </div>
      </div>
    );
  }
}
