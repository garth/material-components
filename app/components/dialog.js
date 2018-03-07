import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Button, Dialog } from '../../lib';
import { state, signal } from 'cerebral/tags';

const DialogDemo = ({ dialog, dialogOpened, dialogClosed }) => (
  <div>
    <Example
      code={`
import { Dialog } from 'material-components';
        `}
    />
    <Example
      code={`
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
        `}
    />
    <Button style={{ margin: '24px 0' }} primary onClick={() => dialogOpened()}>
      Show Dialog
    </Button>
    <Dialog
      isOpen={dialog.showDialog}
      width={400}
      height={172}
      title="Do you confirm or deny?"
      okLabel="Confirm"
      onOk={() => dialogClosed()}
      cancelLabel="Deny"
      onCancel={() => dialogClosed()}>
      the details of allogation
    </Dialog>
  </div>
);

export default connect(
  {
    dialog: state`demos.dialog`,
    dialogOpened: signal`dialogOpened`,
    dialogClosed: signal`dialogClosed`
  },
  DialogDemo
);
