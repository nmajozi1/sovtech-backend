import { ChuckNorisService } from '../services/chuck.noris.service';

const chuckNorisService = new ChuckNorisService();

export default {
    Query: {
        catagories: () => chuckNorisService.getCatagories(),
        randomJoke(parent: any, args: any, context: any, info: any) {
            return chuckNorisService.getRandomJoke(args.catagory)
        }
    },
}