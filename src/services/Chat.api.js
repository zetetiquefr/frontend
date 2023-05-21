import BaseApi from './Api.js';

class ChatApi extends BaseApi {
    constructor() {
        super('chat');
    }

    async getChatByUuid(uuid) {
        try {
            const res = await this.get(`/${uuid}`);

            return res;
        } catch (err) {
            console.log(err);
            return {};
        }
    }

    async createChat(content, forumUuid, creatorUuid) {
        try {
            await this.post(`/`, {
                content: content,
                forum: {
                    uuid: forumUuid
                },
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

    async editChat(uuid, content, token) {
        try {
            await this.post("/edit", {
                uuid: uuid,
                content: content
            }, token);

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async deleteChat(uuid, token) {
        try {
            console.log("deleteChat", {
                uuid: uuid
            }, token)
            const res = await this.delete("/", {
                uuid: uuid
            }, token);

            console.log("deleteChat", res);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

let chatApi = new ChatApi();

export default chatApi; 