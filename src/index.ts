import { initServer } from "./graphql/index";
import { Request,Response } from "express";
async function init(){
    const app = await initServer()
    app.get('/',(req:Request,res:Response)=>{
        res.send('Hello World Server is working')
    })
    app.listen(8000,()=>{
        console.log('Server is running on port 8000')
    })
}


init()