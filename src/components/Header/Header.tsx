import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface IProps {
  addedAmount: number;
  orderTotal: number;
  user: { name: string };
}

export const Header: React.SFC<IProps> = ({ addedAmount, orderTotal, user }) => (
  <header className="navbar navbar-dark bg-dark mb-4">
    <div className="container">
      <div className="row flex-grow-1">
        <div className="col col-sm-4">
          <Link className="navbar-brand mr-2" to="/" aria-label="ReStore">ReStore</Link>
        </div>
        <div className="col col-sm-4 text-center">
          <div className="text-light mt-2">
            Welcome: {user.name}
          </div>
        </div>
        <div className="col col-sm-4 text-right">
          <span className="text-light">
             added {addedAmount} items ({orderTotal}$)
          </span>
          <Link to="/order" className="btn btn-primary ml-4" type="submit">Buy</Link>
        </div>
      </div>
    </div>
  </header>
);

type TOrderItems = Array<{
  id: number;
  title: string;
  count: number;
  total: number;
}>;

const mapStateToProps = (
    {
      shoppingCard: { orderItems, orderTotal },
      user,
    }: {
      shoppingCard: { orderItems: TOrderItems, orderTotal: number },
      user: {name: string},
    },
    ) => {
  const reducer = (accumulator: number, order: { count: number }) => accumulator + order.count;

  return {
    orderTotal,
    user,
    addedAmount: orderItems.reduce(reducer, 0),
  };
};

export default connect(mapStateToProps)(Header);
