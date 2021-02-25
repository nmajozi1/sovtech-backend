import { gql } from 'apollo-server';

const typeDefs = gql `
    type RandomJoke {
        categories: [String]
        created_at: String
        icon_url: String
        id: String
        updated_at: String
        url: String
        value: String
    }

    type Query {
        catagories: [String]
        randomJoke(catagory: String): RandomJoke
    }
`;

export default typeDefs;