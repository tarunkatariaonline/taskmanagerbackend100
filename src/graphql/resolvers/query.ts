import { prisma } from "../../prismaClient/prismaClient";

enum Status {
    TODO = 'TODO',
    INPROGRESS = 'INPROGRESS',
    DONE = 'DONE',
  }
  
  // Sample array of tasks


export const queryResolvers = {
    Query: {
      tasks: async() => {
        const tasks = await prisma.task.findMany({
          orderBy:{
            createdAt:"asc"
          }
        })
        return tasks
      },
      taskById:async(parent:any,args:{
        id: string
      })=>{
        const task = await prisma.task.findUnique({
          where:{
            id:args.id
          }
        })
        return task
      }
    },
  };
  

  