import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => setData((await axios.get('/messages/get')).data))();
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
