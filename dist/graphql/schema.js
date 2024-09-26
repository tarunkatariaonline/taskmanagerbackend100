"use strict";
// enum Status {
//   TODO = 'TODO',
//   INPROGRESS = 'INPROGRESS',
//   DONE = 'DONE',
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
// Sample array of tasks
exports.typeDefs = `#graphql
  
  enum Status{
    TODO,
    INPROGRESS,
    DONE
  }
  type Task {
    id: ID!,
    title: String,
    description: String,
    status:Status!,
    createdAt:String!
    updatedAt:String!

  }
  type Query {
    tasks:[Task]
    taskById(id:String!):Task
  }

  type Mutation {
   
    createTask(title:String!,description:String):Task
    deleteTask(id:String!):Boolean
    updateTask(id:String!,title:String,status:String!,description:String):Task
  }
`;
