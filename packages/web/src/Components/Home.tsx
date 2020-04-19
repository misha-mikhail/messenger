import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { AuthState } from '../state';

const HomeComponent = (props: any)  => {
    const [data, setData] = useState(null);

    const getAndSetData = async () => {
        const resp = await axios.get('/messages/get');
        setData(resp.data);
    };

    useEffect(() => {
        getAndSetData();
    }, []);

    return (
        <div>
            <h2>Debug</h2>
            <div>
                GET '/messages/get': {JSON.stringify(data)}
            </div>
            <div>
                State: &nbsp;
                <code>
                    {props?.state && JSON.stringify(props.state)}
                </code>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AuthState) => ({ state });
export const Home = connect(mapStateToProps)(HomeComponent);
