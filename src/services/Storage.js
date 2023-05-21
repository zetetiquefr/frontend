class Storage {
    setLoginToken(token) {
        localStorage.setItem('loginToken', token);
    }

    getLoginToken() {
        return localStorage.getItem('loginToken');
    }

    setUserInfo(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUserInfo() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

let storage = new Storage();

export default storage;