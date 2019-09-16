import * as React from 'react';

interface IProps {
  items: Array<{
    id: number;
    title: string;
    count: number;
    total: number;
  }>;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

const OrderTable: React.SFC<IProps> = ({ items, onIncrease, onDecrease, onDelete }) => {
  const tableRows = items.map((col, colIndex: number) => {
    return (
      <tr key={col.id}>
        <th scope="row">{colIndex + 1}</th>
        <td>{col.title}</td>
        <td>{col.count}</td>
        <td>{col.total}$</td>
        <td>
          <div className="btn-group">
            <button
              className="btn btn-warning"
              onClick={() => onDecrease(col.id)}
            >
              -
            </button>
            <button
              className="btn btn-primary"
              onClick={() => onIncrease(col.id)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(col.id)}
            >
              Remove
            </button>
          </div>
        </td>
      </tr>
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
