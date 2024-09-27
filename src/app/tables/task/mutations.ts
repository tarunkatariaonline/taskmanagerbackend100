
export const mutations =`#graphql

   
  createTask(title:String!,description:String,status:String):Task
  deleteTask(id:String!):Boolean
  updateTask(id:String!,title:String,status:String!,description:String):Task
`