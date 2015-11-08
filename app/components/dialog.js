import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Example from './example';
import { Button, Dialog } from '../../lib';

@State({
  dialog: ['demos', 'dialog']
})
export default class DialogDemo extends Component {

  static displayName = 'Dialog';

  static propTypes = {
    signals: PropTypes.object,
    dialog: PropTypes.object
  };

  render() {
    const {
      signals,
      dialog
    } = this.props;

    return (
      <div>
        <Example code={`
import { Dialog } from 'material-components';
        `}/>
        <Example code={`
<Dialog
  isOpen={showDialog}
  width={400}
  height={172}
  title="Question?"
  okLabel="OK"
  onOk={onOk}
  cancelLabel="Cancel"
  onCancel={onCancel}>
</Dialog>
        `}/>
        <Button style={{ margin: '24px 0' }} primary onTouchTap={() => signals.dialogOpened()}>Show Dialog</Button>
        <Dialog
          isOpen={dialog.showDialog}
          width={400}
          height={172}
          title="Do you confirm or deny?"
          okLabel="Confirm"
          onOk={() => signals.dialogClosed()}
          cancelLabel="Deny"
          onCancel={() => signals.dialogClosed()}>
          the details of allogation
        </Dialog>
      </div>
    );
  }
}
