import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import { prisma } from "@repo/db";
export default async function Home() {
const user =await prisma.user.findFirst()  

console.log(user)

  return (
    <div>
      <h2>Welcome to the Programming World </h2>
      <h2>Username: {user?.username}</h2>
      <p>Password: {user?.password}</p>
    </div>
  );
}
