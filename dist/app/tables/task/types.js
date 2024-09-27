"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
exports.types = `#graphql
  
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
