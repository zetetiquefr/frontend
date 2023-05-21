import BaseApi from './Api';

class UserApi extends BaseApi {
    constructor() {
        super('user');
    }

    async create(name, email, password) {
        const user = {
            name: name,
            email: email,
            password: password
        }

        try {
            const response = await this.post("/", user);

            console.log(response);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getByUuid(uuid, token) {
        try {
            const res = await this.get(`/${uuid}`, token)

            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
            return {};
        }
    }

    async getByEmail(email, token) {
        try {
            const response = await this.get("/", {
                email: email
            }, token);

            return response.data[0];
        } catch (error) {
            console.log(error);
            return {};
        }
    }

    async getUsers(token, page = 1, pageSize = 10) {
        try {
            const res = await this.get(`/?$page=${page}&page_size=${pageSize}`, {}, token);

            return res.data;
        } catch (err) {
            console.log(err)
            return []
        }
    }

    async updateUser(uuid, data, token) {
        try {
            const res = await this.put(`/`, {
                filter: {
                    uuid: uuid
                },
                user: data
            }, token);

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async deleteUser(uuid, token) {
        try {
            console.log("this is pur euuid", uuid, token);
            await this.delete("/", {
                "uuid": uuid
            }, token);

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

const userApi = new UserApi();

export default userApi;