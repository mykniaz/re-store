import * as React from 'react';

import OrderTableItem from './OrderTableItem';

export interface IOrderTableItem {
  id: number;
  title: string;
  count: number;
  total: number;
}

interface IProps {
  items: IOrderTableItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

export const OrderTable: React.SFC<IProps> = ({ items, onIncrease, onDecrease, onDelete }) => {
  const tableRows = items.map((col, colIndex: number) => {
    return (
      <OrderTableItem
        key={col.id}
        col={col}
        colIndex={colIndex}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onDelete={onDelete}
      />
    );
  });

  return (
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
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default OrderTable;
