import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Home() {
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
            <h2>Home</h2>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
}
