import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';

@State({
  screen: ['screen']
})
export default class ResponsiveEvents extends Component {

  static displayName = 'ResponsiveEvents';

  static propTypes = {
    screen: PropTypes.object
  };

  render() {
    const {
      screen
    } = this.props;

    return (
      <div>
        <Example code={`
import { events } from 'material-components';
        `}/>
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
        <div className={`paper${screen.size} padded`}>
          As the screen gets larger this paper will rise.<br/>
          The screen is {screen.type}.
        </div>
        <p>
          The event is only triggered when these values change and not on every window resize event, so updating
          the UI every time this event is triggered should be ok.
        </p>
      </div>
    );
  }
}
