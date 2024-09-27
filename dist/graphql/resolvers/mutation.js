"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationResolvers = void 0;
const prismaClient_1 = require("../../prismaClient/prismaClient");
exports.mutationResolvers = {
    Mutation: {
        createTask: async (parent, args) => {
            const task = await prismaClient_1.prisma.task.create({
                data: {
                    title: args.title,
                    description: args.description,
                    status: "TODO"
                }
            });
            console.log(task);
            return task;
        },
        deleteTask: async (parent, args) => {
            try {
                await prismaClient_1.prisma.task.delete({
                    where: {
                        id: args.id
                    },
                });
                return true;
            }
            catch {
                return false;
            }
        },
        updateTask: async (parent, args) => {
            console.log(args);
            const task = await prismaClient_1.prisma.task.update({
                where: {
                    id: args.id
                },
                data: {
                    title: args.title,
                    description: args.description,
                    status: args.status
                }
            });
            return task;
        }
    },
};
