import * as React from 'react';
import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import OrderTableItem from './OrderTableItem';
import { IOrderTableItem } from './OrderTable';

afterEach(cleanup);

const getTestItem = (id: number, title = 'Test Title', count = 2, total = 50): IOrderTableItem => ({
  id,
  title,
  count,
  total,
});

describe('Order', () => {
  const testProps = {
    col: getTestItem(1),
    colIndex: 0,
    onIncrease: () => {},
    onDecrease: () => {},
    onDelete: () => {},
  };

  describe('Order Item Render', () => {
    const nextProps = {
      ...testProps,
    };

    const OrderItemContainer = shallow(<OrderTableItem {...nextProps} />);

    it('isRenderProperly', () => {
      expect(OrderItemContainer).toMatchSnapshot();
    });
  });

  describe('Order Click', () => {
    const nextProps = {
      ...testProps,
      onIncrease: jest.fn(),
      onDecrease: jest.fn(),
      onDelete: jest.fn(),
    };

    const OrderItemContainer = shallow(<OrderTableItem {...nextProps} />);

    const onIncreaseButton = OrderItemContainer.find('button.btn-primary');
    const onDecreaseButton = OrderItemContainer.find('button.btn-warning');
    const onDeleteButton = OrderItemContainer.find('button.btn-danger');

    it('onIncreaseEvent', () => {
      onIncreaseButton.simulate('click');

      expect(nextProps.onIncrease).toBeCalled();
    });

    it('onDecreaseEvent', () => {
      onDecreaseButton.simulate('click');

      expect(nextProps.onIncrease).toBeCalled();
    });

    it('onDeleteEvent', () => {
      onDeleteButton.simulate('click');

      expect(nextProps.onIncrease).toBeCalled();
    });
  });
});
