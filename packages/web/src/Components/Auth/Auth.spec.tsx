import React from 'react';
import { mount } from 'enzyme';
import { Auth } from './Auth';

describe('Auth', () => {
    it.skip('changes state when user clicks tabs', () => {
        const el = mount(<Auth />);

        const links = el.find('a');

        // inputs.at(0).simulate('change', { target: { value: newUsername } });
        // inputs.at(1).simulate('change', { target: { value: newPassword } });

        // expect(creds!.Username).toBe(newUsername);
        // expect(creds!.Password).toBe(newPassword);
    });
});
