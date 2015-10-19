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
import {
  Appbar, Button, Checkbox, Col, Dialog, Divider, Input, Row, Typ, Menu, Select, Sidenav, Spinner, Table, events
} from '../lib';

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
    screen: {},
    sidenavOpen: false,
    showMoreMenu: false,
    email: '',
    password: '',
    selectOption: false,
    selectSuccessOption: false,
    selectErrorOption: false,
    selected: null,
    checked: false,
    showDialog: false,
    showSimpleMenu: false,
    showMenu: false,
    selectedOption: 1,
    isLoading: false
  }

  componentWillMount() {
    events.responsive.addListener(screen => this.setState({ screen }));
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
        <Sidenav isOpen={this.state.sidenavOpen} onDone={() => this.setState({ sidenavOpen: false })}>
          <Sidenav.Title showCloseButton>Menu</Sidenav.Title>
          <Sidenav.Item showIcon icon={<FaIcon name="user"/>}>Option A</Sidenav.Item>
          <Sidenav.Item showIcon icon={<FaIcon name="dashboard"/>} selected>Option B</Sidenav.Item>
          <Sidenav.Seperator/>
          <Sidenav.Item showIcon icon={<FaIcon name="cog"/>}>Settings</Sidenav.Item>
        </Sidenav>
        <Appbar fixed>
          <Appbar.Button style={{ float: 'left' }} onTouchTap={() => this.setState({ sidenavOpen: true })}>
            <Icon name="menu"/>
          </Appbar.Button>
          <Appbar.Title>{this.state.screen.type === 'xs' ? 'Demo' : 'Material Components'}</Appbar.Title>
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
        <div style={{ padding: '24px', maxWidth: '950px' }}>
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
  Menu,
  Row,
  Select,
  Sidenav,
  Spinner,
  Table,
  Typ,
  events
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
              using <code>{'<Appbar.Button lightWaves>X</Appbar.Button>'}</code>
            </p>
          </section>

          <section>
            <Typ secondary display1>Sidenav</Typ>
            <Example code={`
<Sidenav isOpen={sidenavOpen} onDone={closeSidenavFunc}>
  <Sidenav.Title showCloseButton>Menu</Sidenav.Title>
  <Sidenav.Item showIcon icon={<Icon name="user"/>} onTouchTap={itemSelected}>Option A</Sidenav.Item>
  <Sidenav.Item showIcon icon={<Icon name="dashboard"/>} onTouchTap={itemSelected} selected>Option B</Sidenav.Item>
  <Sidenav.Seperator/>
  <Sidenav.Item showIcon icon={<Icon name="cog"/>} onTouchTap={itemSelected}>Settings</Sidenav.Item>
</Sidenav>
            `}/>
            <p>See the sidenav above.</p>
            <p>It's also possible to have a mini sidenav that is always on display.</p>
            <Example code={`
<Sidenav mini>
  <Sidenav.Item showIcon icon={<Icon name="user"/>} onTouchTap={itemSelected}/>
  <Sidenav.Item showIcon icon={<Icon name="dashboard"/>} onTouchTap={itemSelected} selected/>
  <Sidenav.Seperator/>
  <Sidenav.Item showIcon icon={<Icon name="cog"/>} onTouchTap={itemSelected}/>
</Sidenav>
<div style={{ marginLeft: '60px' }}>
  Page Content
</div>
            `}/>
            <div className="paper1" style={{
              height: '200px',
              margin: '16px 0'
            }}>
              <Sidenav mini style={{
                float: 'left',
                position: 'relative',
                top: '0',
                height: '200px'
              }}>
                <Sidenav.Item showIcon icon={<FaIcon name="user"/>}/>
                <Sidenav.Item showIcon icon={<FaIcon name="dashboard"/>} selected/>
                <Sidenav.Seperator/>
                <Sidenav.Item showIcon icon={<FaIcon name="cog"/>}/>
              </Sidenav>
              <div style={{
                padding: '16px',
                marginLeft: '60px'
              }}>
                Page Content
              </div>
            </div>

          </section>

          <section>
            <Typ secondary display1>Buttons</Typ>
            <Example code={`
<Button onTouchTap={onClick}>Normal</Button>
<Button onTouchTap={onClick} primary>Primary</Button>
<Button onTouchTap={onClick} flat>Flat</Button>
<Button onTouchTap={onClick} primary flat>Primary Flat</Button>
            `}/>
            <p>
              <Button>Normal</Button>
              <Button primary>Primary</Button>
              <Button flat>Flat</Button>
              <Button primary flat>Primary Flat</Button>
            </p>
          </section>

          <section>
            <Typ secondary display1>Inputs</Typ>
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
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}/>
                </Col>
                <Col type="md-6">
                  <Input
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}/>
                </Col>
              </Row>
              <Row>
                <Col type="md-6">
                  <Input
                    label="Success"
                    value={this.state.email}
                    isSuccess
                    onChange={e => this.setState({ email: e.target.value })}/>
                </Col>
                <Col type="md-6">
                  <Input
                    label="Error"
                    value={this.state.email}
                    isError
                    message="fix me"
                    onChange={e => this.setState({ email: e.target.value })}/>
                </Col>
              </Row>
            </div>
          </section>

          <section>
            <Typ secondary display1>Select</Typ>
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
  onDone={setClosedState}/>

<Select
  label="Success option"
  selected={selectedObject}
  options={options}
  isSuccess
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onDone={setClosedState}/>

// note that this version uses selectedValue instead of an object
<Select
  label="Error option"
  selectedValue={selectedObject.value}
  options={options}
  isError
  message="fix me"
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onDone={setClosedState}/>
            `}/>
            <div style={{ margin: '16px 0' }}>
              <Row>
                <Col type="md-4">
                  <Select
                    label="option"
                    selected={this.state.selected}
                    options={[
                      { value: 0, label: 'Option 1' },
                      { value: 1, label: 'Option 2' },
                      { value: 2, label: 'Option 3' },
                      { value: 3, label: 'Option 4' }
                    ]}
                    isOpen={this.state.selectOption}
                    onOpen={e => this.setState({ selectOption: true })}
                    onChange={e => this.setState({ selected: e.target })}
                    onDone={e => this.setState({ selectOption: false })}/>
                </Col>
                <Col type="md-4">
                  <Select
                    label="Success option"
                    selected={this.state.selected}
                    options={[
                      { value: 0, label: 'Option 1' },
                      { value: 1, label: 'Option 2' },
                      { value: 2, label: 'Option 3' },
                      { value: 3, label: 'Option 4' }
                    ]}
                    isSuccess
                    isOpen={this.state.selectSuccessOption}
                    onOpen={e => this.setState({ selectSuccessOption: true })}
                    onChange={e => this.setState({ selected: e.target })}
                    onDone={e => this.setState({ selectSuccessOption: false })}/>
                </Col>
                <Col type="md-4">
                  <Select
                    label="Error option"
                    selectedValue={this.state.selected && this.state.selected.value}
                    options={[
                      { value: 0, label: 'Option 1' },
                      { value: 1, label: 'Option 2' },
                      { value: 2, label: 'Option 3' },
                      { value: 3, label: 'Option 4' }
                    ]}
                    isError
                    message="fix me"
                    isOpen={this.state.selectErrorOption}
                    onOpen={e => this.setState({ selectErrorOption: true })}
                    onChange={e => this.setState({ selected: e.target })}
                    onDone={e => this.setState({ selectErrorOption: false })}/>
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
              <Button style={{ margin: '0' }} primary onTouchTap={() => this.setState({ showSimpleMenu: true })}>Simple Menu</Button>

              <Button style={{ margin: '0 16px' }} primary onTouchTap={() => this.setState({ showMenu: true })}>Menu</Button>
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
            <Button style={{ margin: '24px 0' }} primary onTouchTap={() => this.setState({ showDialog: true })}>Show Dialog</Button>
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

          <section>
            <Typ secondary display1>Table</Typ>
            <p>
              Only <code>Table</code>, <code>Table.Toolbar</code> and <code>Table.Row</code> are necessary, for other
              element types use the default html
              elements <code>thead</code>, <code>tbody</code>, <code>th</code> and <code>td</code>.
            </p>
            <Example code={`
<Table className="paper1">
  <thead>
    <Table.Toolbar colSpan={3}>
      <Button style={{ margin: '0 8px', padding: '0 8px' }} primary flat>Add</Button>
    </Table.Toolbar>
    <Table.Row>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Role</th>
    </Table.Row>
  </thead>
  <tbody>
    {[
      { firstName: 'Brian', lastName: 'Wilson', role: 'user' },
      { firstName: 'Geoff', lastName: 'Hayes', role: 'user' },
      { firstName: 'John', lastName: 'Doe', role: 'admin' }
    ].map((user, index) => (
      <Table.Row key={index} onTouchTap={select(user)}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.role}</td>
      </Table.Row>
    ))}
  </tbody>
</Table>
            `}/>
            <Table style={{ margin: '24px 0' }} className="paper1">
              <thead>
                <Table.Toolbar colSpan={3}>
                  <Button style={{ margin: '0 8px', padding: '0 8px' }} primary flat>Add</Button>
                </Table.Toolbar>
                <Table.Row>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                </Table.Row>
              </thead>
              <tbody>
                {[
                  { firstName: 'Brian', lastName: 'Wilson', role: 'user' },
                  { firstName: 'Geoff', lastName: 'Hayes', role: 'user' },
                  { firstName: 'John', lastName: 'Doe', role: 'admin' }
                ].map((user, index) => (
                  <Table.Row key={index} onTouchTap={() => console.log('clicked', user)}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.role}</td>
                  </Table.Row>
                ))}
              </tbody>
            </Table>
          </section>

          <section>
            <Typ secondary display1>Spinner</Typ>
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
              <Checkbox label="Page is loading" value={this.state.isLoading} onChange={(e) => this.setState({ isLoading: e.target.value })}/>
            </div>
            <Spinner isOpen={this.state.isLoading}/>
          </section>

          <section>
            <Typ secondary display1>Responsive Events</Typ>
            <p>
              Responsive Events are emitted whenever the screen type or orientation changes. This can be used to
              modify the UI to suite the device. Unlike CSS media queries which change the style of always present
              elements, this feature can be used to completely change what application renders. Meaning that your
              app should only render the elements needed on mobile and not just hide the desktop elements.
            </p>
            <p>
              How you use this feature depends on what framework you use for your application. With Cerebral you would
              send a signal, with a flux framework you would call an action. In both cases you would then apply the
              screen data to your central store which would cause your application components which observe the screen
              object in your store to re-render.
            </p>
            <Example code={`
// how you apply the change to your store depends on your framework choice
events.responsive.addListener(screen => store.set('screen', screen));
            `}/>
            <p>
              Event listeners receive a screen object which looks like:
            </p>
            <Example code={`
{
  type: 'xs',
  size: 1,
  isLandscape: true,
  isPortrait: false
}
            `}/>
            <p>
              following the same reponsive configuration as bootstrap, <code>type</code> can be one
              of <code>'xs'</code>, <code>'sm'</code>, <code>'md'</code> or <code>'lg'</code>. <code>size</code> is
              the same as <code>type</code> (<code>xs=1, sm=2, md=3, lg=4</code>), but allows you to
              filter by range (<code>if (screen.size > 2) {}</code>).
            </p>
            <div className={`paper${this.state.screen.size} padded`}>
              As the screen gets larger this paper will rise.<br/>
              The screen is {this.state.screen.type}.
            </div>
            <p>
              The event is only triggered when these values change and not on every window resize event, so updating
              the UI every time this event is triggered should be ok.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

// render the app
ReactDOM.render(<Application/>, document.getElementById('root'));
