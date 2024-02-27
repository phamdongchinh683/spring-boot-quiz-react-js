import Guest from '../Guest';

const LoginSuccessful = ({ setToken, TextStatus }) => {
    return (
        <div className="container-status-login">
            <Guest setToken={setToken} TextStatus={TextStatus} />
        </div>
    );
};

export default LoginSuccessful;