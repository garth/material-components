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
import { Appbar, Button } from '../lib';

// component to render code examples
function Example({ code }) {
  return (
    <pre className="prettyprint lang-js linenums" style={{
      fontFamily: 'Ubuntu Mono',
      padding: '8px 0',
      margin: '0',
      width: '800px',
      borderRadius: '0'
    }}>
      {code.trim()}
    </pre>
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

  getChildContext() {
    return {
      componentStyle: {
        primaryColor: '#FFC107',
        primaryFontColor: '#000',
        secondaryColor: '#FF5722',
        secondaryFontColor: '#FFF'
      }
    };
  }

  render() {
    const paperStyle = {
      display: 'inline-block',
      width: '140px',
      height: '100px',
      margin: '24px 24px 24px 0'
    };

    return (
      <div>
        <Appbar>
          <Appbar.Button style={{ float: 'left' }}><Icon name="menu"/></Appbar.Button>
          <Appbar.Title>Material Components</Appbar.Title>
          <div style={{ float: 'right' }}>
            <Appbar.Button
              onTouchTap={() => location.href='https://github.com/garth/material-components'}>
              <FaIcon name="github"/>
            </Appbar.Button>
            <Appbar.Button><Icon name="more_vert"/></Appbar.Button>
          </div>
        </Appbar>
        <div style={{ padding: '24px' }}>
          <h2>Introduction</h2>
          <p>
            material-components is a library of <a href="https://facebook.github.io/react/">React</a> user
            interface components based on <a href="https://www.google.com/design/spec/">material design</a>.
          </p>
          <p>
            Unlike some other React based component libraries,
            material-components are completely stateless making them an ideal companion to libraries such
            as <a href="http://christianalfoni.com/cerebral/">cerebral</a> or <a href="http://rackt.github.io/redux/">redux</a>.
            But they can also be used with other flux based frameworks or even without a framework at all.
          </p>
          <p>
            For source code, installation and configuration info please see
            the <a href="https://github.com/garth/material-components">GitHub Repository</a>.
          </p>

          <h2>Import Components</h2>
          <Example code={`
import { Appbar, Button } from 'material-components';
          `}/>

          <h2>Paper</h2>
          <p>
            Add a paper class to an element to lift it from the page. The optional <code>padded</code> class
            gives the paper a default padding.
          </p>
          <Example code={`
<div className="paper1 padded">Paper 1</div>
<div className="paper2 padded">Paper 2</div>
<div className="paper3 padded">Paper 3</div>
<div className="paper4 padded">Paper 4</div>
<div className="paper5 padded">Paper 5</div>
          `}/>
          <div className="paper1 padded" style={paperStyle}>Paper 1</div>
          <div className="paper2 padded" style={paperStyle}>Paper 2</div>
          <div className="paper3 padded" style={paperStyle}>Paper 3</div>
          <div className="paper4 padded" style={paperStyle}>Paper 4</div>
          <div className="paper5 padded" style={paperStyle}>Paper 5</div>

          <h2>Appbar, Appbar.Title and Appbar.Button</h2>
          <Example code={`
<Appbar>
  <Appbar.Button style={{ float: 'left' }}><Icon name="menu"/></Appbar.Button>
  <Appbar.Title>Material Components</Appbar.Title>
  <div style={{ float: 'right' }}>
    <Appbar.Button
      onTouchTap={() => location.href='https://github.com/garth/material-components'}>
      <FaIcon name="github"/>
    </Appbar.Button>
    <Appbar.Button><Icon name="more_vert"/></Appbar.Button>
  </div>
</Appbar>
          `}/>
          <p>See the appbar above.</p>
          <p>
            When using a darker primary color, try
            using <code>{'<Appbar.Button lightWaves={true}>X</Appbar.Button>'}</code>
          </p>

          <h2>Buttons</h2>
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
        </div>
      </div>
    );
  }
}

// render the app
ReactDOM.render(<Application/>, document.getElementById('root'));
