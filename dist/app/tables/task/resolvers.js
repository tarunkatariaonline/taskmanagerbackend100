"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const prismaClient_1 = require("../../../prismaClient/prismaClient");
const mutations = {
    createTask: async (parent, args) => {
        try {
            if (!args.title) {
                throw new Error("Title is required");
            }
            if (!args.status) {
                throw new Error("Status is required");
            }
            const task = await prismaClient_1.prisma.task.create({
                data: {
                    title: args.title,
                    description: args.description,
                    status: args.status,
                },
            });
            // console.log(task)
            return task;
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteTask: async (parent, args) => {
        try {
            if (!args.id) {
                throw new Error("id is required");
            }
            await prismaClient_1.prisma.task.delete({
                where: {
                    id: args.id,
                },
            });
            return true;
        }
        catch {
            throw new Error("Id not found  Please Enter Correct Id!");
        }
    },
    updateTask: async (parent, args) => {
        // console.log(args)
        if (!args.id) {
            throw new Error("id is required");
        }
        if (!args.title) {
            throw new Error("Title is required");
        }
        if (!args.status) {
            throw new Error("Status is required");
        }
        const task = await prismaClient_1.prisma.task.update({
            where: {
                id: args.id,
            },
            data: {
                title: args.title,
                description: args.description,
                status: args.status,
            },
        });
        if (!task) {
            throw new Error("Task not found Please Correct Id !");
        }
        return task;
    },
};
const quaries = {
    tasks: async () => {
        const tasks = await prismaClient_1.prisma.task.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return tasks;
    },
    taskById: async (parent, args) => {
        if (!args.id) {
            throw new Error("id is required");
        }
        const task = await prismaClient_1.prisma.task.findUnique({
            where: {
                id: args.id,
            },
        });
        if (!task) {
            throw new Error("Task not found");
        }
        return task;
    },
};
exports.resolvers = { mutations, quaries };
