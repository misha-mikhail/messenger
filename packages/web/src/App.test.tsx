import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { App } from './App';
import { store } from './state';
import { Auth } from './Components/Auth';
import * as actions from './state/actions';
import { act } from '@testing-library/react';
import { Link } from 'react-router-dom';

describe('App component', () => {

    // TODO:

    it.skip('If not logged: shows Auth window', () => {
        console.log(store.getState());

        const el = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const goAuthLink = el.findWhere(n =>
                n.is(Link)
            && n.text().toLowerCase().includes('sign in'));

        goAuthLink.simulate('click');

        console.log(el.text());
        expect(!!!!false).toBe(true);
    });

    it.skip('If logged: does not show the Auth window', () => {
        store.dispatch(actions.setToken('myVeryValidToken'));
        console.log(store.getState());

        const el = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(el.contains('Auth')).toBe(false);
    });
});
