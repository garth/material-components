import React, { Component } from 'react';
import Example from './example';
import { Col, Row, Typ } from '../../lib';

export default class Typography extends Component {

  static displayName = 'Typography';

  render() {
    return (
      <div>
        <Example code={`
import { Typ } from 'material-components';
        `}/>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ display3>Display 3</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ display3>Display 3</Typ></Col>
        </Row>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ display3>Display 2</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ display2>Display 2</Typ></Col>
        </Row>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ display1>Display 1</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ display1>Display 1</Typ></Col>
        </Row>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ headline>Headline</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ headline>Headline</Typ></Col>
        </Row>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ title>Title</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ title>Title</Typ></Col>
        </Row>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ subheading>Subheading</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ subheading>Subheading</Typ></Col>
        </Row>
        <p>
          By adding an optional <code>primary</code> or <code>secondary</code> flag to
          any <code>&lt;Typ&gt;</code> the color is set to the primary or secondary colors.
        </p>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ primary display2>Primary</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ primary display2>Primay</Typ></Col>
        </Row>
        <Row>
          <Col type="sm-5">
            <Example code={`
<Typ secondary display2>Secondary</Typ>
            `}/>
          </Col>
          <Col type="sm-7"><Typ secondary display2>Secondary</Typ></Col>
        </Row>
      </div>
    );
  }
}
