import React, { useEffect, useState } from 'react';

export function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/messages/get').then(f => f.json()).then(j => setData(j))
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
