import * as React from 'react';
import { BookStoreServiceConsumer } from '../ServiceContext';

const WithBookStoreService = () => (Wrapped: any) =>  {
  return (props: any) => (
      <BookStoreServiceConsumer>
        {service => <Wrapped {...props} service={service} />}
      </BookStoreServiceConsumer>
    );
};

export default WithBookStoreService;
