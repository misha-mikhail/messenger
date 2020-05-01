import React from 'react';
import { mount } from 'enzyme';
import { AuthCredentialsForm } from './AuthCredentialsForm';
import { IUserCredentials } from '@chat/shared';

describe('AuthCredentialsForm', () => {
    it('handles inputs as expected', () => {
        const initialCredentials = { Username: '', Password: '' };

        let creds: IUserCredentials;

        function FormWrapper() {
            const [credentials, setCredentials] = React.useState<IUserCredentials>(initialCredentials);
            creds = credentials;

            return (<AuthCredentialsForm credentials={credentials} setCredentials={setCredentials} />);
        }

        const el = mount(<FormWrapper />);

        const inputs = el.find('input');
        expect(inputs.length).toBe(Object.keys(initialCredentials).length);

        const newUsername = 'uname';
        const newPassword = 'pwd';

        inputs.at(0).simulate('change', { target: { value: newUsername } });
        inputs.at(1).simulate('change', { target: { value: newPassword } });

        expect(creds!.Username).toBe(newUsername);
        expect(creds!.Password).toBe(newPassword);
    });
});
