// enum Status {
//   TODO = 'TODO',
//   INPROGRESS = 'INPROGRESS',
//   DONE = 'DONE',
// }

// Sample array of tasks


export const typeDefs = `#graphql
  
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
