import * as React from 'react';
import { IOrderTableItem } from './OrderTable';

interface IProps {
  col: IOrderTableItem;
  colIndex: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

const OrderTableItem: React.SFC<IProps> = ({ col, colIndex, onDecrease, onIncrease, onDelete }) => {
  return (
    <tr>
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
};

export default OrderTableItem;
