import React from 'react';
import { Header } from './Header';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';


test('Header render test', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Header addedAmount={3} orderTotal={1488}/>
        </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});