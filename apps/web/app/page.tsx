import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import {prisma}  from "@repo/db"


export default async function Home() {
  return (
    <div>
      <h2>Welcome to the programming World </h2>
    </div>
  );
}
