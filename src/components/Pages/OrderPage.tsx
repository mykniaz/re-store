import React from "react";
import OrderTable from "../OrderTable";

import { connect } from "react-redux"
import { addToOrder, removeFromOrder, removeOrder } from "../../actions";

type TOrderItems = Array<{
    id: number;
    title: string;
    count: number;
    total: number;
}>;

interface IProps {
    items: TOrderItems,
    total: number
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onDelete: (id: number) => void;
}

const OrderPage:React.SFC<IProps> = ({total, ...rest}) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1 className="h1">
                        Your order
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <OrderTable {...rest} />
                </div>
            </div>
            <div className="row">
                <div className="col text-right">
                    total {total}$
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({shoppingCard: {orderItems, orderTotal}}: {shoppingCard: { orderItems: TOrderItems, orderTotal: number }}) => ({items: orderItems, total: orderTotal});

const mapDispatchToProps = {
    onIncrease: addToOrder,
    onDecrease: removeFromOrder,
    onDelete: removeOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);