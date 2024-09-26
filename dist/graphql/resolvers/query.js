"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolvers = void 0;
const prismaClient_1 = require("../../prismaClient/prismaClient");
var Status;
(function (Status) {
    Status["TODO"] = "TODO";
    Status["INPROGRESS"] = "INPROGRESS";
    Status["DONE"] = "DONE";
})(Status || (Status = {}));
// Sample array of tasks
exports.queryResolvers = {
    Query: {
        tasks: async () => {
            const tasks = await prismaClient_1.prisma.task.findMany({
                orderBy: {
                    createdAt: "asc"
                }
            });
            return tasks;
        },
        taskById: async (parent, args) => {
            const task = await prismaClient_1.prisma.task.findUnique({
                where: {
                    id: args.id
                }
            });
            return task;
        }
    },
};
