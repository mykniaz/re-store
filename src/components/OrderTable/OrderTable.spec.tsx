import * as React from 'react';
import { IOrderTableItem, OrderTable } from './OrderTable';
import reactTestRenderer from 'react-test-renderer';
import { log } from 'util';

const getTestItem = (id: number) => ({
  id,
  title: 'Test Title',
  count: 23,
  total: 332,
});

const getOrderTableElement = (items: IOrderTableItem[]) => {
  return (
    <OrderTable
      items={items}
      onIncrease={() => {}}
      onDecrease={() => {}}
      onDelete={() => {}}
    />
  );
};

test('Orders render test', () => {
  const items = [
    getTestItem(1),
    getTestItem(2),
    getTestItem(3),
    getTestItem(4),
    getTestItem(5),
  ];

  const component = reactTestRenderer.create(getOrderTableElement(items));

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
