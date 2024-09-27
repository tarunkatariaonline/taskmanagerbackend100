"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
exports.mutations = `#graphql

   
  createTask(title:String!,description:String,status:String):Task
  deleteTask(id:String!):Boolean
  updateTask(id:String!,title:String,status:String!,description:String):Task
`;
