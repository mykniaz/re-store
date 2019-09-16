import * as React from 'react';
import BookList from '../BookList';

import { UIBtn } from '../../ui';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="h1">
            List of books
            <UIBtn label={'label'}>
              UI button
            </UIBtn>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BookList/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
