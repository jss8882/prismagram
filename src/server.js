require("dotenv").config();
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema"


const PORT = process.env.PORT || 4000;

// const typeDefs = `
//     type Query{
//         hello: String!
//     }
// `

// const resolvers = {
//     Query:{
//         hello : () => "HI"
//     }

// }

// const server = new GraphQLServer({ typeDefs, resolvers});

const server = new GraphQLServer({schema})

//graphQL은 express Server를 내장하므로 이에 접근 가능
server.express.use(logger("dev"));


server.start({port:PORT}, ()=>console.log(`Server runnning on http://localhost:${PORT}`));