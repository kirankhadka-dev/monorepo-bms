import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `postgresql://neondb_owner:npg_Z1rJxBg2OsRm@ep-noisy-dawn-ade2qzst-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`;
// const connectionString = process.env.DATABASE_URL;
console.log(`Connection String : ${connectionString}`);

console.log("connection string", connectionString);
const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
