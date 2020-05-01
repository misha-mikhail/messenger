import React from 'react';
import { mount } from 'enzyme';
import { Auth, Submit } from './Auth';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

describe('Auth', () => {
    it('changes state when user clicks tabs', () => {
        const el = mount(
            <Provider store={store}>
                <Auth />
            </Provider>
        );

        const links = el.find('a');
        const loginLink = links.findWhere(x => x.text().toLowerCase().includes('login')).at(0);
        const registerLink = links.findWhere(x => x.text().toLowerCase().includes('register')).at(0);

        const button = el.find(Submit);
        const getButtonText = () => button.text().toLowerCase();

        expect(getButtonText()).not.toContain('register');

        registerLink.simulate('click');
        expect(getButtonText()).toContain('register');

        loginLink.simulate('click');
        expect(getButtonText()).not.toContain('register');
    });
});
