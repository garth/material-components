import React from 'react';
import Example from './example';

export default () => (
  <div>
    <Example
      code={`
import { Form } from 'material-components';
        `}
    />
    <p>
      The <code>Form</code> component will prevent the default form submit behaviour and pass the submit event on to the
      given onSubmit handler.
    </p>
    <Example
      code={`
<Form onSubmit={onSubmit}/>
  <Button type="submit">Submit</Button>
</Form>
        `}
    />
  </div>
);
