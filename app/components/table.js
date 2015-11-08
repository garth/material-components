import React, { Component } from 'react';
import Example from './example';
import { Button, Table } from '../../lib';

export default class TableDemo extends Component {

  static displayName = 'Table';

  render() {
    return (
      <div>
        <Example code={`
import { Table } from 'material-components';
        `}/>
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
              <Button style={{ margin: '0 8px', padding: '0 8px' }} primary flat onTouchTap={() => {}}>Add</Button>
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
      </div>
    );
  }
}
