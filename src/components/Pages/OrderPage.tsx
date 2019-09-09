import React from "react";
import OrderTable from "../OrderTable";


const OrderPage = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1 className="h1">
                        Your order
                    </h1>
                </div>
            </div>k
            <div className="row">
                <div className="col">
                    <OrderTable />
                </div>
            </div>
            <div className="row">
                <div className="col text-right">
                    total 300$
                </div>
            </div>
        </div>
    )
};

export default OrderPage;