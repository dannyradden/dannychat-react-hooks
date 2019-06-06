import React, {useState} from 'react';
import {NotificationManager} from 'react-notifications';
import {CometChat} from '@cometchat-pro/chat';
import config from '../config';


const Login = props => {
    const [uidValue, setUidValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setIsSubmitting(true);
        CometChat.login(uidValue, config.apiKey).then(
            User => {
                NotificationManager.success('You are now logged in', 'Login Success');
                console.log('Login Successful:', {User});
                props.setUser(User);
            },
            error => {
                NotificationManager.error('Please try again', 'Login Failed');
                console.log('Login failed with exception:', {error});
                setIsSubmitting(false);
            }
        );
    };

    return (
        <div>
            <h3>Login to Awesome Chat</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='Your Username'
                        value={uidValue}
                        onChange={event => setUidValue(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='submit'
                        value={`${isSubmitting ? 'Loading...' : 'Login'}`}
                        disabled={isSubmitting}
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
