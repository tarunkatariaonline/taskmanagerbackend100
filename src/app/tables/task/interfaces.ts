import { Status } from "@prisma/client"

export interface CreateTaskInterface{

    title: string,
     description?: string,
     status:Status 

}

export interface UpdateTaskInterface{  id:string, 
    title?:string,
    description?:string, 
    status:Status
}


export interface TaskInterface {
    id:string,
    title:string,
    description?:string|null,
    status:Status,
 
}