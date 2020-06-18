// Check if user is not logged in and go to auth
const checkLoggedIn = () => {
    const token = JSON.parse(localStorage.getItem('token'))

    return token && token.token && +(new Date(token.expireDate)) > +(new Date(Date.now()))
}

export default checkLoggedIn;