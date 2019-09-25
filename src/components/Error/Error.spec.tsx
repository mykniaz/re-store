import * as React from 'react';
import Error from './Error';
import reactTestRenderer from 'react-test-renderer';

test('Errors render test', () => {
  const component = reactTestRenderer.create(<Error />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
