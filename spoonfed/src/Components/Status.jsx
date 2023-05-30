import { useContext, useEffect, useState } from 'react';
import { AccountContext } from './Account';
import 'bootstrap/dist/css/bootstrap.css';


const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then((session) => {
                console.log('Session: ', session);
                setStatus(true);
            })
            .catch((err) => {
                console.log('Session: ', err);
                setStatus(false);
            });
    }, [status]);

    return (
        <div style={{backgroundColor: "#A7B7BD", color: "white"}}>
            {status ? (
                <div>
                    {' '}
                    You are logged in.
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                'Please Login'
            )}
        </div>
    );
};

export default Status;