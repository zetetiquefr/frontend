import BaseApi from './Api.js';

class ForumApi extends BaseApi {
    constructor() {
        super('forum')
    }

    async getForum(page = 1, pageSize = 10) {
        try {
            const res = await this.get(`/?page=${page}&page_size=${pageSize}`);

            return res.data;
        } catch (err) {
            console.log(err);
            return []
        }
    }

    async getByUuid(uuid) {
        try {
            const res = await this.get(`/${uuid}`);

            return res;
        } catch (err) {
            console.log(err);
            return {}
        }
    }

    async createForum(name, description, creatorUuid) {
        try {
            const res = await this.post('/', {
                name: name,
                description: description,
                creator: {
                    uuid: creatorUuid
                }
            });

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

let forumApi = new ForumApi();

export default forumApi;