import * as React from 'react';
import { Header } from './Header';
import reactTestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

test('Header render test', () => {
  const component = reactTestRenderer.create(
      <BrowserRouter>
        <Header addedAmount={3} orderTotal={1488} user={{ name: 'Test User' }}/>
      </BrowserRouter>,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
