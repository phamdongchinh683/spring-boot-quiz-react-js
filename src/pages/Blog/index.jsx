import React from 'react';
import useTokens from '../../jwt/useTokens';

const MyComponent = () => {
    const { token } = useTokens();

    const fetchData = async () => {
        const response = await fetch('http://localhost:8888/auth/register', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    };

    React.useEffect(() => {
        fetchData();
    }, [token]);

    return (
        <div>
            vô được rồi nè
        </div>
    );
};

export default MyComponent;
