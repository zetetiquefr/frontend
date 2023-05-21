import BaseApi from './Api';

class AuthApi extends BaseApi {
    constructor() {
        super('auth')
    }

    async login(email, password) {
        try {
            const res = await this.post('/login', {
                email: email,
                password: password
            })

            return {
                token: res.token,
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async validUserToken(token) {
        try {
            await this.post('/user/valid', {
                token: token
            })

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async haveAccessToAdminPanel(token) {
        try {
            await this.post('/access/admin_panel', {
                token: token
            })

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

const authApi = new AuthApi();

export default authApi;