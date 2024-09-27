
import { title } from "process";
import { prisma } from "../../../prismaClient/prismaClient";
import { Status} from "@prisma/client";
import { CreateTaskInterface, TaskInterface, UpdateTaskInterface } from "./interfaces";

 const mutations = {

    createTask: async (parent: any, args: CreateTaskInterface) => {

      
     try{
        if(!args.title){
            throw new Error("Title is required");
        }
        if(!args.status){
            throw new Error("Status is required");
        }
      const task:TaskInterface = await prisma.task.create({
        data: {
          title: args.title,
          description: args.description,
          status: args.status
         
        }

      })
      console.log(task)


      return task
    }catch(err){
      
    }
    },
    deleteTask:async(parent:any,args:{ id:string})=>{
    
      try{
        if(!args.id){
            throw new Error("id is required");
        }
          await prisma.task.delete(
        {
          where: {
            id:args.id
          },
        }
       )
     return true
      }catch{
        return false
      }
   
    },
    updateTask:async(parent:any,args:UpdateTaskInterface)=>{
    
    console.log(args)
       
    const task  =  await prisma.task.update({
        where:{
          id:args.id
        },
        data:{
            title:args.title,
            description:args.description,
            status:args.status
        }
      })
      return task
    }


};

const quaries ={
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
}


export const resolvers = {mutations,quaries}