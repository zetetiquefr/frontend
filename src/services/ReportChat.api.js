import BaseApi from './Api';

class ReportChatApi extends BaseApi {
    constructor() {
        super('report/chat');
    }

    async create(creatorUuid, chatUuid, reason) {
        try {
            const response = await this.post("/", {
                content: reason,
                creator: {
                    uuid: creatorUuid
                },
                chat: {
                    uuid: chatUuid
                }
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getReports() {
        try {
            const response = await this.get("/");

            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

let reportChatApi = new ReportChatApi();

export default reportChatApi;