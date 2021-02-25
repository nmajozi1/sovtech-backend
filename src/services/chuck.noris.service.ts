const axios = require('axios').default;
import { IJokes } from '../interfaces/jokes.interface';

export class ChuckNorisService {

    private baseUrl: string = 'https://api.chucknorris.io';

    constructor() {}

    async getCatagories(): Promise<any> {
        try {
            const response = await axios.get(`${this.baseUrl}/jokes/categories`);
            return response.data;
        } catch (error) {
            console.error(error);
            return error
        }
    }

    async getRandomJoke(catagory: string): Promise<IJokes> {
        try {
            const response = await axios.get(`${this.baseUrl}/jokes/random?category=${catagory}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return error
        }
    }
}