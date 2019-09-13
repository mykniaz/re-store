import * as React from 'react';
import BookList from '../BookList';

import { UIBtn } from '../../ui';

const HomePage = () => {
  const onClickHandler = () => console.log(123123);

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="h1">
            List of books
            <UIBtn label={'label'} onClick={onClickHandler}>
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
