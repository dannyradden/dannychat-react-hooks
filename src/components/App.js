import React, {useState} from 'react';
import Chat from './Chat'
import Login from './Login'

const App = () => {
    const [user, setUser] = useState(null);
    const renderApp = () => {
        if (user) {
            return <Chat user={user} />;
        } else {
            return <Login setUser={setUser} />;
        }
    };
    return (
        <div className='container'>
            {renderApp()}
        </div>
    );
};
export default App;
