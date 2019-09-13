import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const CardPage = ({ match }: RouteComponentProps<{ id: string | undefined }>) => {
  return (
    <h1 className="h1">
      CardPage
    </h1>
  );
};

export default CardPage;
