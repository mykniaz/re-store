import * as React from 'react';
import { cleanup } from '@testing-library/react';
import { IOrderTableItem, OrderTable } from './OrderTable';
import { shallow } from 'enzyme';
import OrderTableItem from './OrderTableItem';

afterEach(cleanup);

const getTestItem = (id: number, title = 'Test Title', count = 2, total = 50): IOrderTableItem => ({
  id,
  title,
  count,
  total,
});

describe('Order', () => {
  const testProps = {
    items: [],
    onIncrease: () => {},
    onDecrease: () => {},
    onDelete: () => {},
  };

  describe('Order Render', () => {
    const nextProps = {
      ...testProps,
      items: [],
    };

    const OrderContainer = shallow(<OrderTable {...nextProps} />);

    it('isRenderEmpty', () => {
      expect(
        OrderContainer.contains(
          <table className="table order-table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody />
          </table>,
        ),
      ).toEqual(true);
    });

    it('isRenderEmptyProperly', () => {
      expect(OrderContainer).toMatchSnapshot();
    });
  });

  describe('Order Render List', () => {
    const nextProps = {
      ...testProps,
      items: [
        getTestItem(1),
        getTestItem(2),
        getTestItem(3),
      ],
    };

    const OrderContainerList = shallow(<OrderTable {...nextProps} />);

    it('checkRenderListLength', () => {
      expect(
        OrderContainerList.find('OrderTableItem'),
      ).toHaveLength(nextProps.items.length);
    });

    it('isRenderProperly', () => {
      expect(OrderContainerList).toMatchSnapshot();
    });
  });
});
