import axios from 'axios';

export default class Api {
    constructor(endpoint) {
        this.url = 'http://localhost:3000/' + endpoint;
    }

    async get(endpoint, token = undefined) {
        let headers = {
            'Content-Type': 'application/json'
        };

        if (token) {
            headers['Authorization'] = token;
        }

        const response = await axios.get(this.url + endpoint, {
            headers: headers
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