import { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';

// NOTE ADD TYPE SAFETY
export const resolvers = {
    Query: {
        tasks: async (_parent: any, args: any, ctx: any) =>
            await ctx.prisma.task.findMany(),
    },
};
