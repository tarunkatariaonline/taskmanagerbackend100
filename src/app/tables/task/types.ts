export const types = `#graphql
  
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

input CreateTaskPayload {
    title: String!
    description: String
    status: Status
}
 
`;
