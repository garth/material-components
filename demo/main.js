import 'babel/polyfill';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// load the css
require('normalize.css/normalize.css');
require('../lib/index.css');

// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import the material-components
import { Appbar, Button, Checkbox, Col, Dialog, Divider, Input, Row, Typ, Menu } from '../lib';

// component to render code examples
function Example({ code }) {
  return (
    <div style={{ padding: '8px 0' }}>
      <pre className="prettyprint lang-js linenums" style={{
        fontFamily: 'Ubuntu Mono',
        padding: '8px 0',
        margin: '0',
        borderRadius: '0',
        width: '100%'
      }}>
        {code.trim()}
      </pre>
    </div>
  )
}

// icon components
function FaIcon({ name }) {
  return (
    <i className={`fa fa-${name}`}/>
  );
}
function Icon({name}) {
  return (
    <i className="material-icons md-36" style={{
      lineHeight: 'inherit'
    }}>{name}</i>
  );
}

// the demo app
class Application extends Component {

  static displayName = 'Application';

  static childContextTypes = {
    componentStyle: PropTypes.object
  };

  state = {
    showMoreMenu: false,
    email: '',
    password: '',
    checked: false,
    showDialog: false,
    showSimpleMenu: false,
    showMenu: false,
    selectedOption: 1
  }

  getChildContext() {
    return {
      componentStyle: {
        primaryColor: '#FFC107',
        primaryFontColor: 'rgba(0, 0, 0, 0.7)',
        secondaryColor: '#009688',
        secondaryFontColor: 'rgba(255, 255, 255, 0.9)',
        errorColor: '#C00',
        successColor: '#090',
        typographyColor: '#212121'
      }
    };
  }

  render() {
    return (
      <div>
        <Appbar fixed>
          <Appbar.Button style={{ float: 'left' }}><Icon name="menu"/></Appbar.Button>
          <Appbar.Title>Material Components</Appbar.Title>
          <div style={{ float: 'right' }}>
            <Appbar.Button
              onTouchTap={() => location.href='https://github.com/garth/material-components'}>
              <FaIcon name="github"/>
            </Appbar.Button>
            <Appbar.Button onTouchTap={() => this.setState({ showMoreMenu: true })}>
              <Icon name="more_vert"/>
            </Appbar.Button>
            <Menu rightAlign isOpen={this.state.showMoreMenu} onDone={() => this.setState({ showMoreMenu: false })}>
              <Menu.Item>Option A</Menu.Item>
              <Menu.Item>Option B</Menu.Item>
            </Menu>
          </div>
        </Appbar>
        <div style={{ padding: '24px', width: '950px' }}>
          <section>
            <Typ secondary display1>Introduction</Typ>
            <p>
              material-components is a library of <a href="https://facebook.github.io/react/">React</a> (0.14.0) user
              interface components based on <a href="https://www.google.com/design/spec/">material design</a>.
            </p>
            <p>
              Unlike some other React based component libraries,
              material-components are completely stateless making them an ideal companion to libraries such
              as <a href="http://christianalfoni.com/cerebral/">Cerebral</a> or <a href="http://rackt.github.io/redux/">Redux</a>.
              But they can also be used with other flux based frameworks or even without a framework at all.
            </p>
            <p>
              For source code, installation and configuration info please see
              the <a href="https://github.com/garth/material-components">GitHub Repository</a>.
            </p>
          </section>

          <section>
            <Typ secondary display1>Import Components</Typ>
            <Example code={`
import {
  Appbar,
  Button,
  Checkbox
  Col,
  Dialog,
  Divider,
  Input,
  Row,
  Typ,
  Menu
} from 'material-components';
            `}/>
          </section>

          <section>
            <Typ secondary display1>Paper and Divider</Typ>
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
<Divider>
            `}/>
            <div style={{ margin: '16px 0' }}>
              <Row>
                <Col type="sm-offset-1 sm-2">
                  <div className="paper1 padded">Paper 1</div>
                </Col>
                <Col type="sm-2">
                  <div className="paper2 padded">Paper 2</div>
                </Col>
                <Col type="sm-2">
                  <div className="paper3 padded">Paper 3</div>
                </Col>
                <Col type="sm-2">
                  <div className="paper4 padded">Paper 4</div>
                </Col>
                <Col type="sm-2">
                  <div className="paper5 padded">Paper 5</div>
                </Col>
              </Row>

              <div style={{ margin: '24px 0 16px 0' }} className="paper1 padded">
                Before divider
                <Divider/>
                After divider
              </div>
            </div>
          </section>

          <section>
            <Typ secondary display1>Typography</Typ>
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
          </section>

          <section>
            <Typ secondary display1>Appbar, Appbar.Title and Appbar.Button</Typ>
            <Example code={`
<Appbar fixed>
  <Appbar.Button style={{ float: 'left' }}><Icon name="menu"/></Appbar.Button>
  <Appbar.Title>Material Components</Appbar.Title>
  <div style={{ float: 'right' }}>
    <Appbar.Button
      onTouchTap={() => location.href='https://github.com/garth/material-components'}>
      <FaIcon name="github"/>
    </Appbar.Button>
    <Appbar.Button><Icon name="more_vert"/></Appbar.Button>
    <Menu rightAlign isOpen={showMoreMenu} onDone={hideMoreMenuFunc}>
      <Menu.Item>Option A</Menu.Item>
      <Menu.Item>Option B</Menu.Item>
    </Menu>
  </div>
</Appbar>
            `}/>
            <p>See the appbar above.</p>
            <p>
              When using a darker primary color, try
              using <code>{'<Appbar.Button lightWaves={true}>X</Appbar.Button>'}</code>
            </p>
          </section>

          <section>
            <Typ secondary display1>Buttons</Typ>
            <Example code={`
<Button onTouchTap={onClick}>Normal</Button>
<Button onTouchTap={onClick} primary={true}>Primary</Button>
<Button onTouchTap={onClick} flat={true}>Flat</Button>
<Button onTouchTap={onClick} primary={true} flat={true}>Primary Flat</Button>
            `}/>
            <p>
              <Button>Normal</Button>
              <Button primary={true}>Primary</Button>
              <Button flat={true}>Flat</Button>
              <Button primary={true} flat={true}>Primary Flat</Button>
            </p>
          </section>

          <section>
            <Typ secondary display1>Inputs</Typ>
            <Example code={`
<Input label="Email" value={email} onChange={onEmailChange}/>
<Input label="Password" type="password" value={password} onChange={onPasswordChange}/>
<Input label="Success" value={email} isSuccess={true} onChange={onEmailChange}/>
<Input label="Error" value={email} isError={true} message="fix me" onChange={onEmailChange}/>
            `}/>
            <div style={{ margin: '16px 0' }}>
              <Row>
                <Col type="md-6">
                  <Input
                    label="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}/>
                </Col>
                <Col type="md-6">
                  <Input
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}/>
                </Col>
              </Row>
              <Row>
                <Col type="md-6">
                  <Input
                    label="Success"
                    value={this.state.email}
                    isSuccess={true}
                    onChange={(e) => this.setState({ email: e.target.value })}/>
                </Col>
                <Col type="md-6">
                  <Input
                    label="Error"
                    value={this.state.email}
                    isError={true}
                    message="fix me"
                    onChange={(e) => this.setState({ email: e.target.value })}/>
                </Col>
              </Row>
            </div>
          </section>

          <section>
            <Typ secondary display1>Checkbox</Typ>
            <Example code={`
<Checkbox label="Checkbox" value={checked} onChange={setChecked}/>
            `}/>
            <div>
              <Checkbox label="Checkbox" value={this.state.checked} onChange={(e) => this.setState({ checked: e.target.value })}/>
            </div>
            <div>
              <Checkbox label="Opposite" value={!this.state.checked} onChange={(e) => this.setState({ checked: !e.target.value })}/>
            </div>
          </section>

          <section>
            <Typ secondary display1>Grid System</Typ>
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
          </section>

          <section>
            <Typ secondary display1>Menu</Typ>
            <Example code={`
<Menu isOpen={showSimpleMenuProp onDone={hideSimpleMenuFunc}>
  <Menu.Item onTouchTap={itemClicked}>Simple Menu Item</Menu.Item>
  <Menu.Item onTouchTap={itemClicked}>Other Option</Menu.Item>
</Menu>

<Menu rightAlign isOpen={showMenuProp} onDone={hideMenuFunc}>
  <Menu.Item showIcon icon={<Icon name="settings"/>} onTouchTap={itemClicked}>Settings</Menu.Item>
  <Menu.Item showIcon onTouchTap={itemClicked}>No Icon</Menu.Item>
  <Menu.Seperator/>
  <Menu.Item showIcon selected={selectedOption===1} onTouchTap={() => setSelectedOption(1)}>Option 1</Menu.Item>
  <Menu.Item showIcon selected={selectedOption===2} onTouchTap={() => setSelectedOption(2)}>Option 2</Menu.Item>
</Menu>
            `}/>
            <div style={{ margin: '24px 0' }}>
              <Menu isOpen={this.state.showSimpleMenu} onDone={() => this.setState({ showSimpleMenu: false })}>
                <Menu.Item>Simple Menu Item</Menu.Item>
                <Menu.Item>Other Option</Menu.Item>
              </Menu>
              <Button style={{ margin: '0' }} primary={true} onTouchTap={() => this.setState({ showSimpleMenu: true })}>Simple Menu</Button>

              <Button style={{ margin: '0 16px' }} primary={true} onTouchTap={() => this.setState({ showMenu: true })}>Menu</Button>
              <Menu rightAlign isOpen={this.state.showMenu} onDone={() => this.setState({ showMenu: false })}>
                <Menu.Item showIcon icon={<FaIcon name="cog"/>}>Settings</Menu.Item>
                <Menu.Item showIcon>No Icon</Menu.Item>
                <Menu.Seperator/>
                <Menu.Item showIcon selected={this.state.selectedOption===1} onTouchTap={() => this.setState({ selectedOption: 1 })}>Option 1</Menu.Item>
                <Menu.Item showIcon selected={this.state.selectedOption===2} onTouchTap={() => this.setState({ selectedOption: 2 })}>Option 2</Menu.Item>
              </Menu>
            </div>
          </section>

          <section>
            <Typ secondary display1>Dialog</Typ>
            <Example code={`
<Dialog isOpen={showDialog} width={400} height={172} title="Question?"
  okLabel="OK" onOk={onOk} cancelLabel="Cancel" onCancel={onCancel}>
</Dialog>
            `}/>
            <Button style={{ margin: '24px 0' }} primary={true} onTouchTap={() => this.setState({ showDialog: true })}>Show Dialog</Button>
            <Dialog
              isOpen={this.state.showDialog}
              width={400}
              height={172}
              title="Do you confirm or deny?"
              okLabel="Confirm"
              onOk={() => this.setState({ showDialog: false })}
              cancelLabel="Deny"
              onCancel={() => this.setState({ showDialog: false })}>
              the details of allogation
            </Dialog>
          </section>
        </div>
      </div>
    );
  }
}

// render the app
ReactDOM.render(<Application/>, document.getElementById('root'));
