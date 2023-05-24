import axios from 'axios';

export default class Api {
    constructor(endpoint) {
        this.url = `${process.env.REACT_APP_API_URL}/${endpoint}`
    }

    async get(endpoint, body, token = undefined) {

        const response = await axios.get(this.url + endpoint, {
            data: body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ?? ""
            }
        });
        return response.data;
    }

    async post(endpoint, body = {}, token = "") {
        const response = await axios.post(this.url + endpoint, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        return response.data;
    }

    async put(endpoint, body = {}, token = "") {
        const response = await axios.put(this.url + endpoint, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        return response.data;
    }

    async delete(endpoint, body = {}, token = "") {
        console.log("the pure body", body, token);

        const response = await axios.delete(this.url + endpoint, {
            data: body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        console.log("delete", response);
        return response.data;
    }
}