import { useSelector } from 'react-redux';

const useAuth = () => {
    const refreshToken = useSelector(state => state.auth.session.refreshToken);
    return refreshToken;
};

export default useAuth;