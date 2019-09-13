import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const Header:React.SFC<{addedAmount: number, orderTotal: number}> = ({addedAmount, orderTotal}) => (
    <header className="navbar navbar-dark bg-dark mb-4">
        <Link className="navbar-brand mr-2" to="/" aria-label="ReStore">ReStore</Link>
        <div>
            <div className="text-light">added {addedAmount} items ({orderTotal}$)</div>
            <Link to="/order" className="btn btn-primary ml-4" type="submit">Buy</Link>
        </div>
    </header>
);

type TOrderItems = Array<{
    id: number;
    title: string;
    count: number;
    total: number;
}>;

const mapStateToProps = ({shoppingCard: {orderItems, orderTotal}}: {shoppingCard: { orderItems: TOrderItems, orderTotal: number }}) => {

    const reducer = (accumulator: number, order: {count: number}) => accumulator + order.count;

    return {
        addedAmount: orderItems.reduce(reducer, 0),
        orderTotal: orderTotal,
    }
};

export default connect(mapStateToProps)(Header);