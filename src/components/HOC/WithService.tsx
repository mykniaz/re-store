import React from "react";
import { BookStoreServiceConsumer } from "../ServiceContext"

const WithService = () => (Wrapped:any) =>  {
    return (props: any) => (
        <BookStoreServiceConsumer>
            { (service) => <Wrapped {...props} service={service} />}
        </BookStoreServiceConsumer>
    )
};

export default WithService;

