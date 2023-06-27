export const getIsLoggedIn = state => state.auth.isLogin;

export const getUserName = state => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
}

export default authSelectors;