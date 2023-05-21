import BaseApi from './Api';

class ReportForumApi extends BaseApi {
    constructor() {
        super('report/forum');
    }

    async create(creatorUuid, forumUuid, reason) {
        try {
            const response = await this.post("/", {
                content: reason,
                creator: {
                    uuid: creatorUuid
                },
                forum: {
                    uuid: forumUuid
                }
            });

            console.log(response);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getAllReports() {
        try {
            const response = await this.get("/");

            return response;
        } catch (err) {
            console.log(err);
            return []
        }
    }
}

let reportForumApi = new ReportForumApi();

export default reportForumApi;